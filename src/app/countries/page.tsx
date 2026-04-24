import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { Country } from "@/types/country";

export const dynamic = "force-dynamic";

async function getCountries(): Promise<Country[]> {
  const res = await fetch("https://restcountries.com/v3.1/all?fields=cca3,name,capital,region,subregion,population,area,flags,currencies,languages,continents", {
    next: { revalidate: 60 * 60 },
  });

  if (!res.ok) {
    throw new Error("Không thể tải danh sách quốc gia");
  }

  const countries = (await res.json()) as Country[];

  return countries.sort((a, b) => a.name.common.localeCompare(b.name.common));
}

function formatPopulation(population: number) {
  return new Intl.NumberFormat("vi-VN").format(population);
}

export default async function CountriesPage() {
  const countries = await getCountries();
  const displayCountries = countries.slice(0, 24);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="mb-8">
        <Badge variant="secondary" className="mb-3">REST Countries API</Badge>
        <h1 className="mb-2 text-3xl font-bold">Quốc gia</h1>
        <p className="max-w-2xl text-muted-foreground">
          Danh sách quốc gia được tải bằng server-side fetch từ REST Countries, hiển thị theo dạng lưới thẻ.
        </p>
      </div>

      <div className="mb-6 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
        <span>{countries.length} quốc gia</span>
        <span>•</span>
        <span>Hiển thị {displayCountries.length} mục đầu tiên</span>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {displayCountries.map((country) => (
          <Link key={country.cca3} href={`/countries/${country.cca3}`} className="block">
            <Card className="h-full overflow-hidden transition-shadow hover:shadow-md">
              <div className="aspect-[16/10] w-full overflow-hidden bg-muted">
                <img
                  src={country.flags.png}
                  alt={country.flags.alt || `Cờ ${country.name.common}`}
                  className="h-full w-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="secondary">{country.cca3}</Badge>
                  <Badge variant="outline">{country.region}</Badge>
                </div>
                <CardTitle className="line-clamp-1">{country.name.common}</CardTitle>
                <CardDescription className="line-clamp-2">
                  {country.capital?.[0] || "Không có thủ đô"} • {country.subregion || country.continents[0] || "Không rõ khu vực"}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 pt-0 text-sm text-muted-foreground">
                <p>Population: {formatPopulation(country.population)}</p>
                <p>Area: {formatPopulation(country.area)} km²</p>
                <p className="text-primary underline-offset-4 hover:underline">Xem chi tiết →</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}