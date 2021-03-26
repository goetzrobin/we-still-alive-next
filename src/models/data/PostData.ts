import { BlurImageProps } from '@atoms/image/BlurImage';
import { MarkDownContent } from '@models/typo/MarkDownContent';

export interface PostData {
  headline: string;
  image: BlurImageProps;
  intro: MarkDownContent;
  content: MarkDownContent;
  slug: string;
  tags: string[];
}

export interface PostsPreviewData {
  data: PostData[];
  tags: string[];
}
