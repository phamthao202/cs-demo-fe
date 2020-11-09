import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const NotFoundPage = () => {
  return (
    <Container>
      <Row style={{ marginTop: "50px" }}>
        <Col md={{ span: 6, offset: 3 }} style={{ textAlign: "center" }}>
          <h1>404</h1>
          <p>The Page You Requested Could Not Be Found.</p>
          <Image
            src="https://colorlib.com/wp/wp-content/uploads/sites/2/404-error-template-10.png"
            alt="errorimg"
            style={{ width: "100%", marginTop: "50px" }}
          />
        </Col>
      </Row>
    </Container>
  );
};
export default NotFoundPage;
