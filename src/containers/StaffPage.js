import React from "react";
import PublicNavbar from "containers/PuclicNavbar";
import DatePickerCalendarWithInput from "components/datePicker/DatePicker";

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


      <div className="staff-information-wrap">
        <div style={{ fontSize: "30px", marginTop: "130px" }}>
          Hi, Le Khanh Linh
        </div>
        <div className="staff-information-card">
          <div className="staff-information">
            <div className="staff-information-left">Name :</div>
            <div className="staff-information-right">Le Khanh Linh</div>
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

      <div className="staff-information-wrap">
        <div style={{ fontSize: "30px", margin: "30px" }}>
          Your Up-To-Date salary is
        </div>
        <div className="staff-information-card">
          <div className="staff-information">
            <div className="staff-information-left">Up to date salary :</div>
            <div className="staff-information-right">7.235.000 VND</div>
          </div>
          <div className="staff-information">
            <div className="staff-information-left">From :</div>
            <div className="staff-information-right">01-11-2020</div>
          </div>
          <div className="staff-information">
            <div className="staff-information-left">To:</div>
            <div className="staff-information-right">13-11-2020</div>
          </div>
        </div>
      </div>

      <div className="staff-information-wrap">
        <div style={{ fontSize: "30px", margin: "30px" }}>
           Salary details in this month
        </div>
        <div className="staff-information-card">
          <div className="staff-information">
            <div className="staff-information-left">Total working hours :</div>
            <div className="staff-information-right">45 hours</div>
          </div>
          <div className="staff-information">
            <div className="staff-information-left">Total OT </div>
            <div className="staff-information-right"> 6 hours</div>
          </div>
          <div className="staff-information">
            <div className="staff-information-left">Total late arrival</div>
            <div className="staff-information-right">0.5 hour</div>
          </div>
          <div className="staff-information">
            <div className="staff-information-left">Total bonus:</div>
            <div className="staff-information-right">500.000 VND</div>
          </div>
          <div className="staff-information">
            <div className="staff-information-left">Total allowance:</div>
            <div className="staff-information-right">1.000.000 VND</div>
          </div>
        </div>
      </div>

      <div className="staff-information-wrap">
        <div style={{ fontSize: "30px", margin: "30px" }}>
           Salary details in this month
        </div>
        <div className="">
          <DatePickerCalendarWithInput/>
        </div>
      </div>



        <div className="staff-page-payslip-wrap d-flex justify-content-center ">
          <div
            className="staff-page-payslip"
            style={{ border: "1px solid red", maxWidth: "500px", margin:"50px" }}
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
        <div className="staff-information-wrap">
        <div style={{ fontSize: "30px", margin: "30px" }}>
        Salary History in year 2020
        </div>
        <div className="staff-information-card">
          <div className="staff-information">
            <div className="staff-information-left">January  </div>
            <div className="staff-information-right">7.235.000 VND</div>
          </div>
          <div className="staff-information">
            <div className="staff-information-left">February  </div>
            <div className="staff-information-right">11.235.000 VND</div>
          </div>
          <div className="staff-information">
            <div className="staff-information-left">March  </div>
            <div className="staff-information-right">5.345.000 VND</div>
          </div>
          <div className="staff-information">
            <div className="staff-information-left">April </div>
            <div className="staff-information-right">2.225.000 VND</div>
          </div>
          <div className="staff-information">
            <div className="staff-information-left">May </div>
            <div className="staff-information-right">3.235.000 VND</div>
          </div>
          <div className="staff-information">
            <div className="staff-information-left">June  </div>
            <div className="staff-information-right">7.235.000 VND</div>
          </div>
          <div className="staff-information">
            <div className="staff-information-left">July  </div>
            <div className="staff-information-right">8.225.000 VND</div>
          </div>
          <div className="staff-information">
            <div className="staff-information-left">August  </div>
            <div className="staff-information-right">9.295.000 VND</div>
          </div>
          <div className="staff-information">
            <div className="staff-information-left">September  </div>
            <div className="staff-information-right">11.235.000 VND</div>
          </div>
          <div className="staff-information">
            <div className="staff-information-left">October  </div>
            <div className="staff-information-right">10.235.000 VND</div>
          </div>
          <div className="staff-information">
            <div className="staff-information-left">November  </div>
            <div className="staff-information-right">6.205.000 VND</div>
          </div>

          
        </div>
      </div>
        <div className="staff-page-salary-history"></div>
      </div>
    </div>
  );
};

export default StaffPage;
