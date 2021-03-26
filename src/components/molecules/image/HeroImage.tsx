import BlurImage, { BlurImageProps } from '@atoms/image/BlurImage';
import React, { PropsWithChildren } from 'react';

interface HeroImageProps extends PropsWithChildren<unknown> {
  heroImage: BlurImageProps;
}

export const HeroImage = ({ heroImage, children }: HeroImageProps): React.ReactElement => {
  return (
    <div className="relative">
      {children}
      <BlurImage
        className="w-screen h-screen"
        src={heroImage.src}
        alt={heroImage.alt}
        base64={heroImage.base64}
      />
    </div>
  );
};
