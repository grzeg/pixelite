import { PortableText, type PortableTextBlock } from "@portabletext/react";
import { notFound } from "next/navigation";

import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { pageMetadata } from "@/i18n/metadata";
import { client } from "@/sanity/client";
import { POST_QUERY } from "@/sanity/queries";

type Post = {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  publishedAt?: string;
  body?: PortableTextBlock[];
};

const dateLocale: Record<Locale, string> = { pl: "pl-PL", en: "en-US" };

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};

  const post = await client.fetch<Post | null>(POST_QUERY, { slug, language: locale }).catch(() => null);
  if (!post) return {};

  const dict = getDictionary(locale);
  return pageMetadata({
    locale,
    path: `/blog/${slug}`,
    title: post.title,
    description: post.excerpt ?? dict.meta.blogDescription,
  });
}

export default async function BlogPostPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) {
    notFound();
  }

  const post = await client.fetch<Post | null>(POST_QUERY, { slug, language: locale }).catch(() => null);

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
      <div className="prose prose-neutral dark:prose-invert max-w-none">
        {post.body ? <PortableText value={post.body} /> : null}
      </div>
    </article>
  );
}
