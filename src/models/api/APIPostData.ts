import { APIImage } from './APIImage';
import { RichTextBlock } from 'prismic-reactjs';

export interface APIPostData {
  slug: string;
  headline: RichTextBlock[];
  image: APIImage;
  intro: RichTextBlock[];
  content: RichTextBlock[];
  tags: string[];
}

export interface APIPostResponse {
  tags: string[];
  slugs: string[];
  data: APIPostData[];
}
