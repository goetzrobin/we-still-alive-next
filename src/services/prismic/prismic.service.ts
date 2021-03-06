import Prismic from 'prismic-javascript';

export const API_URL = `https://${process.env.NEXT_PUBLIC_PRISMIC_REPO}.cdn.prismic.io/api/v2`;
export const API_TOKEN = process.env.NEXT_PUBLIC_PRISMIC_ACCESS_TOKEN;

export const PrismicService = Prismic.client(API_URL, { accessToken: API_TOKEN });
