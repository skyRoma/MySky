const { USER_IDS } = require('./user');

function makeJumps(countJumpsPerUser) {
  let allJumps = [];
  USER_IDS.forEach(userId => {
    const userJumps = new Array(countJumpsPerUser).fill(null).map(() => {
      return {
        date: new Date(),
        exerciseId: Math.floor(Math.random() * 4) + 1,
        parachuteId: Math.floor(Math.random() * 7) + 1,
        aircraftId: Math.floor(Math.random() * 4) + 1,
        height: 800 + Math.floor(Math.random() * 1200),
        freeFallTime: 3 + Math.floor(Math.random() * 20),
        result: String(Math.floor(Math.random() * 17)),
        userId: userId,
      };
    });
    allJumps = [...allJumps, ...userJumps];
  });
  return allJumps;
}

const JUMPS = makeJumps(20);

module.exports = { JUMPS };
