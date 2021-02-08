import React from "react";
import CartItem from "./CartItem";
import { Row } from "react-bootstrap";

function CartList({ items }) {
  function generateCartItems() {
    return items.map((iCart) => {
      console.log(iCart);
      return <CartItem cartItem={iCart} />;
    });
  }

  return (
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
            </tr>
          </thead>
          <tbody>{generateCartItems()}</tbody>
        </table>
      </div>
    </Row>
  );
}

export default CartList;
