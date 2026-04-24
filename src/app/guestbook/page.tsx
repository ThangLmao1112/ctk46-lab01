import { guestbookEntries } from "@/data/guestbook";
import GuestbookForm from "@/components/guestbook-form";
import DeleteButton from "@/components/delete-button";

export const dynamic = "force-dynamic";

export default function GuestbookPage() {
  const entries = guestbookEntries;

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="mb-2 text-3xl font-bold">Sổ lưu bút</h1>
      <p className="mb-8 text-gray-500">Hãy để lại lời nhắn cho tôi nhé!</p>

      <GuestbookForm />

      <div className="space-y-4">
        <p className="text-sm text-gray-400">{entries.length} lời nhắn</p>

        {entries.length === 0 && (
          <p className="py-8 text-center text-gray-400">Chưa có lời nhắn nào. Hãy là người đầu tiên!</p>
        )}

        {entries.map((entry) => (
          <article key={entry.id} className="rounded-lg border p-4 transition-shadow hover:shadow-sm">
            <div className="mb-2 flex items-center justify-between gap-3">
              <span className="font-semibold text-gray-800">{entry.name}</span>
              <div className="flex items-center gap-3">
                <span className="text-xs text-gray-400">
                  {new Date(entry.createdAt).toLocaleDateString("vi-VN")}
                </span>
                <DeleteButton id={entry.id} />
              </div>
            </div>
            <p className="text-gray-600">{entry.message}</p>
          </article>
        ))}
      </div>
    </div>
  );
}