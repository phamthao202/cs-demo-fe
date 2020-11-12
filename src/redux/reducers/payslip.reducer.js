import * as types from "redux/constants/payslip.constant";
const initialState = {
  loading: false,
  error: "",
  selectedDate: null,
  targetStaffId: null,
  staffType: null,
  payslip: null,
};
const payslipReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.SAVE_DATE:
      return { ...state, selectedDate: payload };
    case types.SAVE_ID:
      return { ...state, targetStaffId: payload[0], staffType: payload[1] };
    case types.GET_PAYSLIP_REQUEST:
    case types.CREATE_PAYSLIP_REQUEST:
      return { ...state, loading: true };
    case types.GET_PAYSLIP_SUCCESS:
      console.log("payslip success reducer", payload);
      return {
        ...state,
        loading: false,
        payslip: payload,
      };
    case types.CREATE_PAYSLIP_SUCCESS:
      console.log(" create payslip success reducer", payload);
      return {
        ...state,
        loading: false,
      };
    case types.GET_PAYSLIP_FAILURE:
    case types.CREATE_PAYSLIP_FAILURE:
      return { ...state, loading: false, error: payload };
    default:
      return { ...state };
  }
};
export default payslipReducer;
