import { ADD_SCHEDULE, DELETE_SCHEDULE } from "./types";

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

export default function scheduleReducer(state = initialState, action) {
  const newState = Object.assign({}, state);

  switch (action.type) {
    case ADD_SCHEDULE:
      const { key, value } = action.addedObj;
      newState.schedule[key] = {
        ...newState.schedule[key],
        ...value,
      };
      return newState;
    case DELETE_SCHEDULE:
      newState[action.dateValue] = action.deletedObj;
      return newState;
    default:
      return newState;
  }
}
