import { NextRequest, NextResponse } from "next/server";
import { guestbookEntries } from "@/data/guestbook";

interface RouteParams {
  params: Promise<{ id: string }>;
}

function validateEntryInput(body: unknown) {
  if (!body || typeof body !== "object") {
    return "Dữ liệu không hợp lệ";
  }

  const { name, message } = body as { name?: unknown; message?: unknown };

  if (typeof name !== "string" || name.trim().length < 2 || name.trim().length > 50) {
    return "Tên phải từ 2-50 ký tự";
  }

  if (
    typeof message !== "string" ||
    message.trim().length < 1 ||
    message.trim().length > 500
  ) {
    return "Lời nhắn phải từ 1-500 ký tự";
  }

  return null;
}

// PUT /api/guestbook/[id] — Cập nhật lời nhắn theo id
export async function PUT(request: NextRequest, { params }: RouteParams) {
  const { id } = await params;
  const index = guestbookEntries.findIndex((entry) => entry.id === id);

  if (index === -1) {
    return NextResponse.json({ error: "Không tìm thấy lời nhắn" }, { status: 404 });
  }

  const body = await request.json();
  const validationError = validateEntryInput(body);

  if (validationError) {
    return NextResponse.json({ error: validationError }, { status: 400 });
  }

  const { name, message } = body as { name: string; message: string };
  const updatedEntry = {
    ...guestbookEntries[index],
    name: name.trim(),
    message: message.trim(),
  };

  guestbookEntries[index] = updatedEntry;

  return NextResponse.json(updatedEntry);
}

// DELETE /api/guestbook/[id] — Xóa lời nhắn theo id
export async function DELETE(_request: NextRequest, { params }: RouteParams) {
  const { id } = await params;

  const index = guestbookEntries.findIndex((entry) => entry.id === id);

  if (index === -1) {
    return NextResponse.json({ error: "Không tìm thấy lời nhắn" }, { status: 404 });
  }

  const deleted = guestbookEntries.splice(index, 1)[0];

  return NextResponse.json(deleted);
}