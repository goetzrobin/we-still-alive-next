import clsx from 'clsx';
import React, { PropsWithChildren } from 'react';

interface FormGridProps extends PropsWithChildren<unknown> {
  className?: string;
}

export const FormGrid = ({ className, children }: FormGridProps): React.ReactElement => {
  return <div className={clsx(className, 'flex flex-col')}>{children}</div>;
};

export type FormGridItemProps = PropsWithChildren<unknown>;

export const FormGridRow = ({ children }: FormGridItemProps): React.ReactElement => {
  return <div className={`my-4 flex sm:flex-row flex-col `}>{children}</div>;
};
