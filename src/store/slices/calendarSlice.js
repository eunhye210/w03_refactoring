import { createSlice } from "@reduxjs/toolkit";

const today = new Date();
const initialState = {
  currentDate: today.toString(),
};

const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    showDay(state, action) {
      const { year, month, date } = action.payload;
      const newDate = new Date(year, month - 1, date);
      state.currentDate = newDate.toString();
    },
    showNextDay(state) {
      const dateObj = new Date(state.currentDate);
      const date = dateObj.getDate();
      const newDate = new Date(dateObj.setDate(date + 1));
      state.currentDate = newDate.toString();
    },
    showPrevDay(state) {
      const dateObj = new Date(state.currentDate);
      const date = dateObj.getDate();
      const newDate = new Date(dateObj.setDate(date - 1));
      state.currentDate = newDate.toString();
    },
    showNextWeek(state) {
      const dateObj = new Date(state.currentDate);
      const date = dateObj.getDate();
      const newDate = new Date(dateObj.setDate(date + 7));
      state.currentDate = newDate.toString();
    },
    showPrevWeek(state) {
      const dateObj = new Date(state.currentDate);
      const date = dateObj.getDate();
      const newDate = new Date(dateObj.setDate(date - 7));
      state.currentDate = newDate.toString();
    },
  },
});

export const { showDay, showNextDay, showPrevDay, showNextWeek, showPrevWeek } = calendarSlice.actions;
export default calendarSlice.reducer;
