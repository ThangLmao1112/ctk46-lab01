import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import type { Country } from "@/types/country";

export const dynamic = "force-dynamic";

async function getCountry(code: string): Promise<Country> {
  const res = await fetch(`https://restcountries.com/v3.1/alpha/${code}?fields=cca3,name,capital,region,subregion,population,area,flags,currencies,languages,continents`);

  if (!res.ok) {
    notFound();
  }

  const data = (await res.json()) as Country[] | Country;
  return Array.isArray(data) ? data[0] : data;
}

function formatNumber(value: number) {
  return new Intl.NumberFormat("vi-VN").format(value);
}

export default async function CountryDetailPage({
  params,
}: {
  params: Promise<{ code: string }>;
}) {
  const { code } = await params;
  const country = await getCountry(code);

  const currencies = country.currencies ? Object.values(country.currencies) : [];
  const languages = country.languages ? Object.values(country.languages) : [];

  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <Button asChild variant="ghost" className="mb-6 px-0 hover:bg-transparent">
        <Link href="/countries">← Quay lại danh sách quốc gia</Link>
      </Button>

      <Card className="overflow-hidden">
        <div className="grid gap-0 md:grid-cols-[1.1fr_0.9fr]">
          <div className="flex items-center justify-center bg-muted p-6">
            <img
              src={country.flags.svg || country.flags.png}
              alt={country.flags.alt || `Cờ ${country.name.common}`}
              className="max-h-[360px] w-full rounded-lg object-cover"
            />
          </div>

          <div>
            <CardHeader>
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="secondary">{country.cca3}</Badge>
                <Badge variant="outline">{country.region}</Badge>
              </div>
              <CardTitle className="text-3xl">{country.name.common}</CardTitle>
              <CardDescription>{country.name.official}</CardDescription>
            </CardHeader>

            <CardContent className="space-y-5">
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg bg-muted p-4">
                  <p className="text-sm text-muted-foreground">Thủ đô</p>
                  <p className="font-medium">{country.capital?.[0] || "Không có dữ liệu"}</p>
                </div>
                <div className="rounded-lg bg-muted p-4">
                  <p className="text-sm text-muted-foreground">Dân số</p>
                  <p className="font-medium">{formatNumber(country.population)}</p>
                </div>
                <div className="rounded-lg bg-muted p-4">
                  <p className="text-sm text-muted-foreground">Diện tích</p>
                  <p className="font-medium">{formatNumber(country.area)} km²</p>
                </div>
                <div className="rounded-lg bg-muted p-4">
                  <p className="text-sm text-muted-foreground">Châu lục</p>
                  <p className="font-medium">{country.continents.join(", ")}</p>
                </div>
              </div>

              <Separator />

              <div className="space-y-3 text-sm">
                <p>
                  <span className="font-medium">Khu vực:</span> {country.subregion || "Không có dữ liệu"}
                </p>
                <p>
                  <span className="font-medium">Tiền tệ:</span> {currencies.length > 0 ? currencies.map((currency) => `${currency.name}${currency.symbol ? ` (${currency.symbol})` : ""}`).join(", ") : "Không có dữ liệu"}
                </p>
                <p>
                  <span className="font-medium">Ngôn ngữ:</span> {languages.length > 0 ? languages.join(", ") : "Không có dữ liệu"}
                </p>
              </div>
            </CardContent>
          </div>
        </div>
      </Card>
    </div>
  );
}