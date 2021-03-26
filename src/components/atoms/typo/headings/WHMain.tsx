import clsx from 'clsx';
import React, { PropsWithChildren } from 'react';

export const WHMain = ({
  children,
  className,
}: PropsWithChildren<{ className?: string }>): React.ReactElement => {
  return (
    <h1
      className={clsx(
        'text-6xl font-bold uppercase leading-11 sm:leading-13 sm:text-7xl',
        className
      )}
    >
      {children}
    </h1>
  );
};
