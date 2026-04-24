import Link from "next/link";
import { notFound } from "next/navigation";
import type { Comment, Post, User } from "@/types/post";

interface BlogPostPageProps {
  params: Promise<{ id: string }>;
}

async function getPost(id: string): Promise<Post> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  if (!res.ok) {
    notFound();
  }

  return (await res.json()) as Post;
}

async function getUser(userId: number): Promise<User> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);

  if (!res.ok) {
    throw new Error("Không thể tải thông tin tác giả");
  }

  return (await res.json()) as User;
}

async function getComments(id: string): Promise<Comment[]> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);

  if (!res.ok) {
    throw new Error("Không thể tải bình luận");
  }

  return (await res.json()) as Comment[];
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { id } = await params;
  const post = await getPost(id);
  const [author, comments] = await Promise.all([getUser(post.userId), getComments(id)]);

  return (
    <div>
      <Link href="/blog" className="mb-6 inline-block text-sm text-blue-600 hover:underline">
        ← Quay lại danh sách
      </Link>

      <article>
        <h1 className="mb-4 text-3xl font-bold capitalize">{post.title}</h1>

        <div className="mb-6 flex items-center gap-3 text-sm text-gray-500">
          <span>
            Tác giả: <strong className="text-gray-700">{author.name}</strong>
          </span>
          <span>•</span>
          <span>{author.email}</span>
        </div>

        <div className="prose mb-8 max-w-none whitespace-pre-line leading-relaxed text-gray-700">
          {post.body}
        </div>

        <div className="border-t pt-6">
          <h3 className="mb-2 font-semibold">Về tác giả</h3>
          <p className="text-sm text-gray-600">
            <strong>{author.name}</strong> (@{author.username}) — {author.company.name}
          </p>
          <p className="text-sm text-gray-500">{author.company.catchPhrase}</p>
        </div>

        <div className="border-t pt-6">
          <h3 className="mb-4 font-semibold">Bình luận</h3>
          <div className="space-y-4">
            {comments.map((comment) => (
              <article key={comment.id} className="rounded-lg border p-4">
                <div className="mb-2 flex flex-wrap items-center gap-2 text-sm">
                  <strong className="text-gray-700">{comment.name}</strong>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-500">{comment.email}</span>
                </div>
                <p className="whitespace-pre-line text-sm leading-relaxed text-gray-600">
                  {comment.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}