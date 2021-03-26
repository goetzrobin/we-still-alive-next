import { WLink, WLinkProps, WLinkStyles } from '@atoms/typo/links/WLink';
import React from 'react';

export interface MobileNavContentProps {
  links: WLinkProps[];
  onClose: () => void;
}

export const MobileNavContent = ({
  links = [],
  onClose,
}: MobileNavContentProps): React.ReactElement => {
  return (
    <>
      <h1 className="text-3xl font-bold leading-6 tracking-tighter uppercase">
        We Still
        <br />
        Alive
      </h1>
      <ul className="flex flex-col justify-center h-full px-12 -mt-20">
        {links.map(({ href, label }, index) => (
          <li className="mx-4 my-4 font-bold" key={index}>
            <WLink onClick={onClose} style={WLinkStyles.mobileNav} href={href} label={label} />
          </li>
        ))}
      </ul>
    </>
  );
};
