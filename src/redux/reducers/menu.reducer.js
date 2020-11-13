import * as types from "redux/constants/menu.constant";
const initialState = {
  targetMenu: "",
  loading: false,
  error: "",
  editInformation:""
};
const menuReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_MENUBYTITLE_REQUEST:
        case types.UPDATE_MENU_REQUEST:
      return { ...state, loading: true };
    case types.GET_MENUBYTITLE_SUCCESS:
      console.log("menu by tittle reducer", payload);
      return {
        ...state,
        loading: false,
        targetMenu: payload.menu,
      };
      case types.UPDATE_MENU_SUCCESS:
          return {
            ...state,
            loading: false,
            editInformation: payload,
          };
    case types.GET_MENUBYTITLE_FAILURE:
        case types.UPDATE_MENU_FAILURE:
      return { ...state, loading: false, error: payload };
    default:
      return { ...state };
  }
};
export default menuReducer;
