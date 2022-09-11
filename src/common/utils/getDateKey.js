export function getDateKey(year, month, date) {
  return `${year}-${month > 10 ? month : "0" + month}-${date > 10 ? date : "0" + date}`;
}
