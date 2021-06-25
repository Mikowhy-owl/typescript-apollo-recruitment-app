import React from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "reactstrap";
import { ContinentType } from "../types";

interface ContinentProps {
  continent: ContinentType;
}

const Continent = ({ continent }: ContinentProps) => {
  return (
    <Row className="my-4 text-center">
      <Col>
        <Link to={`continents/${continent.code}`} className="continent-link">
          {continent.name} {continent.code}
        </Link>
      </Col>
    </Row>
  );
};

export default Continent;
