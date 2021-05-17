const express = require('express');

const model = require('../models');
const userService = require('../services/user-service');
const { handleSuccess } = require('../middlewares/responseHandler');

const router = express.Router();

function findAll() {
  return userService.findAll({
    attributes: ['id', 'firstName', 'lastName', 'email', 'phoneNumber'],
    include: [
      {
        model: model.Role,
        as: 'role',
        attributes: ['id', 'name'],
      },
    ],
    order: [['firstName', 'ASC'], ['lastName', 'ASC']],
  });
}

function findById(req) {
  return userService.findById(req.params.id, {
    attributes: ['id', 'firstName', 'lastName', 'email', 'phoneNumber'],
    include: [
      {
        model: model.Role,
        as: 'role',
        attributes: ['id', 'name'],
      },
      {
        model: model.Jump,
        as: 'jumps',
        attributes: [
          'id',
          'date',
          'height',
          'freeFallTime',
          'result',
          'createdAt',
        ],
        include: [
          {
            model: model.Exercise,
            as: 'exercise',
            attributes: ['id', 'name'],
          },
          {
            model: model.Parachute,
            as: 'parachute',
            attributes: ['id', 'name'],
          },
          {
            model: model.Aircraft,
            as: 'aircraft',
            attributes: ['id', 'name'],
          },
        ],
      },
    ],
  });
}

function create(req) {
  return userService.create(req.body);
}

function update(req) {
  return userService
    .update(req.params.id, req.body)
    .then(() => findById(req));
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
