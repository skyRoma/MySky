const express = require('express');
const weatherService = require('../services/weather-service');
const { handleSuccess } = require('../middlewares/responseHandler');

const router = express.Router();

function find() {
  return weatherService.find({
    attributes: ['clouds', 'windSpeed', 'rain', 'snow', 'temp', 'icon'],
  });
}

router.route('/').get(handleSuccess(find));

module.exports = router;
