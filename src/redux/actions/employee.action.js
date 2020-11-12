import * as types from "redux/constants/employee.constants";
import api from "redux/api";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const getEmployeeList = () => async (dispatch) => {
  dispatch({ type: types.GET_EMPLOYEELIST_REQUEST, payload: null });

  try {
    const res = await api.get(`/employee`);

    dispatch({
      type: types.GET_EMPLOYEELIST_SUCCESS,
      payload: res.data.data,
    });
    // console.log("list employee ne", res.data.data);
  } catch (error) {
    dispatch({ type: types.GET_EMPLOYEELIST_FAILURE, payload: error });
  }
};
const getUserByEmail = (email) => async (dispatch) => {
  dispatch({ type: types.GET_USERBYEMAIL_REQUEST, payload: null });

  try {
    const res = await api.get(`/users/${email}`);

    dispatch({
      type: types.GET_USERBYEMAIL_SUCCESS,
      payload: res.data.data,
    });
    // console.log("1 employee ne", res.data.data);
  } catch (error) {
    dispatch({ type: types.GET_USERBYEMAIL_FAILURE, payload: error });
  }
};
const editUserById = (obj) => async (dispatch) => {
  dispatch({ type: types.EDIT_EMPLOYEE_REQUEST, payload: null });

  try {
    let newObj = {};
    for (const [key, value] of Object.entries(obj)) {
      if (value) newObj[key] = value;
    }
    // console.log("fggffg", newObj);
    const res = await api.patch(`/users`, newObj);
    dispatch({
      type: types.EDIT_EMPLOYEE_SUCCESS,
      payload: res,
    });
    toast.success("User Information has been updated!");
    // console.log("targetEditUser la", res);
  } catch (error) {
    dispatch({ type: types.EDIT_EMPLOYEE_FAILURE, payload: error });
  }
};


export const employeeAction = {
  getEmployeeList,
  getUserByEmail,
  editUserById,
};
