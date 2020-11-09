import * as types from "redux/constants/drinkMenu.constant";
import api from "redux/api";
const getMenuListByCategoryDrink = (categoryDrink) => async (dispatch) => {
  dispatch({ type: types.GET_MENUBYDRINKCATE_REQUEST, payload: null });

  try {
    const res = await api.get(`/menu?category=${categoryDrink}`);
    console.log("res ne", res);
    dispatch({
      type: types.GET_MENUBYDRINKCATE_SUCCESS,
      payload: res.data.data,
    });
    console.log("exp list by drink day ne", res.data.data);
  } catch (error) {
    dispatch({ type: types.GET_MENUBYDRINKCATE_FAILURE, payload: error });
  }
};
export const categoryDrinkAction = {
  getMenuListByCategoryDrink,
};
