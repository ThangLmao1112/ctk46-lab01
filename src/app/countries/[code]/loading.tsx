export default function CountryDetailLoading() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <div className="mb-6 h-9 w-56 rounded bg-muted animate-pulse" />
      <div className="grid gap-0 overflow-hidden rounded-xl border md:grid-cols-[1.1fr_0.9fr]">
        <div className="aspect-[16/12] bg-muted animate-pulse md:aspect-auto md:min-h-[420px]" />
        <div className="space-y-4 p-6">
          <div className="h-5 w-24 rounded bg-muted animate-pulse" />
          <div className="h-8 w-3/4 rounded bg-muted animate-pulse" />
          <div className="h-4 w-1/2 rounded bg-muted animate-pulse" />
          <div className="grid gap-3 sm:grid-cols-2">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="h-24 rounded-lg bg-muted animate-pulse" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}