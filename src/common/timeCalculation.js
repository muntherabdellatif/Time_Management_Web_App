const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const splitTime = (time) => {
  // Mon Apr 25 2022 07:56
  let splitDate = {
    weekDay: weekday[time.getDay()],
    month: month[time.getMonth()],
    dayDate: time.getDate(),
    year: time.getFullYear(),
    hour: time.getHours(),
    minute: time.getMinutes(),
  };
  return splitDate;
};

export const createDate = (month, dayDate, year, hour, minute) => {
  // December 17, 1995 03:24:00
  return new Date(`${month} ${dayDate}, ${year} ${hour}:${minute}:00`);
};
