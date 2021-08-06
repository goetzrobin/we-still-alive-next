import { GetServerSideProps } from 'next';
import { BlurImageProps } from '@atoms/image/BlurImage';
import { Section } from '@atoms/layout/Section';
import SiteLayout from '@layouts/SiteLayout';
import { AuthorData } from '@models/data/AuthorData';
import { ObjectiveData } from '@models/data/ObjectiveData';
import { PostData } from '@models/data/PostData';
import { PageErrorProps } from '@models/page/PageErrorProps';
import { BlogIntro, BlogIntroProps } from '@organisms/intros/BlogIntro/BlogIntro';
import { Donations, DonationsProps } from '@organisms/Donations';
import { Intro, IntroProps } from '@organisms/Intro';
import { Objectives, ObjectivesProps } from '@organisms/Objectives';
import { Posts, PostsProps } from '@organisms/Posts';
import AuthorService from '@services/author/author.service';
import ImageService from '@services/image/image.service';
import IndexService from '@services/index/index.service';
import ObjectiveService from '@services/objective/objective.service';
import PostService from '@services/post/post.service';
import DonationService from '@services/donation/donation.service';
import { DonationData } from '@models/data/DonationData';
import { IndexHero } from '@organisms/heros/IndexHero';
import { WH1 } from '@atoms/typo/headings/WH1';

export interface IndexData {
  intro: IntroProps;
  objectives: ObjectivesProps;
  blog: BlogIntroProps;
  posts: PostsProps;
  donations: DonationsProps;
}

interface IndexProps {
  indexData: IndexData;
  indexHeroImage: BlurImageProps;
  authorData: AuthorData;
  objectivesList: ObjectiveData[];
  postsList: PostData[];
  postsTags: string[];
  donationsList: DonationData[];
}

const Home = ({
  indexHeroImage,
  indexData: { intro, objectives, blog, posts, donations },
  authorData,
  objectivesList,
  postsList,
  postsTags,
  donationsList,
}: IndexProps): React.ReactElement => {
  return (
    <>
      <IndexHero heroImage={indexHeroImage} />
      <Section>
        <Objectives intro={objectives} objectives={objectivesList} />
      </Section>
      <Section>
        <BlogIntro blogIntro={blog} author={authorData} />
      </Section>
      <Section showBorderTop={false}>
        <Intro intro={intro} author={authorData} />
      </Section>
      <Section>
        <WH1>{posts.heading}</WH1>
        <Posts intro={posts} posts={postsList} tags={postsTags} />
      </Section>
      <Section>
        <Donations intro={donations} donations={donationsList} />
      </Section>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (): Promise<
  { props: IndexProps } | PageErrorProps
> => {
  const indexData = await IndexService.fetchIndexData();
  const authorData = await AuthorService.fetchAuthorData();
  const objectivesList = await ObjectiveService.fetchAllObjectives();
  const donationsList = await DonationService.fetchAllDonations();
  const postData = await PostService.fetchPosts(4, 1, 5);
  const indexHeroImage = await ImageService.getBlurImageProps(
    '/guysrunning.jpg',
    'Man standing in field in Kenia'
  );
  const data =
    indexData &&
    indexHeroImage &&
    authorData &&
    objectivesList &&
    postData?.data &&
    postData?.tags &&
    donationsList
      ? {
          indexData,
          authorData,
          indexHeroImage,
          objectivesList,
          postsList: postData.data,
          postsTags: Array.from(postData.tags),
          donationsList,
        }
      : null;

  if (!data) {
    return {
      redirect: {
        destination: '/error',
        permanent: false,
      },
    };
  }

  return {
    props: data,
  };
};

const getLayout = (page: React.ReactElement): React.ReactElement => (
  <SiteLayout absoluteHeader={true}>{page}</SiteLayout>
);

Home.getLayout = getLayout;

export default Home;
