import React from "react";
import { Col } from "reactstrap";
import { CountryType } from "../types";

interface CountryProps {
  country: CountryType;
}

const Country = ({ country }: CountryProps) => {
  return (
    <Col sm={6} md={4} className="my-3">
      ({country.emoji}) {country.name} -{" "}
      {country.languages.length ? country.languages[0].name : "no languages"}
    </Col>
  );
};

export default Country;
