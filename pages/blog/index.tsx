import BlurImage, { BlurImageProps } from '@atoms/image/BlurImage';
import { Section } from '@atoms/layout/Section';
import { WH1 } from '@atoms/typo/headings/WH1';
import { PostData } from '@models/data/PostData';
import { PageErrorProps } from '@models/page/PageErrorProps';
import { Posts, PostsProps } from '@organisms/Posts';
import ImageService from '@services/image/image.service';
import PostService from '@services/post/post.service';
import { GetServerSideProps } from 'next';

export interface BlogProps {
  intro: PostsProps;
  posts: PostData[];
  tags: string[];
  heroImage: BlurImageProps;
}
export const Blog = ({ intro, posts, tags, heroImage }: BlogProps): React.ReactElement => {
  return (
    <>
      <div className="relative" style={{ width: '100vw', height: '60vh' }}>
        <div className="absolute z-50 top-20 left-4 sm:left-24">
          <WH1>OUR BLOG</WH1>
        </div>
        <BlurImage
          className="w-full h-full"
          src={heroImage.src}
          alt={heroImage.alt}
          base64={heroImage.base64}
        />
      </div>
      <Section showBorderTop={false}>
        <Posts intro={intro} posts={posts} tags={tags} />
      </Section>
    </>
  );
};
export const getServerSideProps: GetServerSideProps = async (): Promise<
  { props: BlogProps } | PageErrorProps
> => {
  const postData = await PostService.fetchPosts();
  const heroImage = await ImageService.getBlurImageProps('/blog.jpg', 'Man giving food to giraffe');

  const data = postData?.data &&
    postData?.tags &&
    heroImage && {
      intro: { heading: 'Our Posts' },
      posts: postData.data,
      tags: Array.from(postData.tags),
      heroImage,
    };

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

export default Blog;
