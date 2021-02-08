import React, { useEffect, useState } from "react";
import Item from "./Item.js";
//import  {getProducts} from "../../services/restServices";
import { Container } from "react-bootstrap";
import { fetchItems } from "../FirebaseDB/FirebaseQueries";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import ChSpinner from "../Common/ChSpinner";

function ItemList() {
  let { catId } = useParams("all");
  const [productArray, setProductArray] = useState([]);
  const [loading, setLoading] = useState(true);

  function loadProducts() {
    setLoading(true);
    fetchItems(catId ? catId : "all")
      .then((res) => {
        setProductArray(res);
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        alert(e);
      });
  }

  useEffect(loadProducts, [catId]);

  return (
    <Container>
      <h1>
        Productos{" "}
        {catId ? (
          <button type="button" className="btn btn-info">
            {"Categoria: " + catId + " "}
            <Link to={"/"}>
              <span className="badge badge-info">x</span>
            </Link>
          </button>
        ) : null}
      </h1>
      <br />
      {!loading ? (
        <div className="table-responsive" style={{ height: "400px" }}>
          <table className="table table-sm">
            <thead>
              <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Descripcion</th>
                <th scope="col">Stock</th>
              </tr>
            </thead>
            <tbody>
              {productArray.map((i) => {
                return <Item key={i.id} item={i} />;
              })}
            </tbody>
          </table>
        </div>
      ) : null}
      {loading ? <ChSpinner /> : null}
    </Container>
  );
}
export default ItemList;
