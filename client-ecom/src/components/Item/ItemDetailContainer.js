import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail.js";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import { fetchItemById } from "../FirebaseDB/FirebaseQueries";
import ChSpinner from "../Common/ChSpinner";

function ItemDetailContainer() {
  const [item, setItem] = useState();
  const [showCard, setShowCard] = useState(false);
  const { itemId } = useParams();

  useEffect(() => {
    fetchItemById(itemId)
      .then((res) => {
        setItem(res);
        setShowCard(true);
      })
      .catch((e) => {
        setShowCard(true);
      });
  }, [itemId]);

  return (
    <Container variant="light" bg="secondary">
      {!showCard && <ChSpinner />}
      {item && showCard && <ItemDetail item={item} />}
      {showCard && !item && (
        <Container>
          <h3>El producto con id {itemId} no existe.</h3>
          <Link to={"/"}>
            <Button>Volver a Pagina Principal </Button>
          </Link>
        </Container>
      )}
    </Container>
  );
}

export default ItemDetailContainer;
