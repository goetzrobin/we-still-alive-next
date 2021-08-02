import { MarkDownContent } from '@models/typo/MarkDownContent';
import { BlurImageProps } from '@atoms/image/BlurImage';

export interface AboutData {
  title: string;
  about: MarkDownContent;
  image: BlurImageProps;
}
