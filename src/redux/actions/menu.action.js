import * as types from "redux/constants/menu.constant";
import api from "redux/api"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const createNewMenu = (menu) => async (dispatch) => {
  dispatch({ type: types.CREATE_MENU_REQUEST, payload: null });
  try {
    const res = await api.post("/menu", { ...menu });
    dispatch({ type: types.CREATE_MENU_SUCCESS, payload: res.data.data });
    console.log("create menu xong roi, menu la", res.data);
    // const name = res.data.data.user.name;
    toast.success(`Successfully Created New Dish`);
  } catch (error) {
    dispatch({ type: types.CREATE_MENU_FAILURE, payload: error });
  }
};
export const menuAction = {
  createNewMenu,
};
