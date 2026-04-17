"use client";

import Link from "next/link";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="vi">
      <body>
        <div className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center px-4 text-center">
          <p className="rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-700">
            Ứng dụng gặp sự cố
          </p>

          <h1 className="mt-4 text-3xl font-bold text-gray-900">
            Đã xảy ra lỗi ngoài ý muốn
          </h1>

          <p className="mt-3 text-gray-600">
            {error?.message || "Có lỗi xảy ra khi tải trang. Bạn có thể thử lại."}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => reset()}
              className="rounded-lg bg-emerald-600 px-6 py-2 text-white transition-colors hover:bg-emerald-700"
            >
              Thử lại
            </button>
            <Link
              href="/"
              className="rounded-lg border border-gray-300 px-6 py-2 text-gray-700 transition-colors hover:bg-gray-50"
            >
              Về trang chủ
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}