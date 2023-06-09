import React from "react";
import ReactDOM from "react-dom";
import AppComponent from "form/AppComponent";
import Calendar from "calender/calender";
import Calculator from "calculator/calculator";
// import weather_data from "weather_app/weather_data";

import "./index.css";

const App = () => (
  <div className="container">
    <div className="abc"><AppComponent /></div>
    <div className="abc"><Calendar/></div>
    <div className="abc"><Calculator/></div>


  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
