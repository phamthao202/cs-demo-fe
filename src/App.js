import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Routes from "./containers/Routes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;
