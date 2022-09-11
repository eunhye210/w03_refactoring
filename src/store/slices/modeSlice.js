import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  calendarType: "daily",
  eventId: "",
}

const modeSlice = createSlice({
  name: "mode",
  initialState,
  reducers: {
    setCalendarType(state, action) {
      const { type } = action.payload;
      state.calendarType = type;
    },
    setEventId(state, action) {
      const { id } = action.payload;
      state.eventId = id;
    },
  },
});

export const { setCalendarType, setEventId } = modeSlice.actions;
export default modeSlice.reducer;
