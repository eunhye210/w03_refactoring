import Header from "../Header";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Layout({ setCalendarType }) {
  const navigate = useNavigate();

  function showDailyOrWeekly(e) {
    if (e.target.value === "daily") {
      setCalendarType("daily");
      navigate("/calendar/daily");
    } else {
      setCalendarType("weekly");
      navigate("/calendar/weekly");
    }
  }

  return (
    <div>
      <Header showDailyOrWeekly={showDailyOrWeekly} />
      <Outlet />
    </div>
  );
}
