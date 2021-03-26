import { WH1 } from '@atoms/typo/headings/WH1';
import MarkDown from '@atoms/typo/markdown/Markdown';
import { AuthorData } from '@models/data/AuthorData';
import { MarkDownContent } from '@models/typo/MarkDownContent';
import { AuthorBadge } from '@molecules/content-types/author/AuthorBadge';
import Logo from '@resources/logos/logo';
import React from 'react';

export interface IntroProps {
  heading: string;
  text: MarkDownContent;
}

export const Intro = ({
  intro,
  author,
}: {
  intro: IntroProps;
  author: AuthorData;
}): React.ReactElement => {
  return (
    <div className="flex flex-col items-center md:flex-row">
      <div className="w-full p-24 sm:p-36 md:w-1/2">
        <Logo className="w-full h-full" />
      </div>
      <div className="w-full md:w-1/2">
        <WH1>{intro.heading}</WH1>
        <MarkDown render={intro.text}></MarkDown>
        <AuthorBadge author={author} />
      </div>
    </div>
  );
};
