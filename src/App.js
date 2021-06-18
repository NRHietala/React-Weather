import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home } from "./pages/index";
import { StyleReset } from "./styles/index";
import { Header } from "./components/index";

const App = () => {
  return (
    <>
      <StyleReset />
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
};

export default App;
