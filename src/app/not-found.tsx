import Link from "next/link";	
	
export default function NotFound() {	
  return (	
    <div className="mx-auto max-w-5xl px-4 py-20 text-center">
      <div className="relative mx-auto mb-8 flex h-40 w-40 items-center justify-center">
        <div className="absolute h-40 w-40 rounded-full bg-blue-100/60 blur-xl" />
        <svg
          viewBox="0 0 220 220"
          className="relative h-32 w-32 animate-bounce"
          aria-hidden="true"
        >
          <circle cx="110" cy="110" r="95" fill="#dbeafe" />
          <circle cx="110" cy="100" r="48" fill="#2563eb" />
          <circle cx="110" cy="100" r="28" fill="#ffffff" />
          <circle cx="100" cy="96" r="4" fill="#1f2937" />
          <circle cx="120" cy="96" r="4" fill="#1f2937" />
          <rect x="95" y="112" width="30" height="5" rx="2.5" fill="#1f2937" />
        </svg>
      </div>

      <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-blue-600">
        Error 404
      </p>
      <h1 className="mb-4 text-4xl font-bold text-gray-900">Trang không tồn tại</h1>
      <p className="mx-auto mb-8 max-w-xl text-gray-600">
        Liên kết bạn truy cập có thể đã thay đổi hoặc không còn tồn tại. Hãy quay về
        trang chủ để tiếp tục khám phá website.
      </p>

      <Link
        href="/"
        className="inline-block rounded-lg bg-blue-600 px-6 py-2 text-white transition-colors hover:bg-blue-700"
      >
        Về trang chủ
      </Link>
    </div>	
  );	
}	