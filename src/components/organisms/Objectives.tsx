import { WH1 } from '@atoms/typo/headings/WH1';
import MarkDown from '@atoms/typo/markdown/Markdown';
import { MarkDownContent } from '@models/typo/MarkDownContent';
import { ObjectiveProps } from '@molecules/lists/objectives/Objective';
import { ObjectiveImageList } from '@molecules/lists/objectives/ObjectiveImageList';
import { ObjectiveList } from '@molecules/lists/objectives/ObjectiveList';
import React from 'react';

export interface ObjectivesProps {
  heading: string;
  text: MarkDownContent;
}

export const Objectives = ({
  intro: { heading, text },
  objectives,
}: {
  intro: ObjectivesProps;
  objectives: ObjectiveProps[];
}): React.ReactElement => {
  return (
    <div>
      <div className="flex flex-col mb-24 md:flex-row">
        <div className="w-full md:w-2/3">
          <WH1>{heading}</WH1>
          <MarkDown render={text} />
        </div>
        <div className="flex w-full md:justify-center md:w-1/3">
          <ObjectiveList objectives={objectives} />
        </div>
      </div>
      <ObjectiveImageList objectives={objectives} />
    </div>
  );
};
