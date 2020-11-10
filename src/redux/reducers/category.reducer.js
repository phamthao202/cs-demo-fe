import * as types from "redux/constants/menu.constant";
const initialState = {
  category: "",
  menuByCategory: [],
  loading: false,
  error: "",
};
const categoryReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.SAVE_CATEGORY:
      console.log("haha", payload);
      return { ...state, category: payload };

    case types.GET_MENUBYCATE_REQUEST:
      return { ...state, loading: true };
    case types.GET_MENUBYCATE_SUCCESS:
      console.log("here", payload);
      return {
        ...state,
        loading: false,
        menuByCategory: payload.menuByCategory,
      };
    case types.GET_MENUBYCATE_FAILURE:
      return { ...state, loading: false, error: payload };
    default:
      return { ...state };
  }
};
export default categoryReducer;
