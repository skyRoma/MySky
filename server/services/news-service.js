const Repository = require('../repository/repository');
const User = require('../models').User;

class NewsService extends Repository {}

const newsService = new NewsService(User);

module.exports = newsService;
