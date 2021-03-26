import { APIDonationData } from '@models/api/APIDonationData';
import { DonationData } from '@models/data/DonationData';
import { RichText } from 'prismic-reactjs';
import { PrismicService } from '@services/prismic/prismic.service';
import Prismic from 'prismic-javascript';
import ImageService from '@services/image/image.service';

const fetchAllDonations = async (): Promise<DonationData[] | null> => {
  const response = await PrismicService.query([Prismic.Predicates.at('document.type', 'donation')]);

  if (!response.results) {
    return null;
  }
  return mapAPIResponseToPageData(
    response.results.map((result) => ({ ...result.data, slug: result.slugs[0] }))
  );
};

const mapAPIResponseToPageData = async (apiData: APIDonationData[]): Promise<DonationData[]> => {
  return Promise.all(
    apiData.map(async (item) => {
      return {
        headline: RichText.asText(item.headline),
        image: await ImageService.getBlurImageProps(item.image.url, item.image.alt),
        content: item.content,
        slug: item.slug,
      };
    })
  );
};

const DonationService = {
  fetchAllDonations,
};

export default DonationService;
