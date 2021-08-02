import { APIImage } from './APIImage';
import { RichTextBlock } from 'prismic-reactjs';

export interface APIAboutData {
  title: RichTextBlock[];
  about: RichTextBlock[];
  image: APIImage;
}
