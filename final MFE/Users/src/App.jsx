import React from "react";
import ReactDOM from "react-dom";
import Users from "./users";
import "./index.css";

const App = () => (
  <div className="container">
    <Users/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
