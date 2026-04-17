"use client";

import { useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  return (
    <button
      onClick={() => setIsDark((prev) => !prev)}
      className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800"
    >
      {isDark ? "☀️ Chế độ sáng" : "🌙 Chế độ tối"}
    </button>
  );
}
