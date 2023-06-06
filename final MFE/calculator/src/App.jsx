import React from "react";
import ReactDOM from "react-dom";
import Calculator from "./calculator";
import "./index.css";

const App = () => (
  <div className="container">
    <Calculator/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
