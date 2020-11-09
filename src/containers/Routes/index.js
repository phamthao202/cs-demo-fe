import React from "react";
import { Route, Switch } from "react-router-dom";
// import AdminLayout from "containers/Routes/layouts/ManagerLayout";
import PublicLayout from "containers/Routes/layouts/PublicLayout";
import PrivateRoute from "containers/Routes/PrivateRoute";
import OwnerLayout from "./layouts/OwnerLayout";
import StaffLayout from "./layouts/StaffLayout";
import ManagerLayout from "./layouts/ManagerLayout";
import { useDispatch, useSelector } from "react-redux";
const Routes = (props) => {

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const loading = useSelector((state) => state.auth.loading);
  const userRole = useSelector((state) => state.auth.userRole);
  return (
    <Switch>
      {isAuthenticated && userRole && userRole === "manager" ? (
        <Route path="/user" component={ManagerLayout} />
      ) : isAuthenticated && userRole && userRole === "owner" ? (
        <Route path="/user" component={OwnerLayout} />
      ) : isAuthenticated && userRole && userRole === "staff" ? (
        <Route path="/user" component={StaffLayout} />
      ) : (
        ""
      )}
      <Route path="/" component={PublicLayout} />
    </Switch>
  );
};
export default Routes;
