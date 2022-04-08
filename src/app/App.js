import React from "react";
import { Route, Routes } from "react-router-dom";

import Header from "../common/components/Header/Header";
import Daily from "../common/components/Calendar/Daily/Daily";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Daily />} />
        <Route path="/event" element={<div>Event</div>} />
      </Routes>
    </div>
  );
}

export default App;
