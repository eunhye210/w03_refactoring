import { FiX } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { DELETE_SCHEDULE } from "../../../features/schedule/types";
import { Container } from "./EventStyledComponent";

export default function EventDetail({
  calendarType,
  eventInfoModalId,
  setEventInfoModalId,
}) {
  const { schedule } = useSelector(state => state.schedule);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const eventInfoModalIdArr = eventInfoModalId.split("&");
  const eventDate = eventInfoModalIdArr[0];
  const eventTime = eventInfoModalIdArr[1];

  const { title, description, startTime, endTime } = schedule[eventDate][eventTime];

  function editEvent() {
    setEventInfoModalId(eventInfoModalId);
    navigate("../../events/new", { state: {backgroundLocation: `/calendar/${calendarType}` }});
  }

  function deleteEvent() {
    const eventDateObj = schedule[eventDate];
    for (let time = startTime; time < endTime; time++) {
      delete eventDateObj[time];
    }

    dispatch({
      type: DELETE_SCHEDULE,
      deletedObj: eventDateObj,
      dateValue: eventDate,
    });
    setEventInfoModalId("");
    navigate(`../../calendar/${calendarType}`);
  }

  function onClose() {
    setEventInfoModalId("");
    navigate(`../../calendar/${calendarType}`);
  }

  return (
    <Container>
      <button className="close-button" onClick={onClose}>
        <FiX />
      </button>
      <div className="content">
        <h1 className="h1-1">일정</h1>
        <div className="view-type3">
          <div className="display">title : </div>
          <div>{title}</div>
        </div>
        <div className="view-type3">
          <div>description :</div>
          <div>{description}</div>
        </div>
        <div className="view-type3">
          <div className="display">date :</div>
          <div>{eventDate}</div>
        </div>
        <div className="view-type3">
          <div className="display">time :</div>
          <div>{startTime + " : 00"}</div>
          <div>~</div>
          <div>{endTime + " : 00"}</div>
        </div>
        <div className="view-type4">
          <button className="submit-button2" onClick={editEvent}>edit</button>
          <button className="submit-button2" onClick={deleteEvent}>delete</button>
        </div>
      </div>
    </Container>
  );
}
