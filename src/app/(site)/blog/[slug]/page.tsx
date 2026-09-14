import { PortableText, type PortableTextBlock } from "@portabletext/react";
import { notFound } from "next/navigation";

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

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await client.fetch<Post | null>(POST_QUERY, { slug }).catch(() => null);

  if (!post) {
    notFound();
  }

  return (
    <article className="flex flex-col gap-6">
      <header className="flex flex-col gap-2">
        <h1 className="text-2xl font-medium">{post.title}</h1>
        {post.publishedAt ? (
          <time dateTime={post.publishedAt} className="text-sm text-muted-foreground">
            {new Date(post.publishedAt).toLocaleDateString("pl-PL")}
          </time>
        ) : null}
      </header>
      <div className="prose prose-neutral dark:prose-invert max-w-none">
        {post.body ? <PortableText value={post.body} /> : null}
      </div>
    </article>
  );
}
