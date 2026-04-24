"use client";

import { useActionState, useEffect, useRef } from "react";
import { createGuestbookEntry, type GuestbookActionState } from "@/app/guestbook/actions";
import FormSubmitButton from "@/components/form-submit-button";

const initialState: GuestbookActionState = {
  success: false,
};

export default function GuestbookForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction, isPending] = useActionState(createGuestbookEntry, initialState);

  useEffect(() => {
    if (state.success) {
      formRef.current?.reset();
    }
  }, [state.success]);

  return (
    <form ref={formRef} action={formAction} className="mb-8 space-y-4 rounded-lg bg-gray-50 p-6">
      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-700">
          Tên của bạn
        </label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Nhập tên của bạn"
          required
          className="w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {state.errors?.name && (
          <p className="mt-1 text-sm text-red-500">{state.errors.name[0]}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-gray-700">
          Lời nhắn
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Viết lời nhắn của bạn..."
          required
          rows={3}
          className="w-full resize-none rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {state.errors?.message && (
          <p className="mt-1 text-sm text-red-500">{state.errors.message[0]}</p>
        )}
      </div>

      {state.formError && <p className="text-sm text-red-500">{state.formError}</p>}

      <div className="space-y-2">
        <FormSubmitButton
          idleText="Gửi lời nhắn"
          pendingText="Đang gửi..."
          className="rounded-lg bg-blue-600 px-6 py-2 text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
        />

        {isPending && <p className="text-sm text-gray-500">Đang xử lý lời nhắn...</p>}

        {state.success && <p className="text-sm text-green-600">Gửi lời nhắn thành công!</p>}
      </div>
    </form>
  );
}