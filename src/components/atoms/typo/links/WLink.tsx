import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';

export interface WLinkProps {
  label: string;
  href: string;
  onClick?: () => void;
  style?: WLinkStyles;
  className?: string;
}

export enum WLinkStyles {
  default,
  mobileNav,
  footerNav,
}

const getLinkStyles = (style: WLinkStyles): string => {
  switch (style) {
    case WLinkStyles.default:
      return 'text-base font-medium text-gray-700 hover:text-gray-900';
    case WLinkStyles.footerNav:
      return 'p-4 text-base text-white hover:text-gray-200 hover:underline';
    case WLinkStyles.mobileNav:
      return 'w-full uppercase block text-center text-xl font-semibold text-gray-700 hover:text-gray-900';
  }
  return '';
};
export const WLink = ({
  label,
  href,
  onClick,
  style = WLinkStyles.default,
  className = 'px-4 py-2',
}: WLinkProps): React.ReactElement => {
  return (
    <Link href={href}>
      <a onClick={onClick} className={clsx(className, getLinkStyles(style))} href={href}>
        {label}
      </a>
    </Link>
  );
};
