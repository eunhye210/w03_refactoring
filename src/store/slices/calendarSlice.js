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
      state.currentDate = action.payload;
    },
    showNextDaY(state, action) {
      state.currentDate = action.payload;
    },
    showPrevDay(state, action) {
      state.currentDate = action.payload;
    },
    showNextWeek(state, action) {
      state.currentDate = action.payload;
    },
    showPrevWeek(state, action) {
      state.currentDate = action.payload;
    },
  },
});

export const { showDay, showNextDaY, showPrevDay, showNextWeek, showPrevWeek } = calendarSlice.actions;
export default calendarSlice.reducer;