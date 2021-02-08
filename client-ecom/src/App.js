import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { CartCtxProvider } from "./contexts/CartContext";
import Navigation from "./components/Navigation/Navigation";
import ItemList from "./components/Item/ItemList";
import CartView from "./components/Cart/CartView";
import ItemDetailContainer from "./components/Item/ItemDetailContainer.js";
import AdminConsole from "./components/Admin/AdminConsole";
import OrderView from "./components/Admin/OrderView";

function App() {
  return (
    <CartCtxProvider>
      <BrowserRouter>
        <Navigation />

        <Switch>
          <Route exact path="/">
            {" "}
            <ItemList />{" "}
          </Route>
          <Route path="/category/:catId">
            {" "}
            <ItemList />
          </Route>
          <Route path="/item/:itemId">
            <ItemDetailContainer />
          </Route>
          <Route path="/cart" component={CartView} />
          <Route path="/admin" component={AdminConsole} />
          <Route path="/order/:orderId" component={OrderView} />
        </Switch>
      </BrowserRouter>
    </CartCtxProvider>
  );
}

export default App;
