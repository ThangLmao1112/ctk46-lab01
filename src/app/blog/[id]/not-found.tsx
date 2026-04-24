import Link from "next/link";

export default function BlogNotFound() {
  return (
    <div className="py-16 text-center">
      <h2 className="mb-4 text-2xl font-bold">Bài viết không tồn tại</h2>
      <p className="mb-6 text-gray-600">Bài viết bạn tìm kiếm không tồn tại hoặc đã bị xóa.</p>
      <Link href="/blog" className="text-blue-600 hover:underline">
        ← Quay lại danh sách bài viết
      </Link>
    </div>
  );
}