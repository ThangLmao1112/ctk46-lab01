export interface CountryName {
  common: string;
  official: string;
  nativeName?: Record<string, { official: string; common: string }>;
}

export interface CountryFlag {
  png: string;
  svg: string;
  alt?: string;
}

export interface CountryCurrency {
  name: string;
  symbol?: string;
}

export interface Country {
  cca3: string;
  name: CountryName;
  capital?: string[];
  region: string;
  subregion?: string;
  population: number;
  area: number;
  flags: CountryFlag;
  currencies?: Record<string, CountryCurrency>;
  languages?: Record<string, string>;
  continents: string[];
}