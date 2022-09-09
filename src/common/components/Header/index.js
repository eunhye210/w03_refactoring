import React from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { FcTodoList } from "react-icons/fc";
import { getDate } from "../../utils";

export default function Header({ showDailyOrWeekly }) {
  let location = useLocation();
  const navigate = useNavigate();
  const { currentDate } = useSelector(state => state.calendar);
  const { year, month } = getDate(currentDate);

  return (
    <Container>
      <div className="display">
        <div className="year-month">
          <div className="text">{"[ " + year + "년 " + month + "월 ]"}</div>
        </div>
        <div className="show">
          <div className="select-option">
            <select id="daily-weekly-type" className="select" onChange={showDailyOrWeekly}>
              <option value="daily">Daily</option>
              <option value="weekly">weekly</option>
            </select>
          </div>
          <Link to={"../events/new"} state={{ backgroundLocation: location }}>
            <FcTodoList className="button"/>
          </Link>
        </div>
      </div>
    </Container>
  );
}


const Container = styled.header`
  background-color: #f5f5f5;
  height: 70px;
  border-bottom: 1px solid;
  border-color: lightgray;
  .display {
    display: flex;
    justify-content: space-between;
  }
  .show {
    display: flex;
  }
  .year-month {
    margin-left: 70px;
    line-height: 70px;
  }
  .text {
    color: #B378D3;
    font-size: 35px
  }
  .select-option {
    margin-right: 20px;
    line-height: 70px;
    .select {
      height: 35px;
      width: 80px;
    }
  }
  .button {
    margin-right: 30px;
    background: none;
    border: none;
    font-size: 30px;
    margin-top: 18px;
  }
`
