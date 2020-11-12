import * as types from "redux/constants/payslip.constant";
import api from "redux/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const createPayslip = (payslip, staff_id) => async (dispatch) => {
  dispatch({ type: types.CREATE_PAYSLIP_REQUEST, payload: null });
  try {
    const res = await api.post("/payslip", { ...payslip, staff_id });
    dispatch({ type: types.CREATE_PAYSLIP_SUCCESS, payload: res.data.data });
    console.log("create payslip xong roi, payslip la", res.data);
    // const name = res.data.data.user.name;
    toast.success(`Successfully Created Staff Salary`);
  } catch (error) {
    dispatch({ type: types.CREATE_PAYSLIP_FAILURE, payload: error });
  }
};
const saveDatePayslip = (date) => async (dispatch) => {
  dispatch({ type: types.SAVE_DATE, payload: date });
};

const getPayslipByDate = (date, staff_id) => async (dispatch) => {
  dispatch({ type: types.GET_PAYSLIP_REQUEST, payload: null });
  try {
    const res = await api.get("/payslip", { date, staff_id });
    dispatch({ type: types.GET_PAYSLIP_SUCCESS, payload: res.data.data });
    console.log("get payslip ", res.data);
    // const name = res.data.data.user.name;
    toast.success(`Successfully Get Payslip By Date`);
  } catch (error) {
    dispatch({ type: types.GET_PAYSLIP_FAILURE, payload: error });
  }
};
const saveId = (staff_id, type) => async (dispatch) => {
  dispatch({ type: types.SAVE_ID, payload: [staff_id,type] });
};
export const payslipAction = {
  createPayslip,
  saveDatePayslip,
  getPayslipByDate,
  saveId,
};
