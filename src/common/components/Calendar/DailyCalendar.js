import React from "react";
import DayContent from "../CalendarContents/DayContent";
import TimeContent from "../CalendarContents/TimeContent";
import EventContent from "../CalendarContents/EventContent";
import { useSelector, useDispatch } from "react-redux";
import { showNextDay, showPrevDay } from "../../../store/slices/calendarSlice";
import { Container } from "../StyledComponent";
import { getDate } from "../../utils/getDate";
import { getDateKey } from "../../utils/getDateKey";

function DailyCalendar() {
  const dispatch = useDispatch();
  const { currentDate } = useSelector(state => state.calendar);
  const { year, month, date } = getDate(currentDate);
  const dateKey = getDateKey(year, month, date);

  return (
    <Container>
      <div className="display">
        <div className="side-box"></div>
        <button className="button" onClick={() => dispatch(showPrevDay())}>
          {"<"}
        </button>
        <DayContent currentDate={currentDate} />
        <button className="button" onClick={() => dispatch(showNextDay())}>
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
            />
            <div className="space-1"></div>
          </div>
        );
      })}
    </Container>
  );
}

export default DailyCalendar;
