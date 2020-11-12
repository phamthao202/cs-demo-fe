import * as types from "redux/constants/menu.constant";
import api from "redux/api";
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
// const updateMenu = (blogId, title, pictureUrl, price,category redirectTo="__GO_BACK__") => async (dispatch) => {
//   dispatch({ type: types.UPDATE_MENU_REQUEST, payload: null });
//   try {
//     const res = await api.put(`/blogs/${blogId}`, { title, content, images });
//     dispatch({
//       type: types.UPDATE_MENU_SUCCESS,
//       payload: res.data.data,
//     });
//     // dispatch(routeActions.redirect(redirectTo));
//     toast.success("Menu has been updated!");
//   } catch (error) {
//     console.log(error);
//     dispatch({ type: types.UPDATE_MENU_FAILURE, payload: error });
//   }
// };

const getMenuByTitle = (title) => async (dispatch) => {
  dispatch({ type: types.GET_MENUBYTITLE_REQUEST, payload: null });
  console.log(title);
  try {
    const res = await api.get(`/menu/${title}`);

    dispatch({
      type: types.GET_MENUBYTITLE_SUCCESS,
      payload: res.data.data,
    });
    console.log("1 menu by title", res.data.data);
  } catch (error) {
    dispatch({ type: types.GET_MENUBYTITLE_FAILURE, payload: error });
  }
};
const deleteMenu = (title, redirectTo = "__GO_BACK__") => async (dispatch) => {
  dispatch({ type: types.DELETE_MENU_REQUEST, payload: null });
  try {
    const res = await api.delete(`/blogs/${title}`);
    dispatch({
      type: types.DELETE_MENU_SUCCESS,
      payload: res.data,
    });
    // dispatch(routeActions.redirect(redirectTo));
    toast.success("Menu has been deleted!");
  } catch (error) {
    console.log(error);
    dispatch({ type: types.DELETE_MENU_FAILURE, payload: error });
  }
};
export const menuAction = {
  createNewMenu,
  getMenuByTitle,
};
