import { getDate } from "./getDate";
import { getDateKey } from "./getDateKey";

export function getWeeklyDateAndKey(dateString) {
  const weeklyKeyArr = [];
  const weeklyDateArr = [];

  let dateObj = new Date(dateString);
  let dateNum = dateObj.getDate() - dateObj.getDay();

  for (let i = 0; i < 7; i++) {
    dateObj = new Date(dateObj.setDate(dateNum));
    const { year, month, date } = getDate(dateObj);
    const dateKey = getDateKey(year, month, date);

    weeklyKeyArr.push(dateKey);
    weeklyDateArr.push(dateObj.toString());

    dateNum =  dateObj.getDate()+ 1;
  }

  return [weeklyKeyArr, weeklyDateArr];
}
