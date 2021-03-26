import { BlurImageProps } from '@atoms/image/BlurImage';
import { getBase64 } from '@plaiceholder/base64';

export const fetchFromCDN = (url: string): Promise<Buffer> => {
  return fetch(url).then(async (res) => Buffer.from(await res.arrayBuffer()));
};

export const fetchFromLocal = (url = ''): Promise<Buffer> => {
  return fetch(`${process.env.NEXT_PUBLIC_HOST}${url}`).then(async (res) =>
    Buffer.from(await res.arrayBuffer())
  );
};

const getImageBase64 = async (url: string): Promise<string> => {
  const buffer = url.startsWith('/') ? await fetchFromLocal(url) : await fetchFromCDN(url);
  return await getBase64(buffer);
};

const getBlurImageProps = async (src: string, alt: string): Promise<BlurImageProps> => {
  return {
    src,
    alt,
    base64: await getImageBase64(src),
  };
};

const ImageService = {
  getBlurImageProps,
};

export default ImageService;
