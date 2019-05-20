const express = require('express');

const model = require('../models');
const newsService = require('../services/news-service');
const { handleSuccess } = require('../middlewares/responseHandler');

const router = express.Router();

function findAll() {
  return newsService.findAll({
    attributes: [
      'id',
      'content',
      'createdAt',
      'User.firstName',
      // 'User.Role.name',

      // [model.sequelize.col('User.firstName'), 'user'],
      [model.sequelize.col('User.Role.name'), 'role'],
    ],
    include: [
      {
        model: model.User,
        attributes: [
          // 'id',
          'firstName',
          // 'lastName',
          // 'email',
          // 'phoneNumber',
          // [model.sequelize.col('Role.id'), 'role'],
        ],
        include: [
          {
            model: model.Role,
            required: false,
            attributes: ['name'],
          },
        ],
      },
    ],

    // raw: false,
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
