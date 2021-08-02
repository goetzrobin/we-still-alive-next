import BlurImage from '@atoms/image/BlurImage';
import { Section } from '@atoms/layout/Section';
import { WH1 } from '@atoms/typo/headings/WH1';
import MarkDown from '@atoms/typo/markdown/Markdown';
import { PostData } from '@models/data/PostData';
import { PageErrorProps } from '@models/page/PageErrorProps';
import PostService from '@services/post/post.service';
import { GetServerSideProps } from 'next';

type PostProps = PostData;

export const Post = ({ headline, image, content, tags }: PostProps): React.ReactElement => {
  return (
    <Section>
      <WH1>{headline}</WH1>
      <ul className="flex flex-wrap">
        {tags.map((tag, index) => (
          <li className="mr-2" key={index}>
            {tag}
            {/* {index != tags.length - 1 && ','} */}
          </li>
        ))}
      </ul>
      <BlurImage
        className="block w-64 h-64 m-8 mx-auto sm:mx-4 sm:float-left sm:h-96 sm:w-96"
        src={image.src}
        alt={image.alt}
        base64={image.base64}
      />
      <MarkDown render={content} />
    </Section>
  );
};
export const getServerSideProps: GetServerSideProps = async ({
  query,
}): Promise<{ props: PostProps } | PageErrorProps> => {
  const data = await PostService.fetchPostBySlug((query?.slug as string) ?? '');
  console.log(data);
  if (!query?.slug || !data) {
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

export default Post;
