import React from "react";
import { CountryType } from "../types";
import Country from "./country";

interface CountriesProps {
  countries: Array<CountryType>;
}

const Countries = ({ countries }: CountriesProps) => {
  return (
    <>
      {countries.map((country: CountryType) => (
        <Country country={country} />
      ))}
    </>
  );
};

export default Countries;
