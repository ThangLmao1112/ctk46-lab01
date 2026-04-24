import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="mb-6 text-3xl font-bold">Giới thiệu</h1>

      <Card>
        <CardHeader className="flex flex-row items-center gap-4 space-y-0">
          <Avatar className="h-16 w-16">
            <AvatarFallback>QT</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle className="text-2xl">Nguyễn Hoàng Quốc Thắng</CardTitle>
            <p className="text-sm text-muted-foreground">Sinh viên năm 4, Công nghệ Thông tin, Đại học Đà Lạt</p>
          </div>
        </CardHeader>

        <CardContent className="space-y-6 text-gray-700 dark:text-gray-300">
          <p>
            Xin chào! Tôi là <strong>Nguyễn Hoàng Quốc Thắng</strong>, sinh viên năm 4 ngành Công nghệ Thông tin tại Đại học Đà Lạt.
          </p>

          <div>
            <h2 className="mb-4 text-2xl font-semibold">Kỹ năng</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>JavaScript / TypeScript</li>
              <li>React & Next.JS</li>
              <li>Tailwind CSS</li>
              <li>Git & GitHub</li>
              <li>SQL & PostgreSQL</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-semibold">Học vấn</h2>
            <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
              <p className="font-medium">Đại học Đà Lạt</p>
              <p className="text-gray-500">Cử nhân Công nghệ Thông tin (2021 — 2025)</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}