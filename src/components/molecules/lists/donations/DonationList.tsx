import { useState } from 'react';
import { DonationPreview } from '@molecules/content-types/donation/DonationPreview';
import { DonationData } from '@models/data/DonationData';
import { SmallH2 } from '@atoms/typo/headings/SmallH2';

export interface DonationPreviewList {
  donations: DonationData[];
}

export const DonationPreviewList = ({ donations }: DonationPreviewList): React.ReactElement => {
  const [currentDonation, setcurrentDonation] = useState(donations[0]);
  const { headline, image, slug, content } = currentDonation;
  return (
    <div className="flex flex-col-reverse lg:flex-row">
      <div className="my-8 lg:mr-24">
        <SmallH2>We donate to</SmallH2>
        <div className="mt-4">
          {donations.map((donation, index) => (
            <button
              className="block p-4 text-left text-white bg-gray-800 rounded-md focus:outline-none"
              key={index}
              onClick={() => setcurrentDonation(donations[index])}
            >
              {donation.headline}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-screen-md">
        <DonationPreview slug={slug} headline={headline} image={image} content={content} />
      </div>
    </div>
  );
};
