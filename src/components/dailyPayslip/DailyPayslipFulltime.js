import React from "react";
import "./DailyPayslip.css";
import DatePickerCalendarWithInput from "components/datePicker/DatePicker";
const DailyPayslipFulltime = () => {
  return (
    <div className="payslip-wrap">
      <div className="staff-information-wrap">
        <div style={{ fontSize: "30px", margin: "30px" }}>
          Staff information
        </div>
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
        <div style={{ fontSize: "30px", margin: "20px" }}>Choose a date</div>
        <div className="datePicker">
          <DatePickerCalendarWithInput />
        </div>
      </div>
      <div className="full-time">
        <div style={{ fontSize: "30px", margin: "20px" }}>Full-time</div>
        <div>(Unit: 1.000 VND)</div>
        <div className="full-time-item-wrap">
          <div className="full-time-item">
            <div className="item">Salary per month</div>
            <input
              style={{ width: "150px" }}
              placeholder="Full-time staff only"
            ></input>
          </div>
          <div className="full-time-item">
            <div className="item">Working days per month</div>
            <input
              style={{ width: "150px" }}
              placeholder="Full-time staff only"
            ></input>
          </div>
          <div className="full-time-item">
            <div className="item">Working hours per day</div>
            <input
              style={{ width: "150px" }}
              placeholder="Full-time staff only"
            ></input>
          </div>
        </div>
      </div>

      <div className="d-flex flex-wrap justify-content-center">
        <div className="full-part-time m-3 ">
          <div style={{ fontSize: "30px", margin: "20px" }}>
            Details
          </div>
          <div>(Unit: 1.000VND)</div>
          <div className="full-part-time-item">
            <div style={{ width: "150px", margin: "5px" }}></div>
            <div style={{ width: "80px", margin: "5px" }}>Shift 1</div>
            <div style={{ width: "80px", margin: "5px" }}> Shift 2</div>
          </div>
          <div className="full-part-time-item">
            <div style={{ width: "150px", margin: "5px" }}>Salary per hour</div>
            <input style={{ width: "80px", margin: "5px" }}></input>
            <input style={{ width: "80px", margin: "5px" }}></input>
          </div>
          <div className="full-part-time-item">
            <div style={{ width: "150px", margin: "5px" }}>Working hours</div>
            <input style={{ width: "80px", margin: "5px" }}></input>
            <input style={{ width: "80px", margin: "5px" }}></input>
          </div>
          <div className="full-part-time-item">
            <div style={{ width: "150px", margin: "5px" }}>Missed Hours</div>
            <input style={{ width: "80px", margin: "5px" }}></input>
            <input style={{ width: "80px", margin: "5px" }}></input>
          </div>
          <div className="full-part-time-item">
            <div style={{ width: "150px", margin: "5px" }}>Over time</div>
            <input style={{ width: "80px", margin: "5px" }}></input>
            <input style={{ width: "80px", margin: "5px" }}></input>
          </div>
        </div>
        <div>
          {" "}
          <div className="full-part-time m-3">
            <div style={{ fontSize: "30px", margin: "20px" }}>
              Allowance and Bonus
            </div>
            <div>(Unit: 1.000VND)</div>
            <div className="full-part-time-item">
              <div style={{ width: "100px", margin: "5px" }}></div>
              <div style={{ width: "130px", margin: "5px" }}>Type</div>
              <div style={{ width: "80px", margin: "5px" }}> Amount</div>
            </div>
            <div className="full-part-time-item">
              <div style={{ width: "100px", margin: "5px" }}>Allowance</div>

              <select
                name="allowance"
                style={{ width: "130px", margin: "5px" }}
              >
                <option value="">---</option>
                <option value="meal">Meal</option>
                <option value="parking">Parking</option>
              </select>

              <input style={{ width: "80px", margin: "5px" }}></input>
            </div>
            <div className="full-part-time-item">
              <div style={{ width: "100px", margin: "5px" }}></div>
              <select
                name="allowance"
                style={{ width: "130px", margin: "5px" }}
              >
                <option value="">---</option>
                <option value="meal">Meal</option>
                <option value="parking">Parking</option>
              </select>
              <input style={{ width: "80px", margin: "5px" }}></input>
            </div>
            <div className="full-part-time-item">
              <div style={{ width: "100px", margin: "5px" }}>Bonus</div>
              <select name="bonus" style={{ width: "130px", margin: "5px" }}>
                <option value="">---</option>
                <option value="sale">Sale bonus</option>
                <option value="special_bonus">Special</option>
              </select>
              <input style={{ width: "80px", margin: "5px" }}></input>
            </div>
            <div className="full-part-time-item">
              <div style={{ width: "100px", margin: "5px" }}></div>
              <select name="bonus" style={{ width: "130px", margin: "5px" }}>
                <option value="">---</option>
                <option value="sale">Sale bonus</option>
                <option value="special_bonus">Special</option>
              </select>
              <input style={{ width: "80px", margin: "5px" }}></input>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center my-4">
        <button
          style={{
            padding: "10px 30px",
            borderRadius: "10px",
            background:
              "linear-gradient(to right, rgb(201, 214, 255), rgb(226, 226, 226))",
          }}
        >
          Submit salary
        </button>
      </div>
      <div className="d-flex justify-center flex-column align-items-center">
        <div className="d-flex mt-4">
          <div
            style={{ width: "150px", fontWeight: "900", marginRight: "5px" }}
          >
            Daily salary
          </div>
          <input style={{ width: "200px" }}></input>
        </div>
        <div className="d-flex m-4">
          <div
            style={{ width: "150px", fontWeight: "900", marginRight: "5px" }}
          >
            Up-to-date salary
          </div>
          <input style={{ width: "200px" }}></input>
        </div>
      </div>
    </div>
  );
};

export default DailyPayslipFulltime;
