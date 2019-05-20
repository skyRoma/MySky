const News = require('../models').News;
const Repository = require('../repository/repository');

class NewsService extends Repository {}

const newsService = new NewsService(News);

module.exports = newsService;
