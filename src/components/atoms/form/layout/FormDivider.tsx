import clsx from 'clsx';
import React from 'react';

export const FormDivider = ({ className }: { className?: string }): React.ReactElement => {
  return (
    <div className={clsx('hidden sm:block md:col-span-3', className)} aria-hidden="true">
      <div className="py-5">
        <div className="border-t border-gray-200"></div>
      </div>
    </div>
  );
};
