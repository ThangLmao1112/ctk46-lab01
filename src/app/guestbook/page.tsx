import { guestbookEntries } from "@/data/guestbook";
import GuestbookForm from "@/components/guestbook-form";
import DeleteButton from "@/components/delete-button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const dynamic = "force-dynamic";

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

export default function GuestbookPage() {
  const entries = guestbookEntries;

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="mb-2 text-3xl font-bold">Sổ lưu bút</h1>
      <p className="mb-8 text-gray-500">Hãy để lại lời nhắn cho tôi nhé!</p>

      <GuestbookForm />

      <Separator className="my-8" />

      <div className="space-y-4">
        <p className="text-sm text-gray-400">{entries.length} lời nhắn</p>

        {entries.length === 0 && (
          <p className="py-8 text-center text-gray-400">Chưa có lời nhắn nào. Hãy là người đầu tiên!</p>
        )}

        {entries.map((entry) => (
          <Card key={entry.id}>
            <CardContent className="pt-4">
              <div className="mb-2 flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback>{getInitials(entry.name)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-card-foreground">{entry.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {new Date(entry.createdAt).toLocaleDateString("vi-VN")}
                    </p>
                  </div>
                </div>
                <DeleteButton id={entry.id} />
              </div>
              <p className="text-gray-600">{entry.message}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}