import React from "react";
import DayContent from "../CalendarContents/DayContent";
import TimeContent from "../CalendarContents/TimeContent";
import EventContent from "../CalendarContents/EventContent";
import { useDispatch, useSelector } from "react-redux";
import { SHOW_NEXT_WEEK, SHOW_PREV_WEEK } from "../../../../features/calendar/types";
import { Outlet } from "react-router-dom";
import { Container } from "../../StyledComponent";

function Weekly({ setEventInfoModalId }) {
  const dispatch = useDispatch();
  const { currentDate } = useSelector(state => state.calendar);

  let dateObj = new Date(currentDate);
  let dateNum = dateObj.getDate() - dateObj.getDay();

  const dateKeyArr = [];
  const weeklyDateArr = [];
  for (let i = 0; i < 7; i++) {
    dateObj = new Date(dateObj.setDate(dateNum));

    const year = dateObj.getFullYear();
    const month = dateObj.getMonth() + 1;
    const date = dateObj.getDate();
    const dateKey = `${year}-${month > 10 ? month : "0" + month}-${date > 10 ? date : "0" + date}`;
    dateKeyArr.push(dateKey);

    weeklyDateArr.push(dateObj.toString());
    dateNum =  dateObj.getDate()+ 1;
  }

  function showPrevWeek() {
    const date = dateObj.getDate();
    const newDate = new Date(dateObj.setDate(date - 7));
    dispatch({ type: SHOW_PREV_WEEK, value: newDate.toString() });
  }

  function showNextWeek() {
    const date = dateObj.getDate();
    const newDate = new Date(dateObj.setDate(date + 7));
    dispatch({ type: SHOW_NEXT_WEEK, value: newDate.toString() });
  }

  return (
    <Container>
      <Outlet />
      <div className="display">
        <div className="side-box"></div>
        <button className="button" onClick={showPrevWeek}>
          {"<"}
        </button>
        <div className="day-box">
          {weeklyDateArr.map((item) => {
            return <DayContent key={item} currentDate={item} />
          })}
        </div>
        <button className="button" onClick={showNextWeek}>
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
                dateKey={dateKeyArr[index]}
                hour={hour}
                setEventInfoModalId={setEventInfoModalId}
              />
            )}
            <div className="space-2"></div>
          </div>
        );
      })}
    </Container>
  );
}

export default Weekly;
