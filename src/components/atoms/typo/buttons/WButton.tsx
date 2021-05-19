import clsx from 'clsx';
import React, { PropsWithChildren } from 'react';

interface WButtonProps extends PropsWithChildren<unknown> {
  className?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  form?: string;
  disabled?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick?: (e: any) => void;
}

export const WButton = ({
  type,
  children,
  className,
  disabled,
  form,
  onClick,
}: WButtonProps): React.ReactElement => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      form={form}
      className={clsx(
        className,
        'flex items-center px-4 py-2 justify-center text-base focus:outline-none font-medium text-white bg-gray-700 border border-transparent rounded-md hover:bg-gray-800'
      )}
    >
      {children}
    </button>
  );
};
