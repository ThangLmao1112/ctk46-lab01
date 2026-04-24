"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { deleteGuestbookEntry } from "@/app/guestbook/actions";

export default function DeleteButton({ id }: { id: string }) {
  const router = useRouter();
  const [isDeleting, setIsDeleting] = useState(false);

  async function handleDelete() {
    if (!confirm("Bạn có chắc muốn xóa lời nhắn này?")) {
      return;
    }

    setIsDeleting(true);

    try {
      const result = await deleteGuestbookEntry(id);

      if (!result.success) {
        alert(result.formError || "Không thể xóa lời nhắn. Vui lòng thử lại.");
        return;
      }

      router.refresh();
    } catch {
      alert("Không thể xóa lời nhắn. Vui lòng thử lại.");
    } finally {
      setIsDeleting(false);
    }
  }

  return (
    <button
      type="button"
      onClick={() => void handleDelete()}
      disabled={isDeleting}
      className="text-xs text-red-400 transition-colors hover:text-red-600 disabled:cursor-not-allowed disabled:opacity-50"
    >
      {isDeleting ? "Đang xóa..." : "Xóa"}
    </button>
  );
}