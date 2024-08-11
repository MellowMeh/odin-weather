class MyCustomDate extends Date {
  addDays(days) {
    const date = new MyCustomDate(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
  }
}
const todayRaw = new MyCustomDate();
let today = JSON.stringify(todayRaw).slice(1, 11);
const tomorrowRaw = todayRaw.addDays(1);
let tomorrow = JSON.stringify(tomorrowRaw).slice(1, 11);
const twoDaysAwayRaw = todayRaw.addDays(2);
let twoDaysAway = JSON.stringify(twoDaysAwayRaw).slice(1, 11);
const threeDaysAwayRaw = todayRaw.addDays(3);
let threeDaysAway = JSON.stringify(threeDaysAwayRaw).slice(1, 11);
const fourDaysAwayRaw = todayRaw.addDays(4);
let fourDaysAway = JSON.stringify(fourDaysAwayRaw).slice(1, 11);
const fiveDaysAwayRaw = todayRaw.addDays(5);
let fiveDaysAway = JSON.stringify(fiveDaysAwayRaw).slice(1, 11);
const sixDaysAwayRaw = todayRaw.addDays(6);
let sixDaysAway = JSON.stringify(sixDaysAwayRaw).slice(1, 11);
const sevenDaysAwayRaw = todayRaw.addDays(7);
let sevenDaysAway = JSON.stringify(sevenDaysAwayRaw).slice(1, 11);

export {
  today,
  tomorrow,
  twoDaysAway,
  threeDaysAway,
  fourDaysAway,
  fiveDaysAway,
  sixDaysAway,
  sevenDaysAway,
};
