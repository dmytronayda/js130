const { get } = require("http");

const getLastDate = (year, month) => {
  let firstDateNextMonth = new Date(year, month + 1, 1);
  let lastDateThisMonth = new Date(firstDateNextMonth - 1).getDate();
  return lastDateThisMonth;
};

const getRange = (year, month, when) => {
  switch(when) {
    case "teenth":
      return [13, 19];
    case "1st":
      return [1, 7];
    case "2nd":
      return [8, 14];
    case "3rd":
      return [15, 21];
    case "4th":
      return [22, 28];
    case "5th":
      return [29, 31];
    case "last":
      return [getLastDate(year, month) - 6, getLastDate(year, month)];
  }
}

const DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
]

const meetupDay = (year, month, dayStr, when) => {
  let [start, end] = getRange(year, month, when);

  while(start <= end) {

    if (start > getLastDate(year, month)) {
      throw new Error("Invalid date.");
    }

    let currentDay = new Date(year, month, start).getDay();
    
    if (currentDay === DAYS.indexOf(dayStr)) {
      let currentDate = new Date(year, month, start);
      return currentDate;
    }

    start += 1;
  }

  throw new Error("Invalid date.");
}

module.exports = meetupDay;