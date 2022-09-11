import { configureStore } from "@reduxjs/toolkit";
import calendarReducer from "./slices/calendarSlice";
import scheduleReducer from "./slices/scheduleSlice";
import modeReducer from "./slices/modeSlice";

const reducer = {
  calendar: calendarReducer,
  schedule: scheduleReducer,
  mode: modeReducer,
};

const store = configureStore({
  reducer
});

export default store;
