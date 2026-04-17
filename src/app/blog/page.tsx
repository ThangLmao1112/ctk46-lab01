import Link from "next/link";	
import { posts } from "@/data/posts";	
	
export default function BlogPage() {	
  return (	
    <div>	
      <h1 className="text-3xl font-bold mb-6">Blog</h1>	
	
      <div className="space-y-6">	
        {posts.map((post) => (	
          <article	
            key={post.slug}	
            className="rounded-lg border p-6 transition-shadow hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
 >	
            <div className="flex items-center gap-3 mb-2">	
              <span className="bg-emerald-100 text-emerald-700 text-xs px-2 py-1 
rounded">	
                {post.category}	
              </span>	
              <span className="text-sm text-gray-400">{post.date}</span>	
            </div>	
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">Tác giả: {post.author}</p>
	
            <Link href={`/blog/${post.slug}`}>	
              <h2 className="text-xl font-semibold mb-2 hover:text-emerald-600 
transition-colors">	
                {post.title}	
              </h2>	
            </Link>	
	
            <p className="text-gray-600 dark:text-gray-300">{post.excerpt}</p>
	
            <Link	
              href={`/blog/${post.slug}`}	
              className="inline-block mt-3 text-emerald-600 text-sm hover:underline dark:text-emerald-400"
            >	
              Đọc thêm →	
            </Link>	
          </article>	
        ))}	
      </div>	
    </div>	
  );	
}	