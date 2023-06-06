import React from "react";
import ReactDOM from "react-dom";
import Calendar from "calender/calender";
import Calculator from "calculator/calculator";
import Users from "Users/users";
import "./index.css";

const App = () => (
  <React.Fragment>
    <div className="abc"><Calendar/></div>
    <div className="abc"><Calculator/></div>
    <div className="abc"><Users/></div>
  </React.Fragment>
 
);
ReactDOM.render(<App />, document.getElementById("app"));
