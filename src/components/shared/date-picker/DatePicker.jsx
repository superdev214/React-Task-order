import { useState } from "react";
import DatePicker from "@hassanmojab/react-modern-calendar-datepicker";
// import CalenderIcon from '../../../assets/images/Calender'
import "@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css";

export default function DatePickerComponent(props) {
  const [date, setDate] = useState();

  const renderCustomInput = ({ ref }) => (
    <div>
      <input
        readOnly
        placeholder={"Choose date"}
        style={{ width: "100%" }}
        ref={ref} // necessary
        value={
          date
            ? `${new Date(
                date.year,
                date.month - 1,
                date.day
              ).toUTCString()}`.slice(0, 17)
            : ""
        }
        className="btn btn-gray btn-w-350"
      />
    </div>
  );

  const onChange = (dateValue) => {
    if (dateValue !== null && dateValue !== undefined) {
      setDate({
        day: dateValue.day,
        month: dateValue.month,
        year: dateValue.year,
      });
      props.onChange &&
        props.onChange(
          new Date(dateValue.year, dateValue.month - 1, dateValue.day)
        );
    }
  };

  let nowDate = new Date(Date.now());
  let minDate = {
    year: nowDate.getFullYear(),
    month: nowDate.getMonth() + 1,
    day: nowDate.getDate(),
  };

  return (
    <div>
      <DatePicker
        calendarPopperPosition="bottom"
        shouldHighlightWeekends
        inputClassName="form-control"
        value={date}
        minimumDate={minDate}
        onChange={(value) => onChange(value)}
        colorPrimary="#42ade2"
        renderInput={renderCustomInput}
      />
    </div>
  );
}
