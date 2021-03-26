import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';
import { WLinkProps } from './WLink';

export const WLinkButton = ({
  label,
  href,
  onClick,
  className,
}: WLinkProps): React.ReactElement => {
  return (
    <div className={clsx('rounded-md shadow', className)}>
      <Link href={href}>
        <a
          onClick={onClick}
          href={href}
          className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-gray-700 border border-transparent rounded-md hover:bg-gray-800"
        >
          {label}
        </a>
      </Link>
    </div>
  );
};
