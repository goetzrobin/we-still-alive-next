import { Section } from '@atoms/layout/Section';
import { PostData } from '@models/data/PostData';
import { PageErrorProps } from '@models/page/PageErrorProps';
import { Posts, PostsProps } from '@organisms/Posts';
import PostService from '@services/post/post.service';
import { GetServerSideProps } from 'next';

export interface BlogProps {
  intro: PostsProps;
  posts: PostData[];
  tags: string[];
}
export const Blog = ({ intro, posts, tags }: BlogProps): React.ReactElement => {
  return (
    <Section>
      <Posts intro={intro} posts={posts} tags={tags} />
    </Section>
  );
};
export const getServerSideProps: GetServerSideProps = async (): Promise<
  { props: BlogProps } | PageErrorProps
> => {
  const postData = await PostService.fetchPosts();
  const data = postData?.data &&
    postData?.tags && {
      intro: { heading: 'Our Posts' },
      posts: postData.data,
      tags: Array.from(postData.tags),
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
