export default function BlogDetailLoading() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <div className="h-4 w-36 rounded bg-gray-200 animate-pulse" />

      <article className="mt-4 rounded-lg border p-6">
        <div className="flex flex-wrap items-center gap-3">
          <div className="h-5 w-20 rounded bg-gray-200 animate-pulse" />
          <div className="h-5 w-28 rounded bg-gray-200 animate-pulse" />
        </div>

        <div className="mt-4 h-10 w-4/5 rounded bg-gray-200 animate-pulse" />
        <div className="mt-3 h-5 w-48 rounded bg-gray-200 animate-pulse" />

        <div className="mt-6 space-y-2">
          <div className="h-4 w-full rounded bg-gray-200 animate-pulse" />
          <div className="h-4 w-full rounded bg-gray-200 animate-pulse" />
          <div className="h-4 w-11/12 rounded bg-gray-200 animate-pulse" />
          <div className="h-4 w-5/6 rounded bg-gray-200 animate-pulse" />
          <div className="h-4 w-2/3 rounded bg-gray-200 animate-pulse" />
        </div>
      </article>
    </div>
  );
}