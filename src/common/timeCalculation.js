export const splitTime = () => {
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
  let currentTime = new Date();
  console.log(typeof currentTime);
  console.log(currentTime); // Mon Apr 25 2022 07:56
  console.log(currentTime.getDate()); // 25 (day date)
  console.log(weekday[currentTime.getDay()]); // Monday (week day)
  console.log(currentTime.getFullYear()); // 2022 (year)
  console.log(currentTime.getHours()); // 07 (hour)
  console.log(currentTime.getMinutes()); // 56 (min)
  console.log(month[currentTime.getMonth()]); // Apr (month)
};
