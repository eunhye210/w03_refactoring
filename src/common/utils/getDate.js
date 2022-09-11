export function getDate(dateString) {
  const dateObj = new Date(dateString);
  const year = dateObj.getFullYear();
  const month = dateObj.getMonth() + 1;
  const date = dateObj.getDate();
  const day = dateObj.getDay();

  return { year, month, date, day };
}
