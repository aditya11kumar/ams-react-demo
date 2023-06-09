import React from "react";
import ReactDOM from "react-dom";
import AppComponent from "./AppComponent";

import "./index.css";

const App = () => (
  <div className="container">
    <AppComponent />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
