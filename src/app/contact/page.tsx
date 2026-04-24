"use client";

import { useActionState, useEffect, useState } from "react";
import FormSubmitButton from "@/components/form-submit-button";
import { sendContactMessage, type ContactFormState } from "./actions";

const initialState: ContactFormState = {
  success: false,
};

export default function ContactPage() {
  const [state, formAction, isPending] = useActionState(sendContactMessage, initialState);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (state.success) {
      setShowSuccess(true);
    }
  }, [state.success]);

  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="mb-2 text-3xl font-bold">Liên hệ</h1>
      <p className="mb-8 text-gray-500">Bạn có câu hỏi hoặc muốn hợp tác? Hãy gửi tin nhắn cho tôi!</p>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="space-y-4">
          <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
            <h3 className="mb-1 font-semibold">Email</h3>
            <a
              href="mailto:nguyenvana@sv.dlu.edu.vn"
              className="text-emerald-600 hover:underline dark:text-emerald-400"
            >
              nguyenvana@sv.dlu.edu.vn
            </a>
          </div>
          <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
            <h3 className="mb-1 font-semibold">GitHub</h3>
            <a
              href="https://github.com/nguyenvana"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-600 hover:underline dark:text-emerald-400"
            >
              github.com/nguyenvana
            </a>
          </div>
          <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
            <h3 className="mb-1 font-semibold">Địa chỉ</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Đại học Đà Lạt, 01 Phù Đổng Thiên Vương, Đà Lạt
            </p>
          </div>
        </div>

        <div className="md:col-span-2">
          {showSuccess ? (
            <div className="rounded-lg border border-green-200 bg-green-50 p-6 text-center">
              <h3 className="mb-2 text-lg font-semibold text-green-700">Gửi thành công!</h3>
              <p className="text-green-600">Cảm ơn bạn đã liên hệ. Tôi sẽ phản hồi sớm nhất có thể.</p>
              <button
                type="button"
                onClick={() => setShowSuccess(false)}
                className="mt-4 rounded-lg bg-blue-600 px-6 py-2 text-white transition-colors hover:bg-blue-700"
              >
                Gửi tin nhắn khác
              </button>
            </div>
          ) : (
            <form action={formAction} className="space-y-4 rounded-lg bg-gray-50 p-6 dark:bg-gray-800">
              <div>
                <label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-200">
                  Họ và tên
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Nguyễn Văn A"
                  required
                  className="w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {state.errors?.name && (
                  <p className="mt-1 text-sm text-red-500">{state.errors.name[0]}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-200">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="email@example.com"
                  required
                  className="w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {state.errors?.email && (
                  <p className="mt-1 text-sm text-red-500">{state.errors.email[0]}</p>
                )}
              </div>

              <div>
                <label htmlFor="subject" className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-200">
                  Tiêu đề
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Chủ đề bạn muốn trao đổi"
                  required
                  className="w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {state.errors?.subject && (
                  <p className="mt-1 text-sm text-red-500">{state.errors.subject[0]}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-200">
                  Nội dung
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Viết nội dung tin nhắn..."
                  required
                  rows={5}
                  className="w-full resize-none rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {state.errors?.message && (
                  <p className="mt-1 text-sm text-red-500">{state.errors.message[0]}</p>
                )}
              </div>

              <FormSubmitButton
                idleText="Gửi tin nhắn"
                pendingText="Đang gửi..."
                className="w-full rounded-lg bg-blue-600 px-6 py-3 text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
              />

              {isPending && <p className="text-sm text-gray-500">Đang gửi tin nhắn...</p>}
            </form>
          )}
        </div>
      </div>
    </div>
  );
}