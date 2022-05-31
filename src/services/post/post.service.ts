import { APIPostData } from './../../models/api/APIPostData';
import { PostData, PostsPreviewData } from './../../models/data/PostData';
import { RichText } from 'prismic-reactjs';
import { PrismicService } from '@services/prismic/prismic.service';
import Prismic from 'prismic-javascript';
import ImageService from '@services/image/image.service';

const fetchPosts = async (
  pageSize = 10,
  page = 1,
  maxTags = 100
): Promise<PostsPreviewData | null> => {
  const response = await PrismicService.query([Prismic.Predicates.at('document.type', 'post')], {
    pageSize,
    page,
    orderings: '[my.post.date desc]',
  });

  if (!response.results) {
    return null;
  }
  const allTags: string[] = [];
  const data = await mapAPIResponseToPageData(
    response.results.map((result) => {
      allTags.push(...result.tags);
      return { ...result.data, tags: result.tags, slug: result.slugs[0] };
    })
  );
  return { tags: getMostPopularTags(allTags, maxTags), data };
};

const fetchPostBySlug = async (slug: string): Promise<PostData | null> => {
  const response = await PrismicService.queryFirst([Prismic.Predicates.at('my.post.uid', slug)]);
  console.log(response);
  if (!response?.data) {
    return null;
  }
  const data = await mapSingleAPIResponseToPageData({ ...response.data, tags: response.tags });

  return { ...data, slug };
};

const mapAPIResponseToPageData = async (apiData: APIPostData[]): Promise<PostData[]> => {
  return Promise.all(apiData.map(async (item) => mapSingleAPIResponseToPageData(item)));
};

const mapSingleAPIResponseToPageData = async ({
  headline,
  image,
  content,
  intro,
  slug,
  tags,
}: APIPostData): Promise<PostData> => {
  return {
    headline: RichText.asText(headline),
    image: await ImageService.getBlurImageProps(image.url, image.alt),
    content,
    intro,
    slug,
    tags,
  };
};

const getMostPopularTags = (
  allTags: string[],
  maxTags: number,
  minimumCount: number | null = null
): string[] => {
  const tagsCount = allTags.reduce(
    (countMap, tag) => countMap.set(tag, (countMap.get(tag) || 0) + 1),
    new Map<string, number>()
  );

  let tags = Array.from(tagsCount.entries()).sort(([tag, count], [nextTag, nextCount]) =>
    nextCount - count !== 0 ? nextCount - count : tag.localeCompare(nextTag)
  );
  if (minimumCount) {
    tags = tags.filter(([, count]) => {
      return count > minimumCount;
    });
  }
  return tags.splice(0, maxTags).map(([tag]) => tag);
};

const PostService = {
  fetchPosts,
  fetchPostBySlug,
};

export default PostService;
