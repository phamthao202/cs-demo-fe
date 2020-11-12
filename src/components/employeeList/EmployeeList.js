import React, { useState, useEffect } from "react";

import "./EmployeeList.css";
import { useSelector, useDispatch } from "react-redux";
import { employeeAction, payslipAction } from "redux/actions";
import DailyPayslipFulltime from "components/dailyPayslip/DailyPayslipFulltime";
import DailyPayslipParttime from "components/dailyPayslip/DailyPayslipParttime";
const EmployeeList = () => {
  const dispatch = useDispatch();
  const [fulltimeList, setFulltimeList] = useState([]);
  const [parttimeList, setParttimeList] = useState([]);
  const employeeType = useSelector((state) => state.payslip.staffType);
  const employeeList = useSelector((state) => state.employee.employeeList);
  useEffect(() => {
    dispatch(employeeAction.getEmployeeList());
  }, []);

  useEffect(() => {
    if (employeeList.length > 0) {
      setParttimeList(
        employeeList.filter((item) => item.employmentType === "part-time")
      );
      setFulltimeList(
        employeeList.filter((item) => item.employmentType === "full-time")
      );
    }
  }, [employeeList]);

  return (
    <div>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <div style={{ fontSize: "30px", fontWeight: "900" }}>EMPLOYEE LIST</div>
        <div className="d-flex w-100 justify-content-around ">
          <div className="d-flex flex-column  align-items-center part m-4">
            <div style={{ fontSize: "30px", fontWeight: "600" }}>Part-time</div>

            {parttimeList.length > 0 &&
              parttimeList.map((item) => (
                <div
                  style={{ fontWeight: "600" }}
                  onClick={() => {
                    dispatch(payslipAction.saveId(item._id, "part-time"));
                  }}
                >
                  {item.employeeId.name}
                </div>
              ))}
          </div>
          <div className="d-flex flex-column align-items-center part m-4">
            <div style={{ fontSize: "30px", fontWeight: "600" }}>Full-time</div>

            {fulltimeList.length > 0 &&
              fulltimeList.map((item) => (
                <div
                  style={{ fontWeight: "600" }}
                  onClick={() => {
                    dispatch(payslipAction.saveId(item._id, "full-time"));
                  }}
                >
                  {item.employeeId.name}
                </div>
              ))}
          </div>
        </div>
      </div>
      {employeeType && employeeType === "full-time" ? (
        <DailyPayslipFulltime />
      ) : (
        ""
      )}
      {employeeType && employeeType === "part-time" ? (
        <DailyPayslipParttime />
      ) : (
        ""
      )}
    </div>
  );
};

export default EmployeeList;
