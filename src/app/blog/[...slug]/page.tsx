import Link from "next/link";
import { getPostBySlug } from "@/data/posts";

export function generateStaticParams() {
  return [];
}

export default async function BlogCatchAllPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug: segments } = await params;
  const post = getPostBySlug(segments[0]);

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Link href="/blog" className="text-sm text-blue-600 hover:underline">
          ← Quay lại blog
        </Link>

        <div className="mt-4 rounded-lg border p-6">
          <h1 className="text-2xl font-bold">Không tìm thấy bài viết</h1>
          <p className="mt-3 text-gray-600">
            Catch-all route đã nhận các phần đường dẫn: {segments.join(" / ")}
          </p>
          <p className="mt-2 text-gray-500">
            Với route <span className="font-medium">[...slug]</span>, URL như
            <span className="font-medium"> /blog/a/b/c</span> vẫn khớp route
            này thay vì 404 ngay từ cấp folder.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Link href="/blog" className="text-sm text-blue-600 hover:underline">
        ← Quay lại blog
      </Link>

      <article className="mt-4 rounded-lg border p-6">
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded bg-blue-100 px-2 py-1 text-xs text-blue-700">
            {post.category}
          </span>
          <span className="text-sm text-gray-400">{post.date}</span>
        </div>

        <h1 className="mt-4 text-3xl font-bold">{post.title}</h1>
        <p className="mt-2 text-sm text-gray-500">Tác giả: {post.author}</p>
        <p className="mt-4 text-gray-600 whitespace-pre-line">{post.content}</p>

        <p className="mt-6 text-sm text-gray-500">
          Route nhận được: {segments.join(" / ")}
        </p>
      </article>
    </div>
  );
}
