import { Section } from '@atoms/layout/Section';
import { AuthorData } from '@models/data/AuthorData';
import { ObjectiveData } from '@models/data/ObjectiveData';
import { PageErrorProps } from '@models/page/PageErrorProps';
import { Intro, IntroProps } from '@organisms/Intro';
import { Objectives, ObjectivesProps } from '@organisms/Objectives';
import AuthorService from '@services/author/author.service';
import IndexService from '@services/index/index.service';
import ObjectiveService from '@services/objective/objective.service';
import { GetServerSideProps } from 'next';
import { IndexData } from 'pages';

export interface AboutData {
  intro: IntroProps;
  objectives: ObjectivesProps;
}

interface AboutProps {
  indexData: IndexData;
  authorData: AuthorData;
  objectivesList: ObjectiveData[];
}

const About = ({
  indexData: { intro, objectives },
  authorData,
  objectivesList,
}: AboutProps): React.ReactElement => {
  return (
    <>
      <Section>
        <Intro intro={intro} author={authorData} />
      </Section>
      <Section>
        <Objectives intro={objectives} objectives={objectivesList} />
      </Section>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (): Promise<
  { props: AboutProps } | PageErrorProps
> => {
  const indexData = await IndexService.fetchIndexData();
  const authorData = await AuthorService.fetchAuthorData();
  const objectivesList = await ObjectiveService.fetchAllObjectives();
  const data =
    indexData && authorData && objectivesList
      ? {
          indexData,
          authorData,
          objectivesList,
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
