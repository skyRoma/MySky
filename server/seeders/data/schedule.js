const { DAYS } = require('./jumping-day');
const { USER_IDS } = require('./user');

function getOccupiedNumber(size) {
  return size - Math.floor(Math.random() * size);
}

function makeSchedule() {
  let schedule = [];
  DAYS.forEach((day, i) => {
    const scheduleItems = new Array(getOccupiedNumber(day.size))
      .fill(null)
      .map(() => {
        return {
          jumpingDayId: i + 1,
          userId: USER_IDS[Math.floor(Math.random() * USER_IDS.length)],
        };
      });
    schedule = [...schedule, ...scheduleItems];
  });
  return schedule;
}

const SCHEDULE = makeSchedule();

module.exports = { SCHEDULE };
