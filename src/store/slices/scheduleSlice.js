import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  schedule : {
    '2020-08-25' : {
      time: {
        title: null,
        description: null,
        startTime: null,
        endTime: null,
      }
    }
  }
};

const scheduleSlice = createSlice({
  name: "schedule",
  initialState,
  reducers: {
    addSchedule(state, action) {
      const newSchedule = {};
      const { eventDate, eventStartTime, eventEndTime, eventTitle, eventDescription } = action.payload;

      for (let time = eventStartTime; time < eventEndTime; time++) {
        newSchedule[time] = {
          title: eventTitle,
          description: eventDescription,
          startTime: eventStartTime,
          endTime: eventEndTime,
        };
      }

      state.schedule[eventDate] = newSchedule;
    },
    deletePrevSchedule(state, action) {
      const { date, startTime, endTime } = action.payload;
      const eventDateObj = state.schedule[date];

      for (let time = startTime; time < endTime; time++) {
        delete eventDateObj[time];
      }
    },
    deleteSchedule(state, action) {
      const { eventDate, eventStartTime, eventEndTime } = action.payload;
      const eventDateObj = state.schedule[eventDate];

      for (let time = eventStartTime; time < eventEndTime; time++) {
        delete eventDateObj[time];
      }
    },
  }
});

export const { addSchedule, deletePrevSchedule, deleteSchedule } = scheduleSlice.actions;
export default scheduleSlice.reducer;
