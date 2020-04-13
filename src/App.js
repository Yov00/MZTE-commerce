import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.scss";

import HatsPage from './pages/hatspage/HatsPage';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SigninAndSingup from './pages/sign-in-and-sign-up/sign-in-and-sing-up';
import HomePage from "./pages/homepage/homepage.component";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={SigninAndSingup} />
      </Switch>
    </div>
  );
}

export default App;
