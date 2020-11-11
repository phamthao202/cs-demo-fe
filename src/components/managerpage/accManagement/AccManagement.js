import React, { useState, useEffect } from "react";
import "./AccManagement.css";
import { useSelector, useDispatch } from "react-redux";
import { menuAction, employeeAction } from "redux/actions";
const AccManagement = () => {
  const selectedEmployee = useSelector(
    (state) => state.employee.selectedEmployee
  );
  console.log("selectedEmployee", selectedEmployee);
  const [userEmail, setUserEmail] = useState("");
  const dispatch = useDispatch();
  const submitEmail = (e) => {
    e.preventDefault();
    dispatch(employeeAction.getUserByEmail(userEmail));
  };
  const submitEdit = (e) => {
    e.preventDefault();
    let newUserInformation = {
      targetId: selectedEmployee.user._id,
      newUserRole: e.target.newRole.value,
      employmentType: e.target.employmentType.value,
    };
    console.log("newUserInformation",newUserInformation)
    dispatch(employeeAction.editUserById(newUserInformation));
  };
  return (
    <div className="managerPage-menu">
      {console.log(selectedEmployee)}
      <div className="createnewmenu-title">Check user account</div>
      <form onSubmit={(e) => submitEmail(e)}>
        <div className="managerpage-menu-area ">
          <div className="managerpage-menu-item">
            <div className="managerpage-menu-title cung">User email</div>
            <div className="managerpage-menu-title-input">
              <input
                required
                name="email"
                onChange={(e) => setUserEmail(e.target.value)}
                className="managerpage-menu-input"
                placeholder="Email address"
              ></input>
            </div>
          </div>
        </div>
        <div className="createMenuButton-wrap">
          <button type="submit" className="createMenuButton">
            Check
          </button>
        </div>
      </form>

      <div className="createnewmenu-title m-5">Edit User information</div>
      <div className="accManagement-current-new">
        <div className="accManagement-currentInformation">
          <div className="accManagement-currentInformation-item mb-5">
            <div style={{ fontSize: "25px" }}>Current user information</div>
            <div className="">
              <div>Name</div>
              <input
                value={selectedEmployee ? selectedEmployee.user.name : ""}
              ></input>
            </div>
            <div className="">
              <div>Role</div>
              <input
                value={selectedEmployee ? selectedEmployee.userRole : ""}
              ></input>
            </div>
            <div className="">
              <div>Employment-type</div>
              <input
                value={selectedEmployee ? selectedEmployee.employmentType : ""}
              ></input>
            </div>
          </div>
        </div>
        <div className="accManagement-currentInformation">
          <form onSubmit={(e) => submitEdit(e)}>
            <div className="accManagement-currentInformation-item mb-5">
              <div style={{ fontSize: "25px" }}>New user information</div>

              <div>
                <div>New role</div>
                <div>
                  <select
                    style={{ width: "200px", padding: "5px" }}
                    name="newRole"
                  >
                    <option value="">---</option>
                    <option value="user">User</option>
                    <option value="staff">Staff</option>
                  </select>
                </div>
              </div>
              <div>
                <div style={{ width: "200px" }}>New employment-type</div>
                <div>
                  <select
                    name="employmentType"
                    style={{ width: "200px", padding: "5px" }}
                  >
                    <option value="">---</option>
                    <option value="full-time">Full-time</option>
                    <option value="part-time">Part-time</option>
                  </select>
                </div>
              </div>
              <div>
                <button
                  style={{
                    padding: "5px 20px",
                    margin: "15px",
                    borderRadius: "5px",
                  }}
                  type="submit"
                >
                  Submit edit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AccManagement;
