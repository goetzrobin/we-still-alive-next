import { RichTextBlock } from 'prismic-reactjs';
import { APIImage } from './APIImage';

export interface APIDonationData {
  slug: string;
  headline: RichTextBlock[];
  image: APIImage;
  content: RichTextBlock[];
}
