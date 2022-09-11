import React from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import DailyCalendar from "../common/components/Calendar/DailyCalendar";
import WeeklyCalendar from "../common/components/Calendar/WeeklyCalendar";
import EventAddForm from "../common/components/Event/EventAddForm";
import EventDetail from "../common/components/Event/EventDetail";
import Layout from "../common/components/Calendar/Layout";

function App() {
  let location = useLocation();
  let background = location.state && location.state.backgroundLocation;

  return (
    <>
      <Routes location={background || location}>
        <Route path="calendar" element={<Layout />}>
          <Route path="daily" element={<DailyCalendar />} />
          <Route path="weekly" element={<WeeklyCalendar />} />
        </Route>
        <Route path="/" element={<Navigate to="calendar/daily" replace />} />
      </Routes>
      {background && (
        <Routes>
          <Route path="events">
            <Route path="new" element={<EventAddForm />} />
            <Route path=":id" element={<EventDetail />} />
          </Route>
        </Routes>
      )}
    </>
  );
}

export default App;
