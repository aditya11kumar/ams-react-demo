import React from "react";
import ReactDOM from "react-dom";
import Calendar from "calender/src/calender";
// import Calculator from "../../calculator/src/calculator";
// import Users from "../../Users/src/users";
import "./index.css";

const App = () => (
  <React.Fragment><Calendar/></React.Fragment>
 
);
ReactDOM.render(<App />, document.getElementById("app"));
