const express = require('express');

const model = require('../models');
const newsService = require('../services/news-service');
const { handleSuccess } = require('../middlewares/responseHandler');

const router = express.Router();

function findAll() {
  return newsService.findAll({
    attributes: ['id', 'content', 'createdAt'],
    include: [
      {
        model: model.User,
        as: 'author',
        attributes: ['id', 'firstName', 'lastName', 'email', 'phoneNumber'],
        include: [
          {
            model: model.Role,
            as: 'role',
            required: false,
            attributes: ['id', 'name'],
          },
        ],
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
