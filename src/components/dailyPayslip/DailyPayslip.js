import React from "react";
import "./DailyPayslip.css";
import DatePickerCalendarWithInput from "components/datePicker/DatePicker";
const DailyPayslip = () => {
  return (
    <div className="payslip-wrap">
      <div className="ajfkjahfk">Day la payslip</div>
      <div className="staff-information-wrap">
        <div style={{fontSize:"30px", margin:"20px"}}>Staff information</div>
        <div className="staff-information-card">
          <div className="staff-information">
            <div className="staff-information-left">Staff name :</div>
            <div className="staff-information-right">Nguyen Van A</div>
          </div>
          <div className="staff-information">
            <div className="staff-information-left">Postition :</div>
            <div className="staff-information-right">Staff</div>
          </div>
          <div className="staff-information">
            <div className="staff-information-left">Employment type :</div>
            <div className="staff-information-right">Part-time</div>
          </div>
        </div>
      </div>
      <div className="choose-date-wrap">
        <div style={{fontSize:"30px", margin:"20px"}}>Choose a date</div>
        <div className="datePicker">
          <DatePickerCalendarWithInput />
        </div>
      </div>
      <div> 
          <div>Full-time</div>
          <div>
              <div>Salary per month</div>
              <input></input>
          </div>
          <div><div>Total working days per month</div>
              <input></input></div>
          <div><div>Total working hours per day</div>
              <input></input></div>
      </div>
      <div> Part-time and fulltime</div>
      <div> Allowance and bonus</div>
      <div> daily salary and Up-to-date salary</div>
    </div>
  );
};

export default DailyPayslip;
