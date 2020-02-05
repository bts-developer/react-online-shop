import React from "react";
import HomePage from "./pages/homepage/homepage.component";
import { Switch, Route } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop/hats" component={ShopPage} />
        <Route exact path="/shop/jackets" component={ShopPage} />
        <Route exact path="/shop/sneakers" component={ShopPage} />
        <Route exact path="/shop/womens" component={ShopPage} />
        <Route exact path="/shop/mens" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
