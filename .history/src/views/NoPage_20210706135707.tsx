import React from "react";
import { Col, Container, Row } from "reactstrap";

export default function NoPage() {
  return (
    <Container>
      <Row>
        <Col className="text-center">Page not found. Go back to homepage.</Col>
      </Row>
    </Container>
  );
}
