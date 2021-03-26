import { BlurImageProps } from '@atoms/image/BlurImage';
import { DonationBar } from '@atoms/other/DonationBar';
import { WButton } from '@atoms/typo/buttons/WButton';
import { WH1 } from '@atoms/typo/headings/WH1';
import { WHMain } from '@atoms/typo/headings/WHMain';
import { PageErrorProps } from '@models/page/PageErrorProps';
import { HeroImage } from '@molecules/image/HeroImage';
import ImageService from '@services/image/image.service';
import { GetServerSideProps } from 'next';
import { useContext } from 'react';
import DonationModalContext from 'src/contexts/modal/DonationModalContext';

export interface DonateData {
  heading: string;
}

interface DonateProps {
  donateData: DonateData;
  donateHeroImage: BlurImageProps;
}

const formatCurrency = (amount = 99999): string => {
  return `$${amount.toFixed(2)}`;
};
const Donate = ({ donateData: { heading }, donateHeroImage }: DonateProps): React.ReactElement => {
  const goal = 2000;
  const { setShowing } = useContext(DonationModalContext);
  return (
    <>
      <HeroImage heroImage={donateHeroImage}>
        <main className="absolute left-0 z-30 flex flex-col w-full sm:flex-row top-32 sm:top-48">
          <section className="w-full px-2 sm:px-8 sm:w-1/2 ">
            <WHMain className="text-gray-100">{heading}</WHMain>
          </section>
          <section className="relative z-50 block w-full p-8 my-8 bg-white rounded-lg shadow-xl sm:my-0 sm:mx-8 lg:mx-24 sm:w-1/2">
            <WH1>Donate Today</WH1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi nobis consectetur,
              adipisci iusto ratione dignissimos voluptas aut? Fuga, aut sed explicabo consectetur
              perspiciatis iure suscipit odit itaque error sit quas!
            </p>
            <h2 className="text-lg font-semibold text-right">{formatCurrency(goal)}</h2>
            <DonationBar percentage={15} />
            <div className="flex flex-row justify-between mt-8">
              <div>
                <h2 className="text-lg font-semibold">0</h2>
                <p className="text-gray-600">Donors</p>
              </div>
              <WButton onClick={() => setShowing(true)}>Donate</WButton>
            </div>
          </section>
        </main>
      </HeroImage>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (): Promise<
  { props: DonateProps } | PageErrorProps
> => {
  const donateData = { heading: 'Help To Bring Water to Kenya' };
  const donateHeroImage = await ImageService.getBlurImageProps(
    '/give.jpg',
    'Man giving food to giraffe'
  );
  const data = donateData &&
    donateHeroImage && {
      donateData,
      donateHeroImage,
    };
  if (!data) {
    return {
      redirect: {
        destination: '/error',
        permanent: false,
      },
    };
  }

  return {
    props: data,
  };
};
export default Donate;