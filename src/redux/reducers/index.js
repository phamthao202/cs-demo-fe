import { combineReducers } from "redux";
import categoryReducer from "./category.reducer";
import authReducer from "./auth.reducer";

import routeReducer from "./route.reducer";
// import userReducer from "./user.reducer";

export default combineReducers({
  auth: authReducer,
  //   blog: blogReducer,
  route: routeReducer,
  //   user: userReducer,
  cate: categoryReducer,
});
