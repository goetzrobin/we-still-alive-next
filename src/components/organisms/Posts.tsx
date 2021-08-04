import { SmallH2 } from '@atoms/typo/headings/SmallH2';
import { WH1 } from '@atoms/typo/headings/WH1';
import { PostData } from '@models/data/PostData';
import { PostPreviewList } from '@molecules/lists/posts/PostPreviewList';
import React, { useEffect, useState } from 'react';

export interface PostsProps {
  heading: string;
}

export const Posts = ({
  intro: { heading },
  posts,
  tags,
}: {
  intro: PostsProps;
  posts: PostData[];
  tags: string[];
}): React.ReactElement => {
  const [currentlySelectedTag, setCurrentlySelectedTag] = useState<string | null>();
  const [displayedPosts, setDisplayedPosts] = useState<PostData[]>(posts);
  useEffect(() => {
    const postsToDisplay = currentlySelectedTag
      ? posts.filter((post) => post.tags.includes(currentlySelectedTag))
      : posts;
    setDisplayedPosts(postsToDisplay);
  }, [currentlySelectedTag, setDisplayedPosts, posts]);
  return (
    <div>
      <div className="flex flex-col mb-8 md:flex-row">
        <div className="flex w-full md:justify-center">
          <ul className="flex flex-wrap w-full pt-4 md:px-4">
            <li>
              <button className="focus:outline-none" onClick={() => setCurrentlySelectedTag(null)}>
                <SmallH2 className="mx-4 mb-4 tracking-widest uppercase">All</SmallH2>
              </button>
            </li>
            {tags.map((tag, index) => (
              <li key={index}>
                <button className="focus:outline-none" onClick={() => setCurrentlySelectedTag(tag)}>
                  <SmallH2 className="mx-4 mb-4 tracking-widest uppercase">{tag}</SmallH2>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <PostPreviewList posts={displayedPosts} />
    </div>
  );
};
