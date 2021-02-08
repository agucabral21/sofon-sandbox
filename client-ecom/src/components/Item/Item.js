import React from "react";
import { NavLink } from "react-router-dom";

function Item({ item }) {
  return (
    <tr>
      <td>
        <NavLink to={"/item/" + item.id}>
          {" "}
          <span className="nav-link">{item.label}</span>{" "}
        </NavLink>
      </td>
      <td>
        {" "}
        <span>{item.description}</span>
      </td>
      <td>
        {" "}
        <span className="nav-link">{item.stock}</span>
      </td>
    </tr>
  );
}
export default Item;
