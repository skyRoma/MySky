const express = require('express');

const jumpingDayService = require('../services//jumping-day-service');
const model = require('../models');
const { handleSuccess } = require('../middlewares/responseHandler');

const router = express.Router();

function findAll() {
  return jumpingDayService.findAll({
    attributes: ['date', 'size'],
    include: [
      {
        model: model.User,
        as: 'users',
        attributes: ['id', 'firstName', 'lastName', 'email', 'phoneNumber'],
      },
    ],
  });
}

router.route('/').get(handleSuccess(findAll));

module.exports = router;
