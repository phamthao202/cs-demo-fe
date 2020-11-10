import React from "react";
import PublicNavbar from "containers/PuclicNavbar";

const data = {
  staff_id: "ref cai o tren",
  payslip: {
    date: "01/02/2020",
    salary_shift_1: 20000,
    salary_shift_2: 50000,
    monthly_salary: 0,
    working_days_per_month: 26,
    working_hours_per_day: 11,
    shift_1: 0, //thoi gian thuc te lam
    shift_2: 5,
    late_shift_1: 1,
    late_shift_2: 0,
    OT_shift_1: 0,
    OT_shift_2: 0,
    allowance: {
      meal: 20000,
      parking: 10000,
    },
    bonus: {
      sale: 50000,
      special: 100000,
    },
    daily_salary: 500000,
    monthly_salary:500000,
  },
};

const StaffPage = () => {
  return (
    <div>
      <PublicNavbar />
      <div className="staffPage-Body container">
        <div className="d-flex align-items-center flex-column this-month-salary">
          <div>This month salary is</div>
          <div>{data.payslip.daily_salary}</div>
          <div>From ... to ...</div>
        </div>
        <div className="staff-page-calendar">day la calendar cua staff ne</div>
        <div className="staff-page-payslip-wrap">
          <div
            className="staff-page-payslip"
            style={{ border: "1px solid red", maxWidth: "500px" }}
          >
            <div className="staff-page-working-time-wrap d-flex justify-content-around">
              <div className="staff-page-working-time">Working time</div>
              <div className="d-flex flex-column align-items-center">
                <div>Shift 1:</div>
                <div>(4pm-10pm)</div>
                <div>6 hours</div>
                <div>
                  {data.payslip.monthly_salary === 0
                    ? data.payslip.salary_shift_1 * data.payslip.shift_1
                    : (data.payslip.monthly_salary /
                        data.payslip.working_days_per_month /
                        11) *
                      data.payslip.shift_1}
                </div>
              </div>
              <div className="d-flex flex-column align-items-center">
                <div>Shift 2:</div>
                <div>(4pm-10pm)</div>
                <div>5 hours</div>
              </div>
            </div>
            <div className="staff-page-working-time-wrap d-flex justify-content-around">
              <div className="staff-page-working-time">OT</div>
              <div className="d-flex flex-column align-items-center">
                <div>Shift 1:</div>
                <div>(4pm-10pm)</div>
                <div>6 hours</div>
              </div>
              <div className="d-flex flex-column align-items-center">
                <div>Shift 2:</div>
                <div>(4pm-10pm)</div>
                <div>5 hours</div>
              </div>
            </div>
            <div className="staff-page-working-time-wrap d-flex justify-content-around">
              <div className="staff-page-working-time">Missed Hours</div>
              <div className="d-flex flex-column align-items-center">
                <div>Shift 1:</div>
                <div>(4pm-10pm)</div>
                <div>6 hours</div>
              </div>
              <div className="d-flex flex-column align-items-center">
                <div>Shift 2:</div>
                <div>(4pm-10pm)</div>
                <div>5 hours</div>
              </div>
            </div>
            <div className="staff-page-working-time-wrap d-flex justify-content-around">
              <div className="staff-page-working-time">Bonus</div>
              <div className="d-flex flex-column align-items-center">
                <div>High Sale</div>
                <div>50.000</div>
              </div>
              <div className="d-flex flex-column align-items-center">
                <div>Special Bonus</div>
                <div>100.000</div>
              </div>
            </div>
            <div className="staff-page-working-time-wrap d-flex justify-content-around">
              <div className="staff-page-working-time">Allowance</div>
              <div className="d-flex flex-column align-items-center">
                <div>Meal</div>
                <div>20.000 VND</div>
              </div>
              <div className="d-flex flex-column align-items-center">
                <div>Parking</div>
                <div>10.000 VND</div>
              </div>
            </div>
          </div>
        </div>
        <div className="staff-page-salary-history"></div>
      </div>
    </div>
  );
};

export default StaffPage;
