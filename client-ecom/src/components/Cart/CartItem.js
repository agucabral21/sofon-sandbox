import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import { ButtonGroup, Button } from "react-bootstrap";

import CartContext from "../../contexts/CartContext";

function CartItem({ cartItem }) {
  const cartCtx = useContext(CartContext);

  function changeCount(countChange) {
    let resultCount = cartItem.count + countChange;
    if (resultCount > 0 && resultCount <= cartItem.item.stock) {
      cartCtx.cartDispatch({
        type: "ADD_ITEM",
        payload: {
          item: cartItem.item,
          count: countChange,
        },
      });
    }
  }

  return (
    <tr>
      <td>
        {" "}
        <NavLink to={"/item/" + cartItem.item.id}>
          {" "}
          <span>{cartItem.item.label}</span>{" "}
        </NavLink>
      </td>
      <td>
        {" "}
        <span>{cartItem.item.description}</span>
      </td>
      <td>
        {" "}
        <span>{cartItem.item.price}</span>
      </td>
      <td>
        {" "}
        <span>{cartItem.count}</span>
      </td>
      <td>
        {" "}
        <span>{cartItem.count * cartItem.item.price}</span>
      </td>
      <td>
        {" "}
        <ButtonGroup size="sm">
          <Button onClick={() => changeCount(-1)} variant="secondary">
            {" "}
            <i className="fa fa-minus"></i>
          </Button>
          <Button onClick={() => changeCount(+1)} variant="secondary">
            {" "}
            <i className="fa fa-plus"></i>
          </Button>
          <Button
            onClick={() => {
              cartCtx.cartDispatch({
                type: "REMOVE",
                payload: cartItem,
              });
            }}
            variant="secondary"
          >
            {" "}
            <i className="fa fa-trash"></i>
          </Button>
        </ButtonGroup>
      </td>
    </tr>
  );
}

export default CartItem;
