import clsx from 'clsx';
import React, { PropsWithChildren, useContext } from 'react';
import DonationModalContext from 'src/contexts/modal/DonationModalContext';

export type ModalShellProps = PropsWithChildren<unknown>;

export const ModalShell = ({ children }: ModalShellProps): React.ReactElement => {
  const { hidden, animate } = useContext(DonationModalContext);
  return (
    <div
      style={{ zIndex: 99, display: hidden ? 'none' : 'block' }}
      className="fixed inset-0 overflow-y-auto"
    >
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div
          className={clsx(
            'fixed inset-0 transition-opacity',
            animate ? 'ease-out duration-300 opacity-100' : 'ease-in duration-200 opacity-0'
          )}
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-gray-800 opacity-75"></div>
        </div>
        {children}
      </div>
    </div>
  );
};
