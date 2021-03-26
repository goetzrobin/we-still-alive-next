import { WH1 } from '@atoms/typo/headings/WH1';
import MarkDown from '@atoms/typo/markdown/Markdown';
import { DonationData } from '@models/data/DonationData';
import { MarkDownContent } from '@models/typo/MarkDownContent';
import { DonationPreviewList } from '@molecules/lists/donations/DonationList';

export interface DonationsProps {
  heading: string;
  text: MarkDownContent;
}

export const Donations = ({
  intro: { heading, text },
  donations,
}: {
  intro: DonationsProps;
  donations: DonationData[];
}): React.ReactElement => {
  return (
    <>
      <WH1>{heading}</WH1>
      <div className="max-w-4xl">
        <MarkDown render={text} />
      </div>
      <DonationPreviewList donations={donations} />
    </>
  );
};
