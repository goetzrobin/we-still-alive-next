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

const Donate = ({ donateData: { heading }, donateHeroImage }: DonateProps): React.ReactElement => {
  const url = 'https://tumainivolunteers.org/donate-1';
  return (
    <>
      <HeroImage heroImage={donateHeroImage}>
        <main className="absolute left-0 z-30 flex flex-col w-full sm:flex-row top-32 sm:top-48">
          <section className="w-full px-2 sm:px-8 sm:w-1/2 ">
            <WHMain className="text-gray-100">{heading}</WHMain>
          </section>
          <section className="relative z-50 block w-full p-8 my-8 bg-white rounded-sm shadow-xl sm:my-0 sm:mx-8 lg:mx-24 sm:w-1/2">
            <WH1>Donate Today</WH1>
            <p>
              Please help by donating, via the TumainiVolunteer service bottom, to provide to
              Settled Internally Displaced People (SIDP) located in Maai Mahiu (Kenya), and the
              Maasai Community located in Maasai Mara, in Ololaimutia (Kenya), to provide efficient
              access to water services, to reduce the spread of common tropical infections, and to
              help them access effectively academic learning settings in their area.
            </p>
            <div className="flex flex-row justify-between mt-8">
              <WButton onClick={() => window.open(url, '_blank')}>Donate</WButton>
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
