import { MarkDownContent } from '@models/typo/MarkDownContent';
import { BlurImageProps } from '@atoms/image/BlurImage';

export interface AuthorData {
  name: string;
  title: string;
  bio: MarkDownContent;
  image: BlurImageProps;
}
