import BlurImage, { BlurImageProps } from '@atoms/image/BlurImage';
import { WH1 } from '@atoms/typo/headings/WH1';
import { WLinkButton } from '@atoms/typo/links/WLinkButton';
import MarkDown from '@atoms/typo/markdown/Markdown';
import { AuthorData } from '@models/data/AuthorData';
import { MarkDownContent } from '@models/typo/MarkDownContent';
import { AuthorBadge } from '@molecules/content-types/author/AuthorBadge';
import clsx from 'clsx';
import React from 'react';
import styles from './blogintro.module.css';

export interface BlogIntroProps {
  heading: string;
  text: MarkDownContent;
  url: { link_type: string };
  image: BlurImageProps;
}

export const BlogIntro = ({
  blogIntro,
  author,
}: {
  blogIntro: BlogIntroProps;
  author: AuthorData;
}): React.ReactElement => {
  return (
    <div className="flex flex-col items-center md:flex-row">
      <div className="w-full md:w-1/2">
        <WH1>{blogIntro.heading}</WH1>
        <MarkDown render={blogIntro.text}></MarkDown>
        <AuthorBadge author={author} />
        <div className="mt-8">
          <WLinkButton className="sm:w-52" href="/blog" label="Read More" />
        </div>
      </div>
      <div className="w-full mt-32 md:mt-0 md:w-1/2">
        <BlurImage
          className={clsx(styles['image'], 'rounded-sm shadow-sm')}
          src={blogIntro.image.src}
          alt={blogIntro.image.alt}
          base64={blogIntro.image.base64}
        />
      </div>
    </div>
  );
};
