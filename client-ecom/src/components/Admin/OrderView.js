import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import ChSpinner from "../Common/ChSpinner";
import { fetchOrderById } from "../FirebaseDB/FirebaseQueries";
import { Link } from "react-router-dom";
import Order from "./Order";

function OrderView() {
  const [order, setOrder] = useState();
  const [showCard, setShowCard] = useState(false);
  const { orderId } = useParams();

  useEffect(() => {
    fetchOrderById(orderId)
      .then((res) => {
        setOrder(res);
        setShowCard(true);
      })
      .catch((e) => {
        setShowCard(true);
      });
  }, [orderId]);

  return (
    <Container variant="light" bg="secondary">
      {!showCard && <ChSpinner />}
      {order && showCard && <Order order={order} />}
      {showCard && !order && (
        <Container>
          <h3>La orden con id {orderId} no existe.</h3>
          <Link to={"/"}>
            <Button>Volver a Pagina Principal </Button>
          </Link>
        </Container>
      )}
    </Container>
  );
}

export default OrderView;
