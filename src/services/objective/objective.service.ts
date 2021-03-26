import { APIObjectivesData } from '../../models/api/APIObjectivesData';
import { ObjectiveData } from '../../models/data/ObjectiveData';
import { RichText } from 'prismic-reactjs';
import { PrismicService } from '@services/prismic/prismic.service';
import Prismic from 'prismic-javascript';
import ImageService from '@services/image/image.service';

const fetchAllObjectives = async (): Promise<ObjectiveData[] | null> => {
  const response = await PrismicService.query([
    Prismic.Predicates.at('document.type', 'objective'),
  ]);

  if (!response.results) {
    return null;
  }
  return mapAPIResponseToPageData(response.results.map((result) => result.data));
};

const mapAPIResponseToPageData = async (apiData: APIObjectivesData[]): Promise<ObjectiveData[]> => {
  return Promise.all(
    apiData.map(async (item) => {
      return {
        name: RichText.asText(item.name),
        image: await ImageService.getBlurImageProps(item.image.url, item.image.alt),
      };
    })
  );
};

const ObjectiveService = {
  fetchAllObjectives,
};

export default ObjectiveService;
