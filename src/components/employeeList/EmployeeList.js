import React, { useState, useEffect } from "react";

import "./EmployeeList.css";
import { useSelector, useDispatch } from "react-redux";
import { employeeAction } from "redux/actions";
const EmployeeList = () => {
  const dispatch = useDispatch();
  const [fulltimeList, setFulltimeList] = useState([]);
  const [parttimeList, setParttimeList] = useState([]);
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
      {console.log("frontend employee list", employeeList)}
      <div className="akhfja">Day la Employee list</div>
      <div className="d-flex w-100 justify-content-around">
        <div className="d-flex flex-column">
          <div>Part-time</div>
          {parttimeList.length > 0 &&
            parttimeList.map((item) => <div>{item.employeeId.name}</div>)}
        </div>
        <div className="d-flex flex-column">
          <div>Full-time</div>
          {fulltimeList.length > 0 &&
            fulltimeList.map((item) => <div>{item.employeeId.name}</div>)}
        </div>
      </div>
    </div>
  );
};

export default EmployeeList;
