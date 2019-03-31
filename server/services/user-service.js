const Repository = require('../repository/repository');
const User = require('../models').User;

class UserService extends Repository {
  findOne(options) {
    return this.model.find(options);
  }
}

const userService = new UserService(User);

module.exports = userService;
