const date = new Date();

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const currentDayOfWeek = daysOfWeek[date.getDay()];
const secondDayOfWeek = daysOfWeek[date.getDay() + 1];
const thirdDayOfWeek = daysOfWeek[date.getDay() + 2];
const fourthDayOfWeek = daysOfWeek[date.getDay() + 3];
const fifthDayOfWeek = daysOfWeek[date.getDay() + 4];
const sixthDayOfWeek = daysOfWeek[date.getDay() + 5];
const seventhDayOfWeek = daysOfWeek[date.getDay() + 6];
const currentTime = date.toLocaleTimeString();

export {
  currentDayOfWeek,
  secondDayOfWeek,
  thirdDayOfWeek,
  fourthDayOfWeek,
  fifthDayOfWeek,
  sixthDayOfWeek,
  seventhDayOfWeek,
};
