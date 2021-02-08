import React from "react";
//import CartContext from "../../contexts/CartContext";
import { Container } from "react-bootstrap";

import OrderList from "./OrderList";

function AdminConsole() {
  return (
    <Container>
      <h2>Lista de Ordenes</h2>
      <br />
      <OrderList></OrderList>
    </Container>
  );
}

export default AdminConsole;
