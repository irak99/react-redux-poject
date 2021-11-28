import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductListing from "./containers/Products/ProductListing";
import Home from "./containers/Home"
import {Header} from "./containers/Header";
import {Cart} from "./containers/ShoppingCart";
import {Login} from "./containers/Login/index"
import "./App.css";

import ProductDetail from "./containers/Products/ProductDetail";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/category" component={ProductListing} />
          <Route path="/login" component={Login} />
          <Route path="/cart" component={Cart} />
          <Route path="/product/:productId" component={ProductDetail} />
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
