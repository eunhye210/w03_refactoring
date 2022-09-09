import {
  SHOW_DAY,
  SHOW_NEXT_DAY,
  SHOW_PREV_DAY,
  SHOW_NEXT_WEEK,
  SHOW_PREV_WEEK,
} from "./types";

export function showDay() {
  return { type: SHOW_DAY };
}

export function showNextDay() {
  return { type: SHOW_NEXT_DAY };
}

export function showPrevDay() {
  return { type: SHOW_PREV_DAY };
}

export function showNextWeek() {
  return { type: SHOW_NEXT_WEEK };
}

export function showPrevWeek() {
  return { type: SHOW_PREV_WEEK };
}
