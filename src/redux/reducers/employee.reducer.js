import * as types from "redux/constants/employee.constants";
const initialState = {
  //   category: "",
  employeeList: [],
  loading: false,
  error: "",
  selectedEmployee: null,
  editedEmployee: null,
};
const employeeReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_EMPLOYEELIST_REQUEST:
    case types.GET_USERBYEMAIL_REQUEST:
    case types.EDIT_EMPLOYEE_REQUEST:
      return { ...state, loading: true };
    case types.GET_EMPLOYEELIST_SUCCESS:
      console.log("Employee success reducer", payload);
      return {
        ...state,
        loading: false,
        employeeList: payload.employees,
      };
    case types.GET_USERBYEMAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        selectedEmployee: payload,
        // editedEmployee: payload,
      };
    case types.EDIT_EMPLOYEE_SUCCESS:
      return {
        ...state,
        loading: false,
        editedEmployee: payload,
      };
    case types.GET_EMPLOYEELIST_FAILURE:
    case types.GET_USERBYEMAIL_FAILURE:
    case types.EDIT_EMPLOYEE_FAILURE:
      return { ...state, loading: false, error: payload };
    default:
      return { ...state };
  }
};
export default employeeReducer;
