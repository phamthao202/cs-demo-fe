import React from "react";
// import { Container } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";
import NotFoundPage from "components/NotFoundPage";
import HomePage from "containers/HomePage";
import RegisterPage from "containers/RegisterPage";
import LoginPage from "containers/LoginPage";
import MenuPage from "containers/MenuPage";
const PublicLayout = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/menu" component={MenuPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </>
  );
};

export default PublicLayout;