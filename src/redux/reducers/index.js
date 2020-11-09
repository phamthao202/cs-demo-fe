import { combineReducers } from "redux";
import drinkCategoryReducer from "./drinkCategory.reducer";
import authReducer from "./auth.reducer";
// import blogReducer from "./blog.reducer";
import routeReducer from "./route.reducer";
// import userReducer from "./user.reducer";

export default combineReducers({
    auth: authReducer,
  //   blog: blogReducer,
    route: routeReducer,
  //   user: userReducer,
  cateDrink: drinkCategoryReducer,
});
