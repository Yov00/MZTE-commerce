import React from "react";
import { Switch, Route } from "react-router-dom";
import HatsPage from './pages/hatspage/HatsPage';
import "./App.scss";

import HomePage from "./pages/homepage/homepage.component";
function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
