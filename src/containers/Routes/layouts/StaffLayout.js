import React from "react";
// import { Container } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";
import NotFoundPage from "components/NotFoundPage";
import StaffPage from "containers/StaffPage";

const StaffLayout = () => {
  return (
    <>
      <Switch>
        <Route exact path="/user" component={StaffPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </>
  );
};

export default StaffLayout;
