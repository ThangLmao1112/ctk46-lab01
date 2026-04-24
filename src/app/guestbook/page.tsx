"use client";

import { useEffect, useState } from "react";
import type { GuestbookEntry } from "@/data/guestbook";

export default function GuestbookPage() {
  const [entries, setEntries] = useState<GuestbookEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  async function fetchEntries() {
    try {
      setError(null);
      const res = await fetch("/api/guestbook");

      if (!res.ok) {
        throw new Error("Lỗi khi tải dữ liệu");
      }

      const data = (await res.json()) as GuestbookEntry[];
      setEntries(data);
    } catch {
      setError("Không thể tải sổ lưu bút. Vui lòng thử lại.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    void fetchEntries();
  }, []);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!name.trim() || !message.trim()) {
      return;
    }

    setSubmitting(true);

    try {
      const res = await fetch("/api/guestbook", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), message: message.trim() }),
      });

      if (!res.ok) {
        const payload = (await res.json().catch(() => null)) as { error?: string } | null;
        throw new Error(payload?.error || "Lỗi khi gửi lời nhắn");
      }

      setName("");
      setMessage("");
      await fetchEntries();
    } catch {
      alert("Không thể gửi lời nhắn. Vui lòng thử lại.");
    } finally {
      setSubmitting(false);
    }
  }

  async function handleDelete(id: string) {
    if (!confirm("Bạn có chắc muốn xóa lời nhắn này?")) {
      return;
    }

    setDeletingId(id);

    try {
      const res = await fetch(`/api/guestbook/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error("Lỗi khi xóa");
      }

      await fetchEntries();
    } catch {
      alert("Không thể xóa lời nhắn. Vui lòng thử lại.");
    } finally {
      setDeletingId(null);
    }
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="mb-2 text-3xl font-bold">Sổ lưu bút</h1>
      <p className="mb-8 text-gray-500">Hãy để lại lời nhắn cho tôi nhé!</p>

      <form onSubmit={handleSubmit} className="mb-8 space-y-4 rounded-lg bg-gray-50 p-6">
        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-700">
            Tên của bạn
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Nhập tên của bạn"
            required
            className="w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="message" className="mb-1 block text-sm font-medium text-gray-700">
            Lời nhắn
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="Viết lời nhắn của bạn..."
            required
            rows={3}
            className="w-full resize-none rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          disabled={submitting || !name.trim() || !message.trim()}
          className="rounded-lg bg-blue-600 px-6 py-2 text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {submitting ? "Đang gửi..." : "Gửi lời nhắn"}
        </button>
      </form>

      {loading && <div className="py-8 text-center text-gray-500">Đang tải sổ lưu bút...</div>}

      {error && <div className="py-8 text-center text-red-500">{error}</div>}

      {!loading && !error && (
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
                  <button
                    type="button"
                    onClick={() => void handleDelete(entry.id)}
                    disabled={deletingId === entry.id}
                    className="text-xs text-red-400 transition-colors hover:text-red-600 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {deletingId === entry.id ? "Đang xóa..." : "Xóa"}
                  </button>
                </div>
              </div>
              <p className="text-gray-600">{entry.message}</p>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}