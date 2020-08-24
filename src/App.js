import React from "react";
import "./App.css";

import Search from "./components/search";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Route path="/:searchParam?">
            <Search />
          </Route>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
