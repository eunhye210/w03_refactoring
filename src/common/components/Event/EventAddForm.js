import { FiX } from "react-icons/fi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addSchedule, deletePrevSchedule } from "../../../store/slices/scheduleSlice";
import { setEventId } from "../../../store/slices/modeSlice";
import { Container } from "./EventStyledComponent";

export default function EventAddForm() {
  const { schedule } = useSelector(state => state.schedule);
  const { calendarType, eventId } = useSelector(state => state.mode);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [date, time] = eventId?.split("&");
  const { title, description, startTime, endTime } = eventId
    ? schedule[date][time]
    : { title: null, description: null, startTime: null, endTime: null };

  const [eventTitle, setEventTitle] = useState(title);
  const [eventDescription, setEventDescription] = useState(description);
  const [eventDate, setEventDate] = useState(date);
  const [eventStartTime, setEventStartTime] = useState(startTime);
  const [eventEndTime, setEventEndTime] = useState(endTime);

  function onSubmit() {
    if (!eventTitle || !eventDescription || !eventDate || !eventStartTime || !eventEndTime) {
      alert("모든 항목을 채워야 합니다.");
      dispatch(setEventId({ id: "" }));
      return;
    }

    if (eventStartTime >= eventEndTime) {
      alert("최소 한 시간 이상 선택해야 합니다.");
      dispatch(setEventId({ id: "" }));
      return;
    }

    dispatch(deletePrevSchedule({ date, startTime, endTime }));

    const newEventDateObj = schedule[eventDate];
    if (newEventDateObj) {
      for (let time = eventStartTime; time < eventEndTime; time++) {
        if (newEventDateObj.hasOwnProperty(time)) {
          alert("이미 추가된 일정이 있습니다.");
          dispatch(setEventId({ id: "" }));
          return;
        }
      }
    }

    dispatch(addSchedule({ eventDate, eventStartTime, eventEndTime, eventTitle, eventDescription }));
    dispatch(setEventId({ id: "" }));
    navigate(`../../calendar/${calendarType}`);
  }

  return (
    <Container>
      <button className="close-button" onClick={() => navigate(`../../calendar/${calendarType}`)}>
        <FiX />
      </button>
      <div className="content">
        <h1 className="h1">일정</h1>
        <div className="view-type1">
          <div className="display">title : </div>
          <input
            defaultValue={eventTitle}
            onChange={(e) => setEventTitle(e.target.value)}
          />
        </div>
        <div className="view-type2">
          <div>description : </div>
          <textarea
            rows="5"
            cols="40"
            defaultValue={eventDescription}
            onChange={(e) => setEventDescription(e.target.value)}
          />
        </div>
        <div className="view-type1">
          <div className="display">date : </div>
          <input
            type="date"
            id="event-date"
            defaultValue={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
          />
        </div>
        <div className="view-type1">
          <div className="display">time : </div>
          <div className="view-type1">
            <select
              defaultValue={Number(eventStartTime)}
              onChange={(e) => setEventStartTime(Number(e.target.value))}
            >
              {Array.from(Array(24).keys()).map((hour) =>
                <option key={hour} value={hour}>{hour + " : 00"}</option>
              )}
            </select>
            <div>~</div>
            <select
              defaultValue={Number(eventEndTime)}
              onChange={(e) => setEventEndTime(Number(e.target.value))}
            >
              {Array.from(Array(24).keys()).map((hour) =>
                <option key={hour} value={hour}>{hour + " : 00"}</option>
              )}
            </select>
          </div>
        </div>
        <button className="submit-button1" onClick={onSubmit}>submit</button>
      </div>
    </Container>
  );
}
