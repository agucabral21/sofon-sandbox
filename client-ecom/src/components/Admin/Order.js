import React from "react";

import { Container, Col, Row } from "react-bootstrap";

import CartList from "./CartList";
function Order({ order }) {
  return (
    <Container variant="light" bg="secondary">
      <h1>Orden : {order.id}</h1>
      <hr />
      <Row>
        <Col sm={4}>
          <h4>Comprador:</h4> <p>{order.buyer.name}</p>
          <h4>Mail:</h4> <p>{order.buyer.mail}</p>
          <h4>Telefono:</h4> <p>{order.buyer.phone}</p>
          <h4>Cantidad de Items: </h4>
          <p>{order.totalItems}</p>
          <h4>Precio Total:</h4> <p>{order.totalPrice}</p>
        </Col>
        <Col>
          <CartList items={order.items}></CartList>
        </Col>
      </Row>
    </Container>
  );
}

export default Order;
