import React from "react";
import ReactDOM from "react-dom";
import AppComponent from "form/AppComponent";
import Calendar from "calender/calender";
import Calculator from "calculator/calculator";

import "./index.css";
import "./navbar.css";
import "./App.css"

ReactDOM.render(
  <div className="container">
  
  <div className="calendar-container">
    <Calendar />
  </div>
  <div className="calculator-container">
    <Calculator />
  </div>
  <div className="app-component-container">
    <AppComponent />
  </div>
</div>
,
  document.getElementById("app")
);
