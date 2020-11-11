import React, { useState } from "react";
import { format } from "date-fns";
import { enGB } from "date-fns/locale";
import { DatePickerCalendar, useDateInput } from "react-nice-dates";
import "react-nice-dates/build/style.css";
const DatePickerCalendarWithInput = () => {
  const [date, setDate] = useState();
  const inputProps = useDateInput({
    date,
    format: "yyyy-MM-dd",
    locale: enGB,
    onDateChange: setDate,
  });
  return (
    <div>
      <div className="d-flex  align-items-center flex-column">
        <p>
          The selected date is{" "}
          {date && format(date, "dd MMM yyyy", { locale: enGB })}
        </p>
        <input className="input text-center " {...inputProps} />
      </div>
      <div style={{ width: "350px" }}>
        <DatePickerCalendar date={date} onDateChange={setDate} locale={enGB} />
      </div>
    </div>
  );
};
export default DatePickerCalendarWithInput;
