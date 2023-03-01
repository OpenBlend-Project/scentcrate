const express = require('express');
const router = express.Router();

const RawMaterial = require('../models/RawMaterial.model');

/* Post home page. */
router.post('/', function(req, res, next) {
  RawMaterial.create(req.body)
    .then(rawMaterial => {
      res.status(201).json(rawMaterial);
    })
  .catch(error => {
    res.status(500).json(error);
  });
});

module.exports = router;
