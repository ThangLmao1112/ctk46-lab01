import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nguyễn Hoàng Quốc Thắng - CTK46A",
  description: "Lab 01 - Next.js | MSSV: 2212458 | Sinh viên CTK46A",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}