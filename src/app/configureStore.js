import { combineReducers, legacy_createStore as createStore } from "redux";
import calendar from "../features/calendar";
import schedule from "../features/schedule";

const reducer = combineReducers({
  calendar,
  schedule,
});

const store = createStore(reducer);

export default store;
