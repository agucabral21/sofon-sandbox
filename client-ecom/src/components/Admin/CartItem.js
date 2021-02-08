import React from "react";
import { NavLink } from "react-router-dom";

function cartItem({ cartItem }) {
  return (
    <tr>
      <td>
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
    </tr>
  );
}

export default cartItem;
