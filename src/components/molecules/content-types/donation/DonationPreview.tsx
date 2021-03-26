import BlurImage, { BlurImageProps } from '@atoms/image/BlurImage';
import { WH1 } from '@atoms/typo/headings/WH1';
import { WLinkButton } from '@atoms/typo/links/WLinkButton';
import MarkDown from '@atoms/typo/markdown/Markdown';
import { MarkDownContent } from '@models/typo/MarkDownContent';
import Link from 'next/link';

export interface DonationPreviewProps {
  headline: string;
  slug: string;
  content: MarkDownContent;
  image: BlurImageProps;
}

export const DonationPreview = ({
  headline,
  image,
  slug,
  content,
}: DonationPreviewProps): React.ReactElement => {
  return (
    <div>
      <div className="p-4 bg-white ">
        <Link href={`/donations/${slug}`}>
          <a href={`/donations/${slug}`}>
            <WH1>{headline}</WH1>
          </a>
        </Link>
      </div>
      <BlurImage
        className="float-left mr-4 w-96 h-80"
        src={image.src}
        base64={image.base64}
        alt={image.alt}
      />
      <MarkDown render={content} />
      <WLinkButton className="max-w-xs" href="/donate" label="Donate Today" />
    </div>
  );
};
