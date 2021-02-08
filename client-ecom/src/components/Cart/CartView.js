import React, { useContext } from "react";
import Cart from "./Cart";
import { Row, Col, Container } from "react-bootstrap";
import CartContext from "../../contexts/CartContext";
import Checkout from "./Checkout";
import HomeButton from "../Common/HomeButton";

function CartView() {
  const cartCtx = useContext(CartContext);
  return (
    <Container>
      {cartCtx.cart.items.length === 0 ? (
        <div>
          <h3>El carrito esta vacio.</h3>
          <HomeButton />
        </div>
      ) : (
        <Row>
          <Col sm={8}>
            <Cart />
          </Col>
          <Col sm={4}>
            <Checkout />
          </Col>
        </Row>
      )}
    </Container>
  );
}

export default CartView;
