const express = require('express');

const model = require('../models');
const userService = require('../services/user-service');
const { handleSuccess } = require('../middlewares/responseHandler');

const router = express.Router();

function findAll() {
  return userService.findAll({
    attributes: [
      'id',
      'firstName',
      'lastName',
      'email',
      'phoneNumber',
      [model.sequelize.col('Role.name'), 'role'],
    ],
    include: [
      {
        model: model.Role,
        attributes: [],
      },
    ],
  });
}

function findById(req) {
  return userService.findById(req.params.id, {
    attributes: [
      'firstName',
      'lastName',
      'email',
      'phoneNumber',
      [model.sequelize.col('Role.name'), 'role'],
    ],
    include: [
      {
        model: model.Role,
        attributes: [],
      },
    ],
  });
}

function create(req) {
  return userService.create(req.body);
}

function update(req) {
  return userService.update(req.params.id, req.body);
}

function remove(req) {
  return userService.delete(req.params.id);
}

router
  .route('/')
  .get(handleSuccess(findAll))
  .post(handleSuccess(create));

router
  .route('/:id')
  .get(handleSuccess(findById))
  .put(handleSuccess(update))
  .delete(handleSuccess(remove));

module.exports = router;
