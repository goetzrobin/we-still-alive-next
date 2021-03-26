import { FooterNav, FooterNavProps } from '@molecules/nav/FooterNav';
import React from 'react';

interface FooterProps {
  footerNav: FooterNavProps;
  name: string;
}

export const Footer = ({ footerNav }: FooterProps): React.ReactElement => {
  return (
    <div className="p-8 text-white bg-gray-900 h-72 ">
      <div className="flex flex-row justify-between">
        <div>
          <h1 className="my-3 text-3xl font-bold leading-6 tracking-tighter uppercase">
            We Still
            <br />
            Alive
          </h1>
          <small className="block">&copy; {new Date().getFullYear()}</small>
        </div>
        <FooterNav links={footerNav.links} />
      </div>
    </div>
  );
};
