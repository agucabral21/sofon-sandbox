import React, { useContext } from "react";
import CartContext from "../../contexts/CartContext";
import CartItem from "./CartItem";
import { Container, Row, Alert } from "react-bootstrap";

function Cart() {
  const cartCtx = useContext(CartContext);

  function generateCartItems(cartItemsArray) {
    return cartItemsArray.map((iCart) => {
      return <CartItem key={iCart.item.id} cartItem={iCart} />;
    });
  }

  return (
    <Container>
      <Row>
        <div className="table-responsive">
          <h2>Carrito</h2>
          <table className="table table-sm">
            <thead>
              <tr>
                <th style={{ width: "20%" }} scope="col">
                  Nombre
                </th>
                <th scope="col">Descripcion</th>
                <th scope="col">Precio</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Total</th>
                <th scope="col">Opciones</th>
              </tr>
            </thead>
            <tbody>{generateCartItems(cartCtx.cart.items)}</tbody>
          </table>
        </div>
      </Row>
      <hr />
      <Row className="justify-content-md-end">
        <p>
          Total de productos: <strong>{cartCtx.cart.totalItems}</strong>
        </p>
      </Row>
      <Row className="justify-content-md-end">
        <Alert key={"info"} variant={"info"}>
          <h5> Precio Total: ${cartCtx.cart.totalPrice}</h5>
        </Alert>
      </Row>
    </Container>
  );
}

export default Cart;
