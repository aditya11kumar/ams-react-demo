// import React, { useState } from "react";
// import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Table from "./pages/Table";
import './App.css';
import Form from "./pages/form";
import Navbar from "./components/Navbar";
import FormData from "./pages/FormData";


// function App() {
//   const [showTable, setShowTable] = useState(false);

//   function handleToggleTable() {
//     setShowTable(!showTable);
//   }

//   return (
//     <div>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Form</Link>
//           </li>
//           <li>
//             <Link to="/table" onClick={handleToggleTable}>
//               Table
//             </Link>
//           </li>
//         </ul>
//       </nav>
//       <Switch>
//         <Route exact path="/">
//           <Form />
//         </Route>
//         <Route path="/table">
//           {showTable ? <Table /> : null}
//         </Route>
//       </Switch>
//     </div>
//   );
// }

// export default App;


function App() {
  // const [showTable, setShowTable] = useState(false);

  // function handleToggleTable() {
  //   setShowTable(!showTable);
  // }

  // return (
  //   // <div>
  //   //   <nav>
  //   //     <ul>
  //   //       <li>
  //   //         <Link to="/">Form</Link>
  //   //       </li>
  //   //       <li>
  //   //         <Link to="/table" onClick={handleToggleTable}>
  //   //           Table
  //   //         </Link>
  //   //       </li>
  //   //     </ul>
  //   //   </nav>
  //   //   <Router>
  //   //   <Switch>
  //   //     <Route exact path="/">
  //   //       <Form />
  //   //     </Route>
  //   //     <Route path="/table">
  //   //       {showTable ? <Table /> : null}
  //   //     </Route>
  //   //   </Switch>
  //   //   </Router>
  //   // </div>
  //   <Table />
  //   //<Form />
  // );
  let component
  switch (window.location.pathname) {
    case "/": component = <Form />
      break
    case "/form":
      component = <Form />
      break
    case "/table": component = <Table />
      break
    case "/form/data": component = <FormData />
      break
  }
  return (<>
    <Navbar></Navbar> {component}
  </>)
}

export default App;
