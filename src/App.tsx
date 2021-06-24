import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails/'
import Cart from './pages/Cart'
import Success from './pages/Success'



function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/product/:id" component={ProductDetails} />
      <Route exact path="/cart" component={Cart} />
      <Route exact path="/success" component={Success} />

      {/* <Route path="*" component={404} /> */}
    </Switch>
  );
}

export default App;
