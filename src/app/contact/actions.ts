"use server";

import { z } from "zod";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Tên phải có ít nhất 2 ký tự")
    .max(100, "Tên không được quá 100 ký tự"),
  email: z.string().trim().email("Email không hợp lệ"),
  subject: z
    .string()
    .trim()
    .min(5, "Tiêu đề phải có ít nhất 5 ký tự")
    .max(200, "Tiêu đề không được quá 200 ký tự"),
  message: z
    .string()
    .trim()
    .min(10, "Nội dung phải có ít nhất 10 ký tự")
    .max(2000, "Nội dung không được quá 2000 ký tự"),
});

export interface ContactFormState {
  success: boolean;
  errors?: {
    name?: string[];
    email?: string[];
    subject?: string[];
    message?: string[];
  };
}

export async function sendContactMessage(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const rawData = {
    name: String(formData.get("name") ?? ""),
    email: String(formData.get("email") ?? ""),
    subject: String(formData.get("subject") ?? ""),
    message: String(formData.get("message") ?? ""),
  };

  const result = contactSchema.safeParse(rawData);

  if (!result.success) {
    return {
      success: false,
      errors: result.error.flatten().fieldErrors,
    };
  }

  console.log("Tin nhắn liên hệ mới:", result.data);

  return { success: true };
}