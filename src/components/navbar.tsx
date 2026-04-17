"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { href: "/", label: "Trang chủ" },
  { href: "/projects", label: "Dự án" },
  { href: "/about", label: "Giới thiệu" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Liên hệ" },
  { href: "/skills", label: "Kỹ năng" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldUseDark = savedTheme ? savedTheme === "dark" : systemDark;

    setIsDark(shouldUseDark);
    document.documentElement.classList.toggle("dark", shouldUseDark);
  }, []);

  const toggleDarkMode = () => {
    const nextValue = !isDark;
    setIsDark(nextValue);
    document.documentElement.classList.toggle("dark", nextValue);
    localStorage.setItem("theme", nextValue ? "dark" : "light");
  };

  return (
    <nav className="border-b bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900">
      <div className="mx-auto max-w-5xl px-4 py-4">
        <div className="flex items-center justify-between gap-3">
          <Link href="/" className="text-xl font-bold text-emerald-600">
            Quốc Thắng
          </Link>

          <div className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-600 transition-colors hover:text-emerald-600 dark:text-gray-300 dark:hover:text-emerald-400"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleDarkMode}
              className="rounded-md border border-gray-300 px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800"
              aria-label="Bật tắt dark mode"
            >
              {isDark ? "☀️" : "🌙"}
            </button>

            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="rounded-md border border-gray-300 px-3 py-1.5 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 md:hidden"
              aria-label="Mở menu"
            >
              ☰
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="mt-3 grid gap-2 border-t pt-3 dark:border-gray-800 md:hidden">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-md px-2 py-2 text-gray-700 transition-colors hover:bg-emerald-50 hover:text-emerald-700 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-emerald-400"
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
