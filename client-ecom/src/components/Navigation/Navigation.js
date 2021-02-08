import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../contexts/CartContext";
import { NavLink } from "react-router-dom";
import { fetchCategories } from "../FirebaseDB/FirebaseQueries";

function Navigation() {
  const cartCtx = useContext(CartContext);
  const [categories, setCategories] = useState([]);

  const loadCategories = () => {
    fetchCategories()
      .then((res) => {
        setCategories(res);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => loadCategories(), []);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <NavLink
          activeClassName="active"
          exact={true}
          className="navbar-brand nav-item"
          to={"/"}
        >
          Sofon Store
        </NavLink>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a
                href="/"
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
              >
                Categorias
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                {
                  categories.map((cat) => {
                    return (
                      <NavLink
                        activeClassName="active"
                        className="nav-item dropdown-item"
                        to={"/category/" + cat.key}
                      >
                        {cat.label}
                      </NavLink>
                    );
                  }) /*let comp = (
            <NavLink
              activeClassName="active"
              className="nav-item dropdown-item"
              to={"/category/" + cat.key}
            >
              {cat.label}
            </NavLink>
                );*/
                }
                <NavLink
                  exact={true}
                  activeClassName="active"
                  className="nav-item dropdown-item"
                  to={"/"}
                >
                  Todo
                </NavLink>
              </div>
            </li>
            <NavLink
              activeClassName="active"
              className="nav-item nav-link"
              to={"/cart"}
            >
              <i className="fa fa-shopping-cart"></i>{" "}
              <span className="badge badge-dark">
                {cartCtx.cart.totalItems}
              </span>
            </NavLink>
            {/*<NavLink
              activeClassName="active"
              className="nav-item nav-link"
              to={"/admin"}
            >
              Admin
           </NavLink>*/}
          </ul>
        </div>
      </nav>
      <br />
      <br />
    </div>
  );
}

export default Navigation;
