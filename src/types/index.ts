export type LanguageType = {
  name: string;
};

export type CountryType = {
  name: string;
  emoji: string;
  languages: Array<LanguageType>;
};

export type ContinentType = {
  code: string;
  name: string;
  countries: Array<CountryType>;
};

export type ParamTypes = {
  code: string;
};
