import React from 'react';
import { HiX } from 'react-icons/hi';
import { WLinkProps } from '../../atoms/typo/links/WLink';
import { MobileNavContent } from './MobileNavContent';

export interface HeaderMobileNavProps {
  links: WLinkProps[];
  showing?: boolean;
  onClose: () => void;
}

export const HeaderMobileNav = ({
  links = [],
  showing = false,
  onClose,
}: HeaderMobileNavProps): React.ReactElement => {
  return (
    <nav
      style={{
        top: showing ? '0' : '-100vh',
        transition: 'top 300ms cubic-bezier(0.17, 0.04, 0.03, 0.94)',
        zIndex: 99,
      }}
      className={
        'p-4 h-screen w-screen bg-white sm:hidden fixed top-0 bottom-0 left-0 right-0 block'
      }
    >
      <div className="relative h-full">
        <HiX
          onClick={onClose}
          className="absolute right-0 block w-8 h-8 text-gray-900 cursor-pointer sm:hidden"
        />
        <MobileNavContent onClose={onClose} links={links} />
      </div>
    </nav>
  );
};
