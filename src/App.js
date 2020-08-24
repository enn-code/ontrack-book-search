import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.scss";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

import Search from "./features/search/search";

const App = () => {
  return (
    <Container>
      <header>
        <Jumbotron>
          <h1>iLibraria.</h1>
          <p>Let our virtual librarian do the hard work for you!</p>
        </Jumbotron>
      </header>
      <BrowserRouter>
        <Route path="/:searchParam?">
          <Search />
        </Route>
      </BrowserRouter>
    </Container>
  );
};

export default App;
