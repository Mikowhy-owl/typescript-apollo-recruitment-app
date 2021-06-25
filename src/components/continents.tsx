import React from "react";
import { ContinentType } from "../types";
import Continent from "./continent";

interface ContinentsProps {
  continents: Array<ContinentType>;
}

const Continents = ({ continents }: ContinentsProps) => {
  return (
    <>
      {continents.map((continent: ContinentType) => (
        <Continent continent={continent} />
      ))}
    </>
  );
};

export default Continents;
