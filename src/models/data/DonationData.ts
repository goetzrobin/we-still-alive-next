import { BlurImageProps } from '@atoms/image/BlurImage';
import { MarkDownContent } from '@models/typo/MarkDownContent';

export interface DonationData {
  headline: string;
  image: BlurImageProps;
  content: MarkDownContent;
  slug: string;
}
