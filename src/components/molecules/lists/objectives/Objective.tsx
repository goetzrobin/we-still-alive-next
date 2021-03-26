import BlurImage from '@atoms/image/BlurImage';
import { ObjectiveData } from '@models/data/ObjectiveData';
import React from 'react';

export type ObjectiveProps = ObjectiveData;

export const Objective = ({ name, image }: ObjectiveProps): React.ReactElement => {
  return (
    <BlurImage
      className="rounded-sm shadow-sm w-ful h-96"
      src={image.src}
      base64={image.base64}
      alt={image.alt || name}
    />
  );
};
