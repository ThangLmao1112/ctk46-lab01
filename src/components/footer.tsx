export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t mt-auto">
      <div className="max-w-5xl mx-auto px-4 py-6 text-center text-gray-500 text-sm">
        <p>
          © 2025 — Nguyễn Hoàng Quốc Thắng | CTK46 — Các công nghệ mới trong PTPM
        </p>
        <div className="mt-2 flex items-center justify-center gap-4">
          <a
            href="https://github.com/ThangLmao1112"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 hover:underline"
          >
            GitHub
          </a>
          <a
            href="mailto:2212458@dlu.edu.vn"
            className="text-blue-600 hover:underline"
          >
            2212458@dlu.edu.vn
          </a>
        </div>
      </div>
    </footer>
  );
}
