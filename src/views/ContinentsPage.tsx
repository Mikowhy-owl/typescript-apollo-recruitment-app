import { useQuery } from "@apollo/client";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import Continents from "../components/continents";
import { GET_CONTINENTS } from "../graphql/methods";

const ContinentsPage = () => {
  const { loading, error, data } = useQuery(GET_CONTINENTS);
  const continentsData = data?.continents;

  return (
    <Container fluid>
      <Row>
        <Col className="py-5">
          {loading ? (
            <Row>
              <Col className="text-center">Loading...</Col>
            </Row>
          ) : error ? (
            <Row>
              <Col className="text-center">{error}</Col>
            </Row>
          ) : (
            <Continents continents={continentsData} />
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default ContinentsPage;
