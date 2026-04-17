export default function Footer() {
  return (
    <footer className="mt-auto border-t bg-gray-50 dark:border-gray-800 dark:bg-gray-900">
      <div className="mx-auto max-w-5xl px-4 py-6 text-center text-sm text-gray-500 dark:text-gray-400">
        <p>
          © 2025 — Nguyễn Hoàng Quốc Thắng | CTK46 — Các công nghệ mới trong PTPM
        </p>
        <div className="mt-2 flex items-center justify-center gap-4">
          <a
            href="https://github.com/ThangLmao1112"
            target="_blank"
            rel="noreferrer"
            className="text-emerald-600 hover:underline dark:text-emerald-400"
          >
            GitHub
          </a>
          <a
            href="mailto:2212458@dlu.edu.vn"
            className="text-emerald-600 hover:underline dark:text-emerald-400"
          >
            2212458@dlu.edu.vn
          </a>
        </div>
      </div>
    </footer>
  );
}
