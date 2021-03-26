import clsx from 'clsx';
import React, { PropsWithChildren } from 'react';

export const WH1 = ({
  children,
  className,
}: PropsWithChildren<{ className?: string }>): React.ReactElement => {
  return (
    <h1
      className={clsx(
        'mb-4 sm:mb-6 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl',
        className
      )}
    >
      {children}
    </h1>
  );
};
