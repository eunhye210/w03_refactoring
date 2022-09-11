import React, { useState } from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import DailyCalendar from "../common/components/Calendar/DailyCalendar";
import WeeklyCalendar from "../common/components/Calendar/WeeklyCalendar";
import EventAddForm from "../common/components/Event/EventAddForm";
import EventDetail from "../common/components/Event/EventDetail";
import Layout from "../common/components/Calendar/Layout";


function App() {
  let location = useLocation();
  let background = location.state && location.state.backgroundLocation;

  const [calendarType, setCalendarType] = useState("daily");
  const [eventInfoModalId, setEventInfoModalId] = useState("");
  console.log(eventInfoModalId);

  return (
    <>
      <Routes location={background || location}>
        <Route path="calendar" element={<Layout setCalendarType={setCalendarType} />}>
          <Route path="daily" element={<DailyCalendar setEventInfoModalId={setEventInfoModalId} />} />
          <Route path="weekly" element={<WeeklyCalendar setEventInfoModalId={setEventInfoModalId} />} />
        </Route>
        <Route path="/" element={<Navigate to="calendar/daily" replace />} />
      </Routes>
      {background && (
        <Routes>
          <Route path="events" >
            <Route path="new" element={
              <EventAddForm
                calendarType={calendarType}
                eventInfoModalId={eventInfoModalId}
                setEventInfoModalId={setEventInfoModalId}
              />}
            />
            <Route path=":id" element={
              <EventDetail
                calendarType={calendarType}
                eventInfoModalId={eventInfoModalId}
                setEventInfoModalId={setEventInfoModalId}
              />}
            />
          </Route>
        </Routes>
      )}
    </>
  );
}

export default App;
