import React from "react";
import PublicNavbar from "../PuclicNavbar";
import "./ManagerPage.css";
import MenuManagerPage from "components/managerpage/menuManagerPage.js/MenuManagerPage";
const ManagerPage = () => {
  return (
    <div>
      <PublicNavbar />
      <div className="ManagePage-Body">
        <div className="row manager-button-area">
          <div className="col-md-3 manager-buttons">
            <div className="manager-btn">Create Menu</div>
            <div className="manager-btn">Edit Menu</div>
            <div className="manager-btn">Delete Menu</div>
            <div className="manager-btn">User Authorization</div>
            <div className="manager-btn">Salary</div>
          </div>
          <div className="col-md-9">
            <MenuManagerPage/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagerPage;
