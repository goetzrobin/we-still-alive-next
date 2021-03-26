import { APIImage } from './APIImage';
import { RichTextBlock } from 'prismic-reactjs';
export interface APIAuthorData {
  name: RichTextBlock[];
  title: RichTextBlock[];
  bio: RichTextBlock[];
  image: APIImage;
}
