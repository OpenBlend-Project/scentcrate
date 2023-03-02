const express = require('express');
const router = express.Router();

const RawMaterial = require('../models/RawMaterial.model');

/* Post home page. */
// router.post('/', function(req, res, next) {
//   RawMaterial.create(req.body)
//     .then(rawMaterial => {
//       res.status(201).json(rawMaterial);
//     })
//   .catch(error => {
//     res.status(500).json(error);
//   });
// });


router.get('/materials', (req, res, next) => {
  RawMaterial.find()
    .populate("primaryConstituents.byAmount")
    .populate("primaryConstituents.byOlfactiveImpact")
    .then(rawMaterials => {
      res.status(200).json(rawMaterials);
    })
    .catch(error => {
      res.status(500).json(error);
    })
});

/* Get material by ID */
router.get('/materials/:id', (req, res, next) => {
  RawMaterial.findById(req.params.id)
    .populate("primaryConstituents.byAmount")
    .populate("primaryConstituents.byOlfactiveImpact")
    .then(rawMaterial => {
      res.status(200).json(rawMaterial);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = router;
