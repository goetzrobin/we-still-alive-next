import { BlurImageProps } from '@atoms/image/BlurImage';
import { WHMain } from '@atoms/typo/headings/WHMain';
import { HeroImage } from '@molecules/image/HeroImage';
import React from 'react';

interface HeroProps {
  heroImage: BlurImageProps;
}

export const IndexHero = ({ heroImage }: HeroProps): React.ReactElement => {
  return (
    <HeroImage heroImage={heroImage}>
      <div className="absolute z-50 top-32 left-4 sm:left-24 sm:top-48">
        <WHMain>
          We Still
          <br /> Alive
        </WHMain>
        <p className="mt-4">A blog about hope.</p>
      </div>
    </HeroImage>
  );
};
