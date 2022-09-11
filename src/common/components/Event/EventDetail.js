import { FiX } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteSchedule } from "../../../store/slices/scheduleSlice";
import { setEventId } from "../../../store/slices/modeSlice";
import { Container } from "./EventStyledComponent";

export default function EventDetail() {
  const { schedule } = useSelector(state => state.schedule);
  const { calendarType, eventId } = useSelector(state => state.mode);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [ eventDate, eventTime ] = eventId.split("&");
  const { title, description, startTime, endTime } = schedule[eventDate][eventTime];

  function editEvent() {
    dispatch(setEventId({ id: eventId }));
    navigate("../../events/new", { state: { backgroundLocation: `/calendar/${calendarType}` }});
  }

  function deleteEvent() {
    const eventStartTime = startTime;
    const eventEndTime = endTime;
    dispatch(deleteSchedule({ eventDate, eventStartTime, eventEndTime }));
    dispatch(setEventId({ id: "" }));
    navigate(`../../calendar/${calendarType}`);
  }

  function onClose() {
    dispatch(setEventId({ id: "" }));
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
          <div>description : </div>
          <div>{description}</div>
        </div>
        <div className="view-type3">
          <div className="display">date : </div>
          <div>{eventDate}</div>
        </div>
        <div className="view-type3">
          <div className="display">time : </div>
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
