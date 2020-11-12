import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import { enGB } from "date-fns/locale";
import { DatePickerCalendar, useDateInput } from "react-nice-dates";
import "react-nice-dates/build/style.css";
import { types } from "react-markdown";
import { useDispatch, useSelector } from "react-redux";
import { payslipAction } from "redux/actions";

const DatePickerCalendarWithInput = () => {
  const dispatch = useDispatch();
  const [date, setDate] = useState();
  const [selectedDate, setSelectedDate] = useState();
  const inputProps = useDateInput({
    date,
    format: "yyyy-MM-dd",
    locale: enGB,
    onDateChange: setDate,
  });
  const staff = useSelector((state) => state.payslip.targetStaffId);
  useEffect(() => {
    if (date) {
      let newDate = format(date, "yyyy/MM/dd", { locale: enGB });
      dispatch(payslipAction.saveDatePayslip(newDate));
      if(staff) dispatch(payslipAction.getPayslipByDate(newDate,staff))
      console.log(newDate);
    }
  }, [date, staff]);
  return (
    <div>
      {selectedDate}
      <div className="d-flex  align-items-center flex-column">
        <p>
          The selected date is{" "}
          {date && format(date, "dd MMM yyyy", { locale: enGB })}
        </p>

        <input
          className="input text-center "
          {...inputProps}
          disabled
          //   value={inputProps.date}
        />
      </div>
      <div style={{ width: "350px" }}>
        <DatePickerCalendar date={date} onDateChange={setDate} locale={enGB} />
      </div>
    </div>
  );
};
export default DatePickerCalendarWithInput;
