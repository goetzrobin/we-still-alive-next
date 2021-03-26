import { RichText } from 'prismic-reactjs';
import { APIIndexData } from '@models/api/APIIndexData';
import { PrismicService } from '@services/prismic/prismic.service';
import { IndexData } from 'pages';
import Prismic from 'prismic-javascript';
import ImageService from '@services/image/image.service';

const fetchIndexData = async (): Promise<IndexData | null> => {
  const response = await PrismicService.queryFirst([
    Prismic.Predicates.at('document.type', 'index'),
  ]);

  if (!response.data) {
    return null;
  }
  return mapAPIResponseToPageData(response.data);
};

const mapAPIResponseToPageData = async (apiData: APIIndexData): Promise<IndexData> => {
  return {
    intro: {
      heading: RichText.asText(apiData.intro_heading),
      text: apiData.intro_text,
    },
    objectives: {
      heading: RichText.asText(apiData.objectives_heading),
      text: apiData.objectives_text,
    },
    blog: {
      heading: RichText.asText(apiData.blog_heading),
      text: apiData.blog_text,
      url: { ...apiData.blog_url },
      image: await ImageService.getBlurImageProps(apiData.blog_image.url, apiData.blog_image.alt),
    },
    posts: {
      heading: RichText.asText(apiData.posts_heading),
    },
    donations: {
      heading: RichText.asText(apiData.donations_heading),
      text: apiData.donations_text,
    },
  };
};

const IndexService = {
  fetchIndexData,
};

export default IndexService;
