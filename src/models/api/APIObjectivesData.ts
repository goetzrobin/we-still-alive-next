import { RichTextBlock } from 'prismic-reactjs';
import { APIImage } from './APIImage';

export interface APIObjectivesData {
  name: RichTextBlock[];
  image: APIImage;
}
