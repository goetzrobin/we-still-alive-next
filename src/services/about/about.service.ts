import { AboutData } from '../../models/data/AboutData';
import { APIAboutData } from '../../models/api/APIAboutData';
import { RichText } from 'prismic-reactjs';
import { PrismicService } from '@services/prismic/prismic.service';
import Prismic from 'prismic-javascript';
import ImageService from '@services/image/image.service';

const fetchAboutData = async (): Promise<AboutData | null> => {
  const response = await PrismicService.queryFirst([
    Prismic.Predicates.at('document.type', 'about'),
  ]);

  if (!response.data) {
    return null;
  }
  return mapAPIResponseToPageData(response.data);
};

const mapAPIResponseToPageData = async (apiData: APIAboutData): Promise<AboutData> => {
  return {
    title: RichText.asText(apiData.title),
    about: apiData.about,
    image: await ImageService.getBlurImageProps(apiData.image.url, apiData.image.alt),
  };
};

const AboutService = {
  fetchAboutData,
};

export default AboutService;
