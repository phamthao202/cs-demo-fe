import React from "react";
// import { Container } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";
import NotFoundPage from "components/NotFoundPage";
import OwnerPage from "containers/OwnerPage";
import AlertMsg from "components/AlertMsg";

const OwnerLayout = () => {
  return (
    <>
      {" "}
      <AlertMsg />
      <Switch>
        <Route exact path="/user" component={OwnerPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </>
  );
};

export default OwnerLayout;
