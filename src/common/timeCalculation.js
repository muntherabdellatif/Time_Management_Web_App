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
    weekDayNum: time.getDay(),
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

export const sortTime = (times) => {
  let sortedDate = times.sort(function (a, b) {
    if (
      splitTime(a.startDate).year > splitTime(b.startDate).year ||
      (splitTime(a.startDate).year === splitTime(b.startDate).year &&
        splitTime(a.startDate).month > splitTime(b.startDate).month) ||
      (splitTime(a.startDate).year === splitTime(b.startDate).year &&
        splitTime(a.startDate).month === splitTime(b.startDate).month &&
        splitTime(a.startDate).dayDate > splitTime(b.startDate).dayDate)
    ) {
      return 1;
    } else if (
      splitTime(a.startDate).year === splitTime(b.startDate).year &&
      splitTime(a.startDate).month === splitTime(b.startDate).month &&
      splitTime(a.startDate).dayDate === splitTime(b.startDate).dayDate
    ) {
      return 0;
    } else {
      return -1;
    }
  });
  return sortedDate;
};

export const makeDaysArray = (times) => {
  let sortedTime = sortTime(times);
  let DaysArray = [[]];
  let daysCounter = 0;
  DaysArray[daysCounter].push(sortedTime[0]);
  for (let i = 1; i < sortedTime.length; i++) {
    if (
      splitTime(sortedTime[i].startDate).dayDate ===
      splitTime(sortedTime[i - 1].startDate).dayDate
    ) {
      DaysArray[daysCounter].push(sortedTime[i]);
    } else {
      daysCounter++;
      DaysArray.push([]);
      DaysArray[daysCounter].push(sortedTime[i]);
    }
  }
  return DaysArray;
};

export const makeWeeksArray = (times) => {
  let sortedTime = sortTime(times);
  let WeeksArray = [[]];
  let WeeksCounter = 0;
  WeeksArray[WeeksCounter].push(sortedTime[0]);
  for (let i = 1; i < sortedTime.length; i++) {
    const date1 = sortedTime[i - 1].startDate;
    const date2 = sortedTime[i].startDate;
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    let diffWeek = splitTime(date2).weekDayNum - splitTime(date1).weekDayNum;
    if (diffWeek >= 0 && ((diffWeek === diffDays) || (diffWeek === diffDays + 1))) {
      WeeksArray[WeeksCounter].push(sortedTime[i]);
    } else {
      WeeksCounter++;
      WeeksArray.push([]);
      WeeksArray[WeeksCounter].push(sortedTime[i]);
    }
  }
  return WeeksArray;
};

export const makeMonthsArray = (times) => {
  let sortedTime = sortTime(times);
  let monthsArray = [[]];
  let monthsCounter = 0;
  monthsArray[monthsCounter].push(sortedTime[0]);
  for (let i = 1; i < sortedTime.length; i++) {
    const date1Month = splitTime(sortedTime[i - 1].startDate).month;
    const date2Month = splitTime(sortedTime[i].startDate).month;
    const date1Year = splitTime(sortedTime[i - 1].startDate).year;
    const date2Year = splitTime(sortedTime[i].startDate).year;
    if (date1Month === date2Month && date1Year === date2Year) {
      monthsArray[monthsCounter].push(sortedTime[i]);
    } else {
      monthsCounter++;
      monthsArray.push([]);
      monthsArray[monthsCounter].push(sortedTime[i]);
    }
  }
  return monthsArray;
};
