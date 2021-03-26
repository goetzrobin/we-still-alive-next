import React from 'react';
import { Objective, ObjectiveProps } from './Objective';
import WKeenSlider from '@molecules/sliders/WKeenSlider/WKeenSlider';

export interface ObjectiveImageListProps {
  objectives: ObjectiveProps[];
}

export const ObjectiveImageList = ({ objectives }: ObjectiveImageListProps): React.ReactElement => {
  return (
    <WKeenSlider className="max-w-screen-md">
      {objectives.map(({ name, image }, index) => (
        <Objective key={index} name={name} image={image} />
      ))}
    </WKeenSlider>
  );
};
