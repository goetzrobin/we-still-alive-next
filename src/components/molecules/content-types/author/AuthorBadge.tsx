import BlurImage from '@atoms/image/BlurImage';
import { SmallH2 } from '@atoms/typo/headings/SmallH2';
import { AuthorData } from '@models/data/AuthorData';
import React from 'react';

export type AuthorBadgeProps = AuthorData;

export const AuthorBadge = ({
  author: {
    name,
    title,
    image: { src, alt, base64 },
  },
}: {
  author: AuthorBadgeProps;
}): React.ReactElement => {
  return (
    <div className="flex items-center">
      <BlurImage className="w-16 h-16 mr-2 rounded-full" src={src} alt={alt} base64={base64} />
      <div>
        <SmallH2>{name}</SmallH2>
        <p className="text-gray-600 text-md">{title}</p>
      </div>
    </div>
  );
};
