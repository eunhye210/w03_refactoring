import { SHOW_NEXT_MONTH } from "./types";

const today = new Date();

const initialState = {
  currentDate: today,
  displayedMonth: today.getMonth(),
};

export default function calendarReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_NEXT_MONTH:
      const newState = Object.assign({}, state);

      newState.displayedMonth = state.displayedMonth + 1;

      return newState;
    default:
      return Object.assign({}, state);
  }
}
