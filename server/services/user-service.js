const Repository = require('../repository/repository');
const User = require('../models').User;

class UserService extends Repository {
  constructor(model) {
    super(model);
    this.findOne = this.findOne.bind(this);
  }

  findOne(options) {
    return this.model.findOne(options);
  }
}

const userService = new UserService(User);

module.exports = userService;
