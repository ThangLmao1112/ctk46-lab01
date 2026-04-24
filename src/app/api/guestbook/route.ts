import { NextRequest, NextResponse } from "next/server";
import { guestbookEntries } from "@/data/guestbook";

export const dynamic = "force-dynamic";

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

// GET /api/guestbook — Lấy danh sách tất cả lời nhắn
export async function GET(request: NextRequest) {
  const limitParam = request.nextUrl.searchParams.get("limit");

  if (!limitParam) {
    return NextResponse.json(guestbookEntries);
  }

  const limit = Number.parseInt(limitParam, 10);

  if (Number.isNaN(limit) || limit < 1) {
    return NextResponse.json({ error: "limit phải là số nguyên dương" }, { status: 400 });
  }

  return NextResponse.json(guestbookEntries.slice(0, limit));
}

// POST /api/guestbook — Thêm lời nhắn mới
export async function POST(request: NextRequest) {
  const body = await request.json();
  const validationError = validateEntryInput(body);

  if (validationError) {
    return NextResponse.json({ error: validationError }, { status: 400 });
  }

  const { name, message } = body as { name: string; message: string };

  const newEntry = {
    id: Date.now().toString(),
    name: name.trim(),
    message: message.trim(),
    createdAt: new Date().toISOString(),
  };

  guestbookEntries.unshift(newEntry);

  return NextResponse.json(newEntry, { status: 201 });
}