import React from "react";
import PublicNavbar from "containers/PuclicNavbar";
import "../components/managerPage/ManagerPage.css";
const ManagerPage = () => {
  return (
    <div>
      <PublicNavbar />
      <div className="ManagerPage-Body">
        <div className="row">
          <div className="col-md-3"> 3 cai button ne</div>
          <div className="col-md-9">cai nay hien ra sau khi click ne</div>
        </div>
      </div>
    </div>
  );
};

export default ManagerPage;
