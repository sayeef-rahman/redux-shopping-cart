import React from "react";
import {
  Route,
  Router,
  Routes,
} from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import SingleItem from "./components/SingleItem/SingleItem";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route exact path="/" component={<Products />} />
          <Route exact path="/cart" component={<Cart />} />
          <Route exact path="/product/:id" component={<SingleItem />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
