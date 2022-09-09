import React from "react";
import DayContent from "../CalendarContents/DayContent";
import TimeContent from "../CalendarContents/TimeContent";
import EventContent from "../CalendarContents/EventContent";
import { useSelector, useDispatch } from "react-redux";
import { SHOW_NEXT_DAY, SHOW_PREV_DAY } from "../../../../features/calendar/types";
import { Outlet } from "react-router-dom";
import { Container } from "../../StyledComponent";
import { getDate } from "../../../utils";

function DailyCalendar({ setEventInfoModalId }) {
  const dispatch = useDispatch();
  const { currentDate } = useSelector(state => state.calendar);
  const { year, month, date } = getDate(currentDate);

  const dateKey = `${year}-${month > 10 ? month : "0" + month}-${date > 10 ? date : "0" + date}`;

  function showPrevDay() {
    const dateObj = new Date(currentDate);
    const newDate = new Date(dateObj.setDate(date - 1));
    dispatch({ type: SHOW_NEXT_DAY, value: newDate.toString() });
  }

  function showNextDay() {
    const dateObj = new Date(currentDate);
    const newDate = new Date(dateObj.setDate(date + 1));
    dispatch({ type: SHOW_PREV_DAY, value: newDate.toString() });
  }

  return (
    <Container>
      <div className="display">
        <div className="side-box"></div>
        <button className="button" onClick={showPrevDay}>
          {"<"}
        </button>
        <DayContent currentDate={currentDate} />
        <button className="button" onClick={showNextDay}>
          {">"}
        </button>
      </div>
      {Array.from(Array(24).keys()).map((hour) => {
        return (
          <div className="display" key={"div" + hour}>
            <TimeContent
              key={"time" + hour}
              time={hour < 12 ? `오전 ${hour}시` : `오후 ${hour}시` }
            />
            <EventContent
              key={"event" + hour}
              dateKey={dateKey}
              hour={hour}
              setEventInfoModalId={setEventInfoModalId}
            />
            <div className="space-1"></div>
          </div>
        );
      })}
    </Container>
  );
}

export default DailyCalendar;
