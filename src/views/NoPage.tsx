import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";

const NoPage = () => {
  return (
    <Container>
      <Row className="py-5 my-5">
        <Col className="text-center">
          Page not found. Go back to <Link to="/">homepage </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default NoPage;
