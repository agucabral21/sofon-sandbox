import React from "react";

import { Spinner, Row, Col } from "react-bootstrap";

function ChSpinner({ message }) {
  return (
    <Row>
      <Col className="justify-content-md-center">
        <h4>
          {message ? message : "Cargando"}{" "}
          <Spinner animation={"border"}></Spinner>
        </h4>
      </Col>
    </Row>
  );
}

export default ChSpinner;
