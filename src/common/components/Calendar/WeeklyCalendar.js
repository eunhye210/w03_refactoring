import React from "react";
import DayContent from "../CalendarContents/DayContent";
import TimeContent from "../CalendarContents/TimeContent";
import EventContent from "../CalendarContents/EventContent";
import { useDispatch, useSelector } from "react-redux";
import { showNextWeek, showPrevWeek } from "../../../store/slices/calendarSlice";
import { getWeeklyDateAndKey } from "../../utils/getWeeklyDateAndKey";
import { Container } from "../StyledComponent";

function WeeklyCalendar() {
  const dispatch = useDispatch();
  const { currentDate } = useSelector(state => state.calendar);
  const [ weeklyKeyArr, weeklyDateArr ] = getWeeklyDateAndKey(currentDate);

  return (
    <Container>
      <div className="display">
        <div className="side-box"></div>
        <button className="button" onClick={() => dispatch(showPrevWeek())}>
          {"<"}
        </button>
        <div className="day-box">
          {weeklyDateArr.map((item) => {
            return <DayContent key={item} currentDate={item} />
          })}
        </div>
        <button className="button" onClick={() => dispatch(showNextWeek())}>
          {">"}
        </button>
      </div>
      {Array.from(Array(24).keys()).map((hour) => {
        return (
          <div className="display" key={"div" + hour}>
            <TimeContent
              key={"time" + hour}
              time={hour < 12 ? `오전 ${hour}시` : `오후 ${hour}시`}
            />
            {Array.from(Array(7).keys()).map((index) =>
              <EventContent
                key={"event" + index}
                dateKey={weeklyKeyArr[index]}
                hour={hour}
              />
            )}
            <div className="space-2"></div>
          </div>
        );
      })}
    </Container>
  );
}

export default WeeklyCalendar;
