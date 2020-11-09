import * as types from "redux/constants/auth.constants";
import api from "redux/api";
import { toast } from "react-toastify";

// export const authActions = {};

import { routeActions } from "redux/actions/route.actions";

const register = (name, email, password, avatarUrl) => async (dispatch) => {
  dispatch({ type: types.REGISTER_REQUEST, payload: null });
  try {
    const res = await api.post("/users", { name, email, password, avatarUrl });
    dispatch({ type: types.REGISTER_SUCCESS, payload: res.data.data });
    dispatch(routeActions.redirect("/login"));
    toast.success(`Thank you for your registration, ${name}!`);
  } catch (error) {
    dispatch({ type: types.REGISTER_FAILURE, payload: error });
  }
};

const loginRequest = (email, password) => async (dispatch) => {
    dispatch({ type: types.LOGIN_REQUEST, payload: null });
    try {
      const res = await api.post("/auth/login", { email, password });
      dispatch({ type: types.LOGIN_SUCCESS, payload: res.data.data });
      console.log("login xong roi, user la",res.data)
      const name = res.data.data.user.name;
      toast.success(`Welcome ${name}`);
    } catch (error) {
      dispatch({ type: types.LOGIN_FAILURE, payload: error });
    }
  };

const logout = () => (dispatch) => {
    delete api.defaults.headers.common["authorization"];
    localStorage.setItem("accessToken", "");
    dispatch({ type: types.LOGOUT, payload: null });
  };

const getCurrentUser = (accessToken) => async (dispatch) => {
  dispatch({ type: types.GET_CURRENT_USER_REQUEST, payload: null });
  if (accessToken) {
    const bearerToken = "Bearer " + accessToken;
    api.defaults.headers.common["authorization"] = bearerToken;
  }
  try {
    const res = await api.get("/users/me");
    dispatch({ type: types.GET_CURRENT_USER_SUCCESS, payload: res.data.data });
  } catch (error) {
    dispatch({ type: types.GET_CURRENT_USER_FAILURE, payload: error });
  }
};

const loginFacebookRequest = (access_token) => async (dispatch) => {
  dispatch({ type: types.LOGIN_FACEBOOK_REQUEST, payload: null });
  try {
    const res = await api.post("/auth/login/facebook", { access_token });
    const name = res.data.data.user.name;
    toast.success(`Welcome ${name}`);
    dispatch({ type: types.LOGIN_FACEBOOK_SUCCESS, payload: res.data.data });
  } catch (error) {
    dispatch({ type: types.LOGIN_FACEBOOK_FAILURE, payload: error });
  }
};
const verifyEmail = (code) => async (dispatch) => {
  console.log("hahahads")
  dispatch({ type: types.VERIFY_EMAIL_REQUEST, payload: null });
  try {
    const res = await api.post("/users/verify_email", { code });
    dispatch({ type: types.VERIFY_EMAIL_SUCCESS, payload: res.data.data });
    const name = res.data.data.user.name;
    toast.success(`Welcome, ${name}! Your email address has been verified.`);
    api.defaults.headers.common["authorization"] =
      "Bearer " + res.data.data.accessToken;
  } catch (error) {
    dispatch({ type: types.VERIFY_EMAIL_FAILURE, payload: error });
  }
};
export const authActions = {
  register,
  loginRequest,
  logout,
  getCurrentUser,
  loginFacebookRequest,
  verifyEmail,
};