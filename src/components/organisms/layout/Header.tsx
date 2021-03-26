import React, { useState } from 'react';
import Head from 'next/head';
import { HeaderNavProps } from '@molecules/nav/HeaderNav';
import Logo from '@resources/logos/logo';
import { HiMenuAlt4 } from 'react-icons/hi';
import { HeaderNav } from '@molecules/nav/HeaderNav';
import clsx from 'clsx';
import { HeaderMobileNav } from '@molecules/nav/HeaderMobileNav';
import { HeadData } from '@models/data/HeadData';
import Link from 'next/link';

interface HeaderProps {
  headerNav: HeaderNavProps;
  headData: HeadData;
  isAbsolute?: boolean;
}

export const Header = ({
  headerNav,
  headData,
  isAbsolute = false,
}: HeaderProps): React.ReactElement => {
  const [showing, setShowing] = useState(false);
  return (
    <>
      <Head>
        <title>{headData?.pageTitle}</title>
        <link rel="icon" href="favicon.svg" />
        <meta property="og:title" content={headData?.pageTitle} key="title" />
        <link rel="mask-icon" href="mask-icon.svg" color="#222222" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <header
        className={clsx(
          'flex flex-row items-center justify-between p-4 ',
          isAbsolute && 'absolute left-0 right-0 top-0'
        )}
        style={{ zIndex: 99 }}
      >
        <Link href="/">
          <a href="/">
            <Logo />
          </a>
        </Link>
        <HiMenuAlt4
          onClick={() => setShowing(true)}
          className="block w-8 h-8 text-gray-900 cursor-pointer sm:hidden"
        />
        <HeaderNav links={headerNav.links} />
        <HeaderMobileNav
          onClose={() => setShowing(false)}
          showing={showing}
          links={headerNav.links}
        />
      </header>
    </>
  );
};
