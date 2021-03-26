import clsx from 'clsx';
import React, { PropsWithChildren } from 'react';

export const SmallH2 = ({
  className,
  children,
}: PropsWithChildren<{ className?: string }>): React.ReactElement => {
  return (
    <h2 className={clsx('text-lg font-medium leading-6 text-gray-900', className)}>{children}</h2>
  );
};
