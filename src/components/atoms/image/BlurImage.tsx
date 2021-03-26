import Image from 'next/image';

export interface BlurImageProps {
  src: string;
  base64: string;
  alt: string;
  className?: string;
}

const BlurImage = ({
  src,
  base64,
  alt,
  className = 'w-full h-full',
}: BlurImageProps): React.ReactElement => {
  return (
    <div className={className} style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Our placeholder image */}
      <img
        aria-hidden="true"
        alt={alt}
        src={base64}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100%',
          height: '100%',
          /* Adjust the content to fit */
          objectFit: 'cover',
          objectPosition: 'center',
          /* Blur the image and scale to avoid transparent corners */
          filter: 'blur(2rem)',
          transform: 'scale(1.2)',
        }}
      />
      {/* Your image, optimized by next/image */}
      <Image src={src} alt={alt} layout="fill" objectFit="cover" />
    </div>
  );
};

export default BlurImage;
