import Link from "next/link";	
import Counter from "@/components/counter";
import ThemeToggle from "@/components/theme-toggle";
import CopyButton from "@/components/copy-button";
	
export default function HomePage() {	
  return (	
    <div className="mx-auto max-w-5xl px-4 py-16">
      {/* Hero section */}	
      <div className="mb-16 text-center">
        <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/40">
          <span className="text-4xl">A</span>	
        </div>	
	
        <h1 className="mb-4 text-4xl font-bold md:text-5xl">
          Xin chào! Tôi là{" "}
          <span className="text-emerald-600 dark:text-emerald-400">Nguyễn Hoàng Quốc Thắng</span>
        </h1>	
        <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-600 dark:text-gray-300">
          Sinh viên Công nghệ Thông tin tại Đại học Đà Lạt. Đam mê phát triển	
          web và khám phá các công nghệ mới.	
        </p>	
	
        <div className="flex justify-center gap-4">
          <Link	
            href="/projects"	
            className="rounded-lg bg-emerald-600 px-6 py-3 text-white transition-colors hover:bg-emerald-700"
          >	
            Xem dự án	
          </Link>	
          <Link	
            href="/contact"	
            className="rounded-lg border border-gray-300 px-6 py-3 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800"
          >	
            Liên hệ
          </Link>	
        </div>	
      </div>	
	
      {/* Skills section */}	
      <div className="mb-16">	
        <h2 className="mb-8 text-center text-2xl font-bold">Kỹ năng</h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {[	
            "JavaScript",	
            "TypeScript",	
            "React",	
            "Next.JS",	
            "Tailwind CSS",	
            "Node.js",	
            "Git",	
            "SQL",	
          ].map((skill) => (	
            <div	
              key={skill}	
              className="rounded-lg bg-gray-50 p-4 text-center transition-colors hover:bg-emerald-50 hover:text-emerald-600 dark:bg-gray-800 dark:hover:bg-emerald-900/30 dark:hover:text-emerald-300"
            >	
              {skill}	
            </div>	
          ))}	
        </div>	
      </div>	
	
      {/* CTA section */}	
      <div className="rounded-2xl bg-emerald-50 p-8 text-center dark:bg-emerald-900/20">
        <h2 className="mb-3 text-2xl font-bold">Đọc Blog của tôi</h2>
        <p className="mb-4 text-gray-600 dark:text-gray-300">
          Chia sẻ kiến thức và kinh nghiệm về lập trình, công nghệ	
        </p>	
        <Link	
          href="/blog"	
          className="font-semibold text-emerald-600 hover:underline dark:text-emerald-400"
        >	
          Xem blog →	
        </Link>	
      </div>	

      {/* Interactive components */}
      <div className="mt-16 rounded-2xl border p-6 dark:border-gray-700 dark:bg-gray-800">
        <h2 className="mb-6 text-center text-2xl font-bold">Tương tác nhanh</h2>
        <div className="flex flex-col items-center justify-center gap-6 sm:flex-row sm:flex-wrap">
          <Counter />
          <ThemeToggle />
          <CopyButton textToCopy="2212458@dlu.edu.vn" />
        </div>
      </div>
    </div>	
  );	
}	