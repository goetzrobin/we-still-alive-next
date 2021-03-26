import React from 'react';
import { WLink, WLinkProps, WLinkStyles } from '../../atoms/typo/links/WLink';

export interface FooterNavProps {
  links: WLinkProps[];
}

export const FooterNav = ({ links = [] }: FooterNavProps): React.ReactElement => {
  return (
    <nav className="block mr-12">
      <ul className="flex flex-col px-4">
        {links.map(({ href, label }, index) => (
          <li className="my-2" key={index}>
            <WLink style={WLinkStyles.footerNav} href={href} label={label} />
          </li>
        ))}
      </ul>
    </nav>
  );
};
