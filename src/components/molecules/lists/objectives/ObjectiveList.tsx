import { SmallH2 } from '@atoms/typo/headings/SmallH2';
import React from 'react';
import { ObjectiveProps } from './Objective';

export interface ObjectiveListProps {
  objectives: ObjectiveProps[];
}

export const ObjectiveList = ({ objectives }: ObjectiveListProps): React.ReactElement => {
  return (
    <ul className="pt-12 md:px-4">
      {objectives.map(({ name }, index) => (
        <li key={index}>
          <SmallH2 className="tracking-widest uppercase">{name}</SmallH2>
        </li>
      ))}
    </ul>
  );
};
