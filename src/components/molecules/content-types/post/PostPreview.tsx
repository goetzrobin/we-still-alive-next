import BlurImage, { BlurImageProps } from '@atoms/image/BlurImage';
import { SmallH2 } from '@atoms/typo/headings/SmallH2';
import { WLink } from '@atoms/typo/links/WLink';
import { MarkDownContent } from '@models/typo/MarkDownContent';
import clsx from 'clsx';
import React from 'react';

export interface PostPreviewProps {
  headline: string;
  slug: string;
  image: BlurImageProps;
  intro: MarkDownContent;
  className?: string;
}

export const PostPreview = ({
  headline,
  image,
  intro,
  slug,
  className,
}: PostPreviewProps): React.ReactElement => {
  return (
    <div className={clsx('relative block max-w-md', className)}>
      <BlurImage
        className="float-left w-40 h-40 m-3 mr-4"
        src={image.src}
        base64={image.base64}
        alt={image.alt}
      />
      <div className="p-4">
        <div>
          <SmallH2>{headline}</SmallH2>
          <small>{intro}</small>
        </div>
        <WLink className="block px-0 py-4 mx-0" href={`/blog/${slug}`} label="Read More" />
      </div>
    </div>
  );
};
