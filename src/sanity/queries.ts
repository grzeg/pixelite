import { defineQuery } from "next-sanity";

export const POSTS_QUERY = defineQuery(
  `*[_type == "post" && language == $language && defined(slug.current)] | order(publishedAt desc){_id, title, slug, excerpt, publishedAt}`,
);

export const POST_QUERY = defineQuery(
  `*[_type == "post" && language == $language && slug.current == $slug][0]{_id, title, slug, excerpt, publishedAt, body}`,
);
