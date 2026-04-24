"use client";

import { useActionState, useEffect, useState } from "react";
import { sendContactMessage, type ContactFormState } from "./actions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

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
            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="text-center text-green-700">Gửi thành công!</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-center">
                <p className="text-green-600">Cảm ơn bạn đã liên hệ. Tôi sẽ phản hồi sớm nhất có thể.</p>
                <Button type="button" onClick={() => setShowSuccess(false)}>
                  Gửi tin nhắn khác
                </Button>
              </CardContent>
            </Card>
          ) : (
            <Card className="bg-gray-50 dark:bg-gray-800">
              <CardContent className="p-6">
                <form action={formAction} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Họ và tên</Label>
                    <Input id="name" name="name" type="text" placeholder="Nguyễn Văn A" required />
                    {state.errors?.name && <p className="text-sm text-red-500">{state.errors.name[0]}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" placeholder="email@example.com" required />
                    {state.errors?.email && <p className="text-sm text-red-500">{state.errors.email[0]}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Tiêu đề</Label>
                    <Input id="subject" name="subject" type="text" placeholder="Chủ đề bạn muốn trao đổi" required />
                    {state.errors?.subject && <p className="text-sm text-red-500">{state.errors.subject[0]}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Nội dung</Label>
                    <Textarea id="message" name="message" placeholder="Viết nội dung tin nhắn..." required rows={5} />
                    {state.errors?.message && <p className="text-sm text-red-500">{state.errors.message[0]}</p>}
                  </div>

                  <Button type="submit" disabled={isPending} className="w-full">
                    {isPending ? "Đang gửi..." : "Gửi tin nhắn"}
                  </Button>

                  {isPending && <p className="text-sm text-gray-500">Đang gửi tin nhắn...</p>}
                </form>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}