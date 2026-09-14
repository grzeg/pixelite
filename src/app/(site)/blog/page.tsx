import Link from "next/link";

import { client, isSanityConfigured } from "@/sanity/client";
import { POSTS_QUERY } from "@/sanity/queries";

export const metadata = {
  title: "Blog",
};

type PostListItem = {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  publishedAt?: string;
};

export default async function BlogPage() {
  const posts = isSanityConfigured
    ? await client.fetch<PostListItem[]>(POSTS_QUERY).catch(() => [])
    : [];

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-2xl font-medium">Blog</h1>
        <p className="mt-2 text-muted-foreground">Notatki techniczne — dla ludzi, którzy budują podobne rzeczy.</p>
      </div>

      {!isSanityConfigured ? (
        <p className="text-sm text-muted-foreground">
          CMS nieskonfigurowany — ustaw <code>NEXT_PUBLIC_SANITY_PROJECT_ID</code> w{" "}
          <code>.env.local</code> (zobacz <code>.env.local.example</code>).
        </p>
      ) : posts.length === 0 ? (
        <p className="text-sm text-muted-foreground">
          Brak wpisów jeszcze. Dodaj pierwszy w{" "}
          <Link href="/studio" className="underline">
            Sanity Studio
          </Link>
          .
        </p>
      ) : (
        <ul className="flex flex-col gap-6">
          {posts.map((post) => (
            <li key={post._id}>
              <Link href={`/blog/${post.slug.current}`} className="block">
                <h2 className="font-medium hover:underline">{post.title}</h2>
                {post.excerpt ? <p className="text-sm text-muted-foreground">{post.excerpt}</p> : null}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
