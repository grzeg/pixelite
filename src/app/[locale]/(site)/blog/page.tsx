import Link from "next/link";
import { notFound } from "next/navigation";

import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { pageMetadata } from "@/i18n/metadata";
import { client, isSanityConfigured } from "@/sanity/client";
import { POSTS_QUERY } from "@/sanity/queries";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);
  return pageMetadata({
    locale,
    path: "/blog",
    title: dict.meta.blogTitle,
    description: dict.meta.blogDescription,
  });
}

type PostListItem = {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  publishedAt?: string;
};

export default async function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }
  const dict = getDictionary(locale);

  const posts = isSanityConfigured
    ? await client.fetch<PostListItem[]>(POSTS_QUERY, { language: locale }).catch(() => [])
    : [];

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-2xl font-medium">{dict.blog.title}</h1>
        <p className="mt-2 text-muted-foreground">{dict.blog.intro}</p>
      </div>

      {posts.length === 0 ? (
        <div className="rounded-lg border border-dashed border-border px-6 py-10 text-center text-sm text-muted-foreground">
          {dict.blog.comingSoon}
        </div>
      ) : (
        <ul className="flex flex-col gap-6">
          {posts.map((post) => (
            <li key={post._id}>
              <Link href={`/${locale}/blog/${post.slug.current}`} className="block">
                <h2 className="font-medium hover:underline">{post.title}</h2>
                {post.excerpt ? (
                  <p className="text-sm text-muted-foreground">{post.excerpt}</p>
                ) : null}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
