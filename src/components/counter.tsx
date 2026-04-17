"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex items-center gap-4">
      <button
        onClick={() => setCount((prev) => prev - 1)}
        className="h-10 w-10 rounded-lg bg-gray-200 text-xl font-bold transition-colors hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
      >
        -
      </button>
      <span className="w-12 text-center text-2xl font-bold">{count}</span>
      <button
        onClick={() => setCount((prev) => prev + 1)}
        className="h-10 w-10 rounded-lg bg-emerald-600 text-xl font-bold text-white transition-colors hover:bg-emerald-700"
      >
        +
      </button>
    </div>
  );
}
