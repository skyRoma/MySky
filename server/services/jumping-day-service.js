const JumpingDay = require('../models').JumpingDay;
const Repository = require('../repository/repository');

class JumpingDayService extends Repository {}

const jumpingDayService = new JumpingDayService(JumpingDay);

module.exports = jumpingDayService;
