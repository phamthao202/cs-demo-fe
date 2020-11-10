import * as types from "redux/constants/menu.constant";
import api from "redux/api";
const getMenuListByCategory = (category) => async (dispatch) => {
  dispatch({ type: types.GET_MENUBYCATE_REQUEST, payload: null });

  try {
    console.log("nham  roi");
    const res = await api.get(`/menu?category=${category}`);
    console.log("res ne", res);
    dispatch({
      type: types.GET_MENUBYCATE_SUCCESS,
      payload: res.data.data,
    });
    console.log("list by  day ne", res.data.data);
  } catch (error) {
    dispatch({ type: types.GET_MENUBYCATE_FAILURE, payload: error });
  }
};

export const categoryAction = {
  getMenuListByCategory,
};
