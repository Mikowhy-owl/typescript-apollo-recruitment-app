import React from "react";
import { Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";

const NoPage = () => {
  return (
    <Container>
      <Row className="py-5 my-5">
        <Col className="text-center">
          Page not found. Go back to <Link to="/">homepage </Link> .
        </Col>
      </Row>
    </Container>
  );
};

export default NoPage;
