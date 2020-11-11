import { combineReducers } from "redux";
import categoryReducer from "./category.reducer";
import authReducer from "./auth.reducer";

import routeReducer from "./route.reducer";
import employeeReducer from "./employee.reducer";
// import userReducer from "./user.reducer";

export default combineReducers({
  auth: authReducer,
  //   blog: blogReducer,
  route: routeReducer,
  employee: employeeReducer,
  cate: categoryReducer,
});
