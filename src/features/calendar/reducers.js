import { SHOW_DAY, SHOW_NEXT_DAY, SHOW_NEXT_WEEK, SHOW_PREV_DAY, SHOW_PREV_WEEK } from "./types";

const today = new Date();

const initialState = {
  currentDate: today.toString(),
};

export default function calendarReducer(state = initialState, action) {
  const newState = Object.assign({}, state);

  switch (action.type) {
    case SHOW_DAY:
      newState.currentDate = action.value;
      return newState;
    case SHOW_NEXT_DAY:
      newState.currentDate = action.value;
      return newState;
    case SHOW_PREV_DAY:
      newState.currentDate = action.value;
      return newState;
    case SHOW_NEXT_WEEK:
      newState.currentDate = action.value;
      return newState;
    case SHOW_PREV_WEEK:
      newState.currentDate = action.value;
      return newState;
    default:
      return newState;
  }
}
