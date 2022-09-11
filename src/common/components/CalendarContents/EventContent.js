import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { setEventId } from "../../../store/slices/modeSlice";

export default function EventContent({ dateKey, hour }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const { schedule } = useSelector(state => state.schedule);
  const id = dateKey + "&" + hour;

  let title = "";
  let startTime = "";
  let color = "white";
  if (schedule.hasOwnProperty(dateKey)) {
    const todoObj = schedule[dateKey];

    for (const [key, value] of Object.entries(todoObj)) {
      if (key === String(hour)) {
        color =  "lavender";
        title = value.title;
        startTime = value.startTime;
      }
    }
  }

  function showEventInfoModal() {
    if (color === "lavender") {
      dispatch(setEventId({ id: id }));
      navigate(`../../events/${id}`, { state: { backgroundLocation: location }});
    } else {
      alert('일정이 존재하지 않습니다.');
    }
  }

  return (
    <Content id={id} color={color} onClick={showEventInfoModal}>
      {Number(startTime) === hour ? title : ""}
    </Content>
  );
}


const Content = styled.div`
  display: inline-block;
  width: 100%;
  height: auto;
  border-top: 1px solid;
  border-right: 1px solid;
  border-color: lightgray;
  background-color: ${props => props.color};
`