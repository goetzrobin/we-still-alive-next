import { APIImage } from './APIImage';
import { RichTextBlock } from 'prismic-reactjs';

export interface APIIndexData {
  intro_heading: RichTextBlock[];
  intro_text: RichTextBlock[];
  objectives_heading: RichTextBlock[];
  objectives_text: RichTextBlock[];
  blog_heading: RichTextBlock[];
  blog_text: RichTextBlock[];
  blog_url: { link_type: string };
  blog_image: APIImage;
  posts_heading: RichTextBlock[];
  donations_heading: RichTextBlock[];
  donations_text: RichTextBlock[];
}
