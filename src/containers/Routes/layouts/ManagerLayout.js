import React from "react";
// import { Container } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";
import NotFoundPage from "components/NotFoundPage";
import ManagerPage from "containers/managerPage/ManagerPage";

const ManagerLayout = () => {
  return (
    <>
      <Switch>
        <Route exact path="/user" component={ManagerPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </>
  );
};

export default ManagerLayout;
