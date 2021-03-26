import React, { PropsWithChildren } from 'react';

export const Section = ({ children }: PropsWithChildren<unknown>): React.ReactElement => {
  return <section className="max-w-screen-xl px-4 mx-auto mt-32 sm:px-6 mb-52">{children}</section>;
};
