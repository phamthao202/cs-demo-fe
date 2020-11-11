import React from "react";
import AlertMsg from "components/AlertMsg";
import { Switch, Route } from "react-router-dom";
import NotFoundPage from "components/NotFoundPage";
import ManagerPage from "containers/managerPage/ManagerPage";

const ManagerLayout = () => {
  return (
    <>
      <AlertMsg />

      <Switch>
        <Route exact path="/user" component={ManagerPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </>
  );
};

export default ManagerLayout;
