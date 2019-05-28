function makeDate() {
  const d = new Date();
  d.setDate(d.getDate() - 5);
  return new Date(d.setDate(d.getDate() + Math.floor(Math.random() * 10)));
}

function makeDays(count) {
  const days = new Array(count).fill(null).map(() => {
    return {
      date: makeDate(),
      size: Math.floor(Math.random() * 30),
    };
  });
  return days;
}

const DAYS = makeDays(10);

module.exports = { DAYS };
