import React from "react";
import { Col, Container, Row } from "reactstrap";

const NoPage = () => {
  return (
    <Container>
      <Row className="py-5 my-5">
        <Col className="text-center">
          Page not found. Go back to <a href="/">homepage</a> .
        </Col>
      </Row>
    </Container>
  );
};

export default NoPage;
