import * as types from "redux/constants/drinkMenu.constant";
const initialState = {
  categoryDrink: "",
  menuByDrinkCategory: [],
  loading: false,
  error: "",
};
const drinkCategoryReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.SAVE_CATEGORYDRINK:
      console.log("haha");
      return { ...state, categoryDrink: payload };
    case types.GET_MENUBYDRINKCATE_REQUEST:
      return { ...state, loading: true };
    case types.GET_MENUBYDRINKCATE_SUCCESS:
      return {
        ...state,
        loading: false,
        menuByDrinkCategory: payload.menuDrinkByCategory,
      };
    case types.GET_MENUBYDRINKCATE_FAILURE:
      return { ...state, loading: false, error: payload };
    default:
      return { ...state };
  }
};
export default drinkCategoryReducer;
