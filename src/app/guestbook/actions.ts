"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import { guestbookEntries } from "@/data/guestbook";

const guestbookSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Tên phải có ít nhất 2 ký tự")
    .max(50, "Tên không được quá 50 ký tự"),
  message: z
    .string()
    .trim()
    .min(1, "Lời nhắn không được để trống")
    .max(500, "Lời nhắn không được quá 500 ký tự"),
});

export interface GuestbookActionState {
  success: boolean;
  errors?: {
    name?: string[];
    message?: string[];
  };
  formError?: string;
}

export async function createGuestbookEntry(
  _prevState: GuestbookActionState,
  formData: FormData
): Promise<GuestbookActionState> {
  const rawData = {
    name: String(formData.get("name") ?? ""),
    message: String(formData.get("message") ?? ""),
  };

  const result = guestbookSchema.safeParse(rawData);

  if (!result.success) {
    return {
      success: false,
      errors: result.error.flatten().fieldErrors,
    };
  }

  const now = Date.now();
  const isDuplicate = guestbookEntries.some((entry) => {
    const isSameContent =
      entry.name.trim() === result.data.name && entry.message.trim() === result.data.message;
    const isWithinOneMinute = now - new Date(entry.createdAt).getTime() < 60_000;

    return isSameContent && isWithinOneMinute;
  });

  if (isDuplicate) {
    return {
      success: false,
      formError: "Lời nhắn trùng lặp trong 1 phút. Vui lòng thử lại sau.",
    };
  }

  guestbookEntries.unshift({
    id: Date.now().toString(),
    name: result.data.name,
    message: result.data.message,
    createdAt: new Date().toISOString(),
  });

  revalidatePath("/guestbook");

  return { success: true };
}

export async function deleteGuestbookEntry(
  id: string,
  _formData?: FormData
): Promise<GuestbookActionState> {
  const index = guestbookEntries.findIndex((entry) => entry.id === id);

  if (index === -1) {
    return {
      success: false,
      formError: "Không tìm thấy lời nhắn",
    };
  }

  guestbookEntries.splice(index, 1);
  revalidatePath("/guestbook");

  return { success: true };
}