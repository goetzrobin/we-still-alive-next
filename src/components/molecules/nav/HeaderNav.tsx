import React from 'react';
import { WLink, WLinkProps } from '../../atoms/typo/links/WLink';

export interface HeaderNavProps {
  links: WLinkProps[];
}

export const HeaderNav = ({ links = [] }: HeaderNavProps): React.ReactElement => {
  return (
    <nav className="hidden sm:block">
      <ul className="flex items-center px-12">
        {links.map(({ href, label }, index) => (
          <li className="mx-4" key={index}>
            <WLink href={href} label={label} />
          </li>
        ))}
      </ul>
    </nav>
  );
};
