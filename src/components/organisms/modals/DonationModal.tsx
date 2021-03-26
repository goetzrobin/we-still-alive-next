import { ModalShell } from '@atoms/modal/ModalShell';
import { DonationForm } from '@molecules/form/donation/DonationForm';
import clsx from 'clsx';
import React, { useContext } from 'react';
import { HiX } from 'react-icons/hi';
import DonationModalContext from 'src/contexts/modal/DonationModalContext';

interface DonationModalProps {
  title?: string;
}

export const DonationModal = ({ title }: DonationModalProps): React.ReactElement => {
  const { setShowing, animate } = useContext(DonationModalContext);
  return (
    <ModalShell>
      <div
        className={clsx(
          'px-5 pt-6 pb-10 sm:px-6 inline-block relative overflow-hidden text-left align-bottom transition-all transform bg-gray-50 rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-6xl sm:w-full',
          animate
            ? 'ease-out duration-300 opacity-100 translate-y-0 sm:scale-100'
            : 'ease-in duration-200 opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
        )}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-headline"
      >
        <HiX
          onClick={() => setShowing(false)}
          className="absolute block w-6 h-6 text-gray-700 cursor-pointer top-4 right-4"
        />
        <DonationForm
          formHeading={{
            headline: 'Donate Today' ?? title,
            intro: 'Your donation helps us provide clean water to the people of Kenya',
          }}
        />
      </div>
    </ModalShell>
  );
};
