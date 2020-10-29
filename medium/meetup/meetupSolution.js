/* 
Given an example of a meetup date, each containing a month, day, year, and descriptor
calculate the date of the actual meetup 


For example, if given "The first Monday of January 2017", 
the correct meetup date is 2017/1/2.

meetupDay("first tuesday of may 2013");
  - convert strings to numbers

*/

const rangeOfDays = (descriptor, daysInMonth) => {
  switch(descriptor) {
    case "teenth":
      return [13, 19];
    case "1st":
      return [1, 7];
    case "2nd":
      return [8, 14];
    case "3rd": 
      return [15, 21];
    case "4th":
      return [21, 28];
    case "5th":
      return [29, 31];
    case "last":
      return [daysInMonth - 6, daysInMonth];
  }
}

function daysInMonth(year, month) {
  let nextMonthDate = new Date(year, month + 1, 1);
  return new Date(nextMonthDate - 1).getDate();
}

const meetupDay = (year, month, day, descriptor) => {
  const DAYS = [
    "Sunday", 
    "Monday", 
    "Tuesday", 
    "Wednesday", 
    "Thursday", 
    "Friday", 
    "Saturday"
  ];

  let daysInAMonth = daysInMonth(year, month);
  let [start, end] = rangeOfDays(descriptor, daysInAMonth);
  
  while (start <= end) {
    if (start > daysInAMonth) {
      throw new Error();
    }
    
    let currentDate = new Date(year, month, start);
    let currentDay = DAYS[currentDate.getDay()];

    if (currentDay === day) {
      return currentDate;
    }
    start += 1;
  }

  throw new Error();
}



module.exports = meetupDay;