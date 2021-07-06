import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import Countries from "../components/countries";
import { GET_CONTINENT } from "../graphql/methods";
import { ParamTypes } from "../types";

const ContinentDetailsPage = () => {
  const { code } = useParams<ParamTypes>();
  const { loading, error, data } = useQuery(GET_CONTINENT, {
    variables: { code: code.toUpperCase() },
  });

  const continentData = data?.continent;

  return (
    <Container>
      <Row className="py-5">
        {loading ? (
          <Row>
            <Col className="text-center">Loading...</Col>
          </Row>
        ) : error ? (
          <Row>
            <Col className="text-center">{error}</Col>
          </Row>
        ) : continentData?.countries.length ? (
          <Countries countries={continentData.countries} />
        ) : (
          <Row>
            <Col className="text-center">No countries found for that code.</Col>
          </Row>
        )}
      </Row>
      <Row className="mb-5">
        <Col className="text-center">
          Go back to <Link to="/">homepage </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default ContinentDetailsPage;
