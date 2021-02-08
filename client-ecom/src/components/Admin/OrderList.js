import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import ChSpinner from "../Common/ChSpinner";
import { fetchOrders } from "../FirebaseDB/FirebaseQueries";
import { NavLink } from "react-router-dom";

function OrderList() {
  const [orderArray, setOrderArray] = useState([]);
  const [loading, setLoading] = useState(true);

  function loadOrders() {
    setLoading(true);
    fetchOrders()
      .then((res) => {
        setOrderArray(res);
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        alert(e);
      });
  }

  useEffect(loadOrders, []);

  return (
    <Container>
      {!loading ? (
        <div className="table-responsive" style={{ height: "400px" }}>
          <table className="table table-sm">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Cliente</th>
                <th scope="col">Cantidad de Productos</th>
                <th scope="col">Costo Total</th>
              </tr>
            </thead>
            <tbody>
              {orderArray.map((o) => {
                return (
                  <tr>
                    <td>
                      <NavLink to={"/order/" + o.id}>
                        {" "}
                        <span className="nav-link">{o.id}</span>{" "}
                      </NavLink>
                    </td>
                    <td>
                      {" "}
                      <span>{o.buyer.name}</span>
                    </td>
                    <td>
                      {" "}
                      <span className="nav-link">{o.totalItems}</span>
                    </td>
                    <td>
                      {" "}
                      <span className="nav-link">{o.totalPrice}</span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : null}
      {loading ? <ChSpinner /> : null}
    </Container>
  );
}

export default OrderList;
