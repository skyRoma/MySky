const express = require('express');
const router = express.Router();
const Product = require('../models').Product;

router.get('/product', function(req, res) {
  Product.findAll()
    .then(products => res.status(200).send(products))
    .catch(error => {
      res.status(400).send(error);
    });
});

router.post('/product', function(req, res) {
  Product.create({
    prod_name: req.body.prod_name,
    prod_desc: req.body.prod_desc,
    prod_price: req.body.prod_price,
  })
    .then(product => res.status(201).send(product))
    .catch(error => res.status(400).send(error));
});

module.exports = router;
