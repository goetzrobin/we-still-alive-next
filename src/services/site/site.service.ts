import { SiteData } from '@models/data/SiteData';

const getSiteData = (): SiteData => {
  return {
    links: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
      { label: 'Blog', href: '/blog' },
      { label: 'Donate', href: '/donate' },
    ],
    name: 'WeStillAlive',
    title: 'An African Story',
  };
};

const SiteService = {
  getSiteData,
};

export default SiteService;
