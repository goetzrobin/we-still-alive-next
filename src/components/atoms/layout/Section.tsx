import clsx from 'clsx';
import React, { PropsWithChildren } from 'react';

export const Section = ({
  showBorderTop = true,
  children,
}: PropsWithChildren<{ showBorderTop?: boolean }>): React.ReactElement => {
  return (
    <section
      className={clsx(
        'max-w-screen-xl px-4 pt-24 mx-auto sm:px-6 mb-36',
        showBorderTop && 'border-t-4 border-gray-800'
      )}
    >
      {children}
    </section>
  );
};
