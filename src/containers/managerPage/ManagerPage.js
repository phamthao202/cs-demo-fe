import React, { useState, useEffect } from "react";

import PublicNavbar from "../PuclicNavbar";
import "./ManagerPage.css";
import MenuManagerPage from "components/managerpage/menuManagerPage.js/MenuManagerPage";
// import SalaryManagerPage from "components/managerpage/salaryManagerPage/SalaryManagerPage";
import EmployeeList from "components/employeeList/EmployeeList";
import AccManagement from "components/managerpage/accManagement/AccManagement";
import DailyPayslip from "components/dailyPayslip/DailyPayslipFulltime";
import DailyPayslipFulltime from "components/dailyPayslip/DailyPayslipFulltime";
import PostEvents from "components/managerpage/postEvents/PostEvents";
const ManagerPage = () => {
  const [managerChoice, setManagerChoice] = useState("");

  return (
    <div>
      <PublicNavbar />
      <div className="ManagePage-Body">
        <div className="row manager-button-area p-3">
          <div className="col-md-3 manager-buttons">
            <div
              className="manager-btn"
              onClick={() => setManagerChoice("menu")}
            >
              Menu
            </div>

            <div className="manager-btn"
            onClick={() => setManagerChoice("post events")}>Post Events</div>
            <div
              className="manager-btn "
              onClick={() => setManagerChoice("account management")}
            >
              Account Management
            </div>
            <div
              className="manager-btn"
              onClick={() => setManagerChoice("salary")}
            >
              Salary
            </div>
          </div>
          <div className="col-md-9">
            {managerChoice === "menu" ? <MenuManagerPage /> : ""}
            {managerChoice === "salary" ? <EmployeeList /> : ""}
            {managerChoice === "account management" ? <AccManagement /> : ""}
            {managerChoice === "post events" ? <PostEvents /> : ""}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagerPage;
