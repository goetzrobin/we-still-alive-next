import { createContext } from 'react';

export interface DonationModalContextProps {
  isShowing: boolean;
  setShowing: (isShowing: boolean) => void;
  hidden: boolean;
  animate: boolean;
}

const DonationModalContext = createContext<DonationModalContextProps>({
  isShowing: false,
  setShowing: () => {
    return;
  },
  hidden: true,
  animate: false,
});

export default DonationModalContext;
