import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showDay } from "../../../store/slices/calendarSlice";
import { setCalendarType } from "../../../store/slices/modeSlice";
import { getDate } from "../../utils/getDate";

export default function DayContent({ currentDate }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const weekday = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const { year, month, date, day } = getDate(currentDate);

  function moveToDailyPage() {
    dispatch(setCalendarType({ type: "daily" }));
    dispatch(showDay({year, month, date}));
    navigate("/");
  }

  return (
    <Content onClick={moveToDailyPage}>
      <div className="day">{weekday[day]}</div>
      <div className="date">{date}</div>
    </Content>
  );
}


const Content = styled.div`
  width: 100%;
  height: 60px;
  margin: 1px;
  text-align: center;
  border: solid;
  border-color: rgba(205, 169, 241);
  box-shadow: 1px 1px 3px 1px #dadce0;
  border-radius: 10px;
  display: inline-block;
  text-align: center;

  .day {
    color: #8944ce;
    font-size: 15px;
    font-weight: bold;
    line-height: 30px;
  }
  .date {
    font-size: 30px;
    color: rgba(205, 169, 241);
    line-height: 25px;
  }
`