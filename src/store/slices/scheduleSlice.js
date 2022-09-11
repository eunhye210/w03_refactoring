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
      const { key, value } = action.payload;
      // state.schedule[key] = value;
    },
    deleteSchedule(state, action) {

    },
  }
});

export const { addSchedule, deleteSchedule } = scheduleSlice.actions;
export default scheduleSlice.reducer;