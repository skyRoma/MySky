const express = require('express');

const model = require('../models');
const newsService = require('../services/news-service');
const { handleSuccess } = require('../middlewares/responseHandler');

const router = express.Router();

function findAll() {
  return newsService.find({
    attributes: [
      'id',
      'content',
      'createdAt',
      [model.sequelize.col('User.firstName'), 'firstName'],
      [model.sequelize.col('User.lastName'), 'lastName'],
    ],
    include: [
      {
        model: model.User,
        attributes: [],
      },
    ],
  });
}

function create(req) {
  return newsService.create(req.body);
}

function update(req) {
  return newsService
    .update(req.params.id, req.body)
    .then(() => newsService.findById(req.params.id));
}

function remove(req) {
  return newsService.delete(req.params.id);
}

router
  .route('/')
  .get(handleSuccess(findAll))
  .post(handleSuccess(create));

router
  .route('/:id')
  .put(handleSuccess(update))
  .delete(handleSuccess(remove));

module.exports = router;
