import { PortableText, type PortableTextBlock } from "@portabletext/react";
import type { SanityImageSource } from "@sanity/image-url";
import Image from "next/image";
import { notFound } from "next/navigation";
import { cache } from "react";

import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { pageMetadata } from "@/i18n/metadata";
import { client } from "@/sanity/client";
import { urlForImage } from "@/sanity/image";
import { POST_QUERY } from "@/sanity/queries";

type Post = {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  publishedAt?: string;
  mainImage?: SanityImageSource & { alt?: string };
  body?: PortableTextBlock[];
};

const dateLocale: Record<Locale, string> = { pl: "pl-PL", en: "en-US" };

// cache() dedupes this fetch across generateMetadata and the page component
// within the same request instead of hitting Sanity twice per page view.
const getPost = cache(async (slug: string, language: Locale) =>
  client.fetch<Post | null>(POST_QUERY, { slug, language }).catch(() => null),
);

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};

  const post = await getPost(slug, locale);
  if (!post) return {};

  const dict = getDictionary(locale);
  return pageMetadata({
    locale,
    path: `/blog/${slug}`,
    title: post.title,
    description: post.excerpt ?? dict.meta.blogDescription,
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) {
    notFound();
  }

  const post = await getPost(slug, locale);

  if (!post) {
    notFound();
  }

  return (
    <article className="flex flex-col gap-6">
      <header className="flex flex-col gap-2">
        <h1 className="text-2xl font-medium">{post.title}</h1>
        {post.publishedAt ? (
          <time dateTime={post.publishedAt} className="text-sm text-muted-foreground">
            {new Date(post.publishedAt).toLocaleDateString(dateLocale[locale])}
          </time>
        ) : null}
      </header>
      {post.mainImage ? (
        <Image
          src={urlForImage(post.mainImage).width(1200).height(630).url()}
          alt={post.mainImage.alt ?? ""}
          width={1200}
          height={630}
          priority
          className="h-auto w-full rounded-md object-cover"
        />
      ) : null}
      <div className="prose prose-neutral dark:prose-invert max-w-none">
        {post.body ? <PortableText value={post.body} /> : null}
      </div>
    </article>
  );
}
