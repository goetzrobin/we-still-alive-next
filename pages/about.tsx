import BlurImage from '@atoms/image/BlurImage';
import { Section } from '@atoms/layout/Section';
import { WH1 } from '@atoms/typo/headings/WH1';
import MarkDown from '@atoms/typo/markdown/Markdown';
import { AboutData } from '@models/data/AboutData';
import { PageErrorProps } from '@models/page/PageErrorProps';
import AboutService from '@services/about/about.service';
import { GetServerSideProps } from 'next';

interface AboutProps {
  aboutData: AboutData;
}

const About = ({ aboutData }: AboutProps): React.ReactElement => {
  return (
    <>
      <Section>
        <WH1>{aboutData.title}</WH1>
        <div className="mb-4">
          <BlurImage
            className="float-right m-12 shadow-lg w-96 h-96"
            src={aboutData.image.src}
            base64={aboutData.image.base64}
            alt={aboutData.image.alt || 'About the author'}
          />
          <MarkDown render={aboutData.about}></MarkDown>
        </div>
      </Section>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (): Promise<
  { props: AboutProps } | PageErrorProps
> => {
  const aboutData = await AboutService.fetchAboutData();
  const data = aboutData
    ? {
        aboutData,
      }
    : null;

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
export default About;
