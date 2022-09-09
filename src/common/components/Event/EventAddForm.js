import { FiX } from "react-icons/fi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ADD_SCHEDULE, DELETE_SCHEDULE } from "../../../features/schedule/types";
import { Container } from "./EventStyledComponent";

export default function EventAddForm({
  calendarType,
  eventInfoModalId,
  setEventInfoModalId
}) {
  const { schedule } = useSelector(state => state.schedule);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [eventDate, eventTime] = eventInfoModalId?.split("&");
  const { title, description, startTime, endTime } = eventInfoModalId 
    ? schedule[eventDate][eventTime]
    : { title: null, description: null, startTime: null, endTime: null };

  const [title2, setTitle2] = useState(title);
  const [description2, setDescription2] = useState(description);
  const [date2, setDate2] = useState(eventDate);
  const [startTime2, setStartTime2] = useState(startTime);
  const [endTime2, setEndTime2] = useState(endTime);

  function onSubmit() {
    if (!title2 || !description2 || !date2 || !startTime2 || !endTime2) {
      alert("모든 항목을 채워야 합니다.");
      setEventInfoModalId("");
      return;
    }

    if (startTime2 >= endTime2) {
      alert("최소 한 시간 이상 선택해야 합니다.");
      setEventInfoModalId("");
      return;
    }

    const prevEventDateObj = schedule[eventDate];
    for (let time = startTime; time < endTime; time++) {
      delete prevEventDateObj[time];
    }

    dispatch({
      type: DELETE_SCHEDULE,
      deletedObj: prevEventDateObj,
      dateValue: eventDate,
    });

    const newEventDateObj = schedule[date2];
    if (newEventDateObj) {
      for (let time = startTime2; time < endTime2; time++) {
        if (newEventDateObj.hasOwnProperty(time)) {
          alert("이미 추가된 일정이 있습니다.");
          setEventInfoModalId("");
          return;
        }
      }
    }

    const editSchedule = {};
    for (let time = startTime2; time < endTime2; time++) {
      editSchedule[time] = {
        title: title2,
        description: description2,
        startTime: startTime2,
        endTime: endTime2,
      };
    }

    dispatch({
      type: ADD_SCHEDULE,
      addedObj: {
        key: date2,
        value: editSchedule,
      }
    });
    setEventInfoModalId("");
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
          <input onChange={(e) => setTitle2(e.target.value)} defaultValue={title} />
        </div>
        <div className="view-type2">
          <div>description :</div>
          <textarea rows="5" cols="40" onChange={(e) => setDescription2(e.target.value)} defaultValue={description} />
        </div>
        <div className="view-type1">
          <div className="display">date :</div>
          <input type="date" id="event-date" onChange={(e) => setDate2(e.target.value)} defaultValue={eventDate} />
        </div>
        <div className="view-type1">
          <div className="display">time :</div>
          <div className="view-type1">
            <select onChange={(e) => setStartTime2(Number(e.target.value))} defaultValue={Number(startTime)}>
              {Array.from(Array(24).keys()).map((hour) =>
                <option key={hour} value={hour}>{hour + " : 00"}</option>
              )}
            </select>
            <div>~</div>
            <select onChange={(e) => setEndTime2(Number(e.target.value))} defaultValue={Number(endTime)}>
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
