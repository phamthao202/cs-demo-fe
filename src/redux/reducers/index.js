import { combineReducers } from "redux";
import categoryReducer from "./category.reducer";
import authReducer from "./auth.reducer";

import routeReducer from "./route.reducer";
import employeeReducer from "./employee.reducer";
import payslipReducer from "./payslip.reducer";
import menuReducer from "./menu.reducer";
// import userReducer from "./user.reducer";

export default combineReducers({
  auth: authReducer,
  payslip: payslipReducer,
  route: routeReducer,
  employee: employeeReducer,
  cate: categoryReducer,
  menu: menuReducer,
});
