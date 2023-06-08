/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable object-curly-newline */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Table from "./pages/Table";
import './sass/App.css';
import Form from "./pages/form";
import Navbar from "./components/Navbar";
import FormData from "./pages/FormData";

function App() {
  let component;
  switch (window.location.pathname) {
    case "/":
    case "/form":
      component = <Form />;
      break;
    case "/table":
      component = <Table />;
      break;
    case "/form/data":
      component = <FormData />;
      break;
    default:
      component = <Form />;
      break;
  }

  return (
    <>
      <Navbar />
      {component}
    </>
  );
}

export default App;
