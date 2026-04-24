"use client";

import { useActionState, useEffect, useRef } from "react";
import { createGuestbookEntry, type GuestbookActionState } from "@/app/guestbook/actions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

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
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Viết lời nhắn</CardTitle>
      </CardHeader>
      <CardContent>
        <form ref={formRef} action={formAction} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Tên của bạn</Label>
            <Input id="name" name="name" type="text" placeholder="Nhập tên của bạn" required />
            {state.errors?.name && <p className="text-sm text-red-500">{state.errors.name[0]}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Lời nhắn</Label>
            <Textarea id="message" name="message" placeholder="Viết lời nhắn của bạn..." required rows={3} />
            {state.errors?.message && <p className="text-sm text-red-500">{state.errors.message[0]}</p>}
          </div>

          {state.formError && <p className="text-sm text-red-500">{state.formError}</p>}

          <div className="space-y-2">
            <Button type="submit" disabled={isPending}>
              {isPending ? "Đang gửi..." : "Gửi lời nhắn"}
            </Button>

            {isPending && <p className="text-sm text-gray-500">Đang xử lý lời nhắn...</p>}
            {state.success && <p className="text-sm text-green-600">Gửi lời nhắn thành công!</p>}
          </div>
        </form>
      </CardContent>
    </Card>
  );
}