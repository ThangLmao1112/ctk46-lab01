import Link from "next/link";
import type { Post } from "@/types/post";

async function getPosts(): Promise<Post[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Không thể tải danh sách bài viết");
  }

  return (await res.json()) as Post[];
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (	
    <div>	
      <h1 className="text-3xl font-bold mb-2">Blog</h1>
      <p className="mb-6 text-gray-500">Tổng cộng {posts.length} bài viết từ API</p>
	
      <div className="space-y-6">	
        {posts.slice(0, 10).map((post) => (
          <article	
            key={post.id}
            className="rounded-lg border p-6 transition-shadow hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
          >
            <div className="flex items-center gap-3 mb-2">	
              <span className="rounded bg-blue-100 px-2 py-1 text-xs text-blue-700">
                Tác giả #{post.userId}
              </span>	
              <span className="text-sm text-gray-400">Bài #{post.id}</span>
            </div>	
	
            <Link href={`/blog/${post.id}`}>
              <h2 className="mb-2 text-xl font-semibold capitalize transition-colors hover:text-blue-600">
                {post.title}	
              </h2>	
            </Link>	
	
            <p className="line-clamp-2 text-gray-600 dark:text-gray-300">{post.body}</p>
	
            <Link	
              href={`/blog/${post.id}`}
              className="inline-block mt-3 text-sm text-blue-600 hover:underline"
            >	
              Đọc thêm →	
            </Link>	
          </article>	
        ))}	
      </div>	
    </div>	
  );	
}	