import { Footer } from '@organisms/layout/Footer';
import { Header } from '@organisms/layout/Header';
import { DonationModal } from '@organisms/modals/DonationModal';
import SiteService from '@services/site/site.service';
import React, { PropsWithChildren, useEffect, useMemo, useState } from 'react';
import DonationModalContext from 'src/contexts/modal/DonationModalContext';

const SiteLayout = ({
  children,
  absoluteHeader = false,
}: PropsWithChildren<{ absoluteHeader?: boolean }>): React.ReactElement => {
  const { links, name, title } = SiteService.getSiteData();
  const [isShowing, setShowing] = useState(false);
  const [hidden, setHidden] = useState(true);
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    if (isShowing) {
      setHidden(false);
      setTimeout(() => setAnimate(true), 300);
    }
    if (!isShowing) {
      setAnimate(false);
      setTimeout(() => setHidden(true), 300);
    }
  }, [isShowing]);
  const value = useMemo(
    () => ({
      isShowing,
      setShowing,
      animate,
      hidden,
    }),
    [isShowing, animate, hidden]
  );

  return (
    <DonationModalContext.Provider value={value}>
      <Header
        isAbsolute={absoluteHeader}
        headData={{ pageTitle: `${name} - ${title}` }}
        headerNav={{ links }}
      />
      <main className="min-h-screen">{children}</main>
      <Footer name={name} footerNav={{ links }} />
      <DonationModal />
    </DonationModalContext.Provider>
  );
};

export default SiteLayout;
