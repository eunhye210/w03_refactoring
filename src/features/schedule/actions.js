import {
    ADD_SCHEDULE,
    DELETE_SCHEDULE,
} from "./types";

export function addSchedule() {
    return { type: ADD_SCHEDULE };
}

export function deleteSchedule() {
  return { type: DELETE_SCHEDULE };
}
