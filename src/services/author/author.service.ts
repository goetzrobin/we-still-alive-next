import { AuthorData } from '../../models/data/AuthorData';
import { APIAuthorData } from './../../models/api/APIAuthorData';
import { RichText } from 'prismic-reactjs';
import { PrismicService } from '@services/prismic/prismic.service';
import Prismic from 'prismic-javascript';
import ImageService from '@services/image/image.service';

const fetchAuthorData = async (): Promise<AuthorData | null> => {
  const response = await PrismicService.queryFirst([
    Prismic.Predicates.at('document.type', 'author'),
  ]);

  if (!response.data) {
    return null;
  }
  return mapAPIResponseToPageData(response.data);
};

const mapAPIResponseToPageData = async (apiData: APIAuthorData): Promise<AuthorData> => {
  return {
    name: RichText.asText(apiData.name),
    title: RichText.asText(apiData.title),
    bio: apiData.bio,
    image: await ImageService.getBlurImageProps(apiData.image.url, apiData.image.alt),
  };
};

const AuthorService = {
  fetchAuthorData,
};

export default AuthorService;
