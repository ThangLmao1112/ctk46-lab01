"use client";

export default function CountriesError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 text-center">
      <h2 className="mb-3 text-2xl font-bold text-red-600">Không thể tải danh sách quốc gia</h2>
      <p className="mb-6 text-muted-foreground">
        {error.message || "Đã xảy ra lỗi khi gọi REST Countries API."}
      </p>
      <button
        onClick={() => reset()}
        className="rounded-md bg-primary px-4 py-2 text-primary-foreground"
      >
        Thử lại
      </button>
    </div>
  );
}