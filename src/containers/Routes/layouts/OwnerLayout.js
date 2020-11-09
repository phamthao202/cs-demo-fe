import React from "react";
// import { Container } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";
import NotFoundPage from "components/NotFoundPage";
import OwnerPage from "containers/OwnerPage";

const OwnerLayout = () => {
  return (
    <>
      <Switch>
        <Route exact path="/user" component={OwnerPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </>
  );
};

export default OwnerLayout;
