import React from 'react';
import { PostData } from '@models/data/PostData';
import { PostPreview } from '@molecules/content-types/post/PostPreview';

export interface PostPreviewList {
  posts: PostData[];
}

export const PostPreviewList = ({ posts }: PostPreviewList): React.ReactElement => {
  return (
    <div className="flex flex-row flex-wrap justify-center">
      {posts.map(({ headline, image, intro, slug }, index) => (
        <PostPreview
          className="sm:mx-8 sm:my-4"
          slug={slug}
          key={index}
          headline={headline}
          image={image}
          intro={intro}
        />
      ))}
      {posts.length % 2 == 1 && <div className="w-1/2"></div>}
    </div>
  );
};
