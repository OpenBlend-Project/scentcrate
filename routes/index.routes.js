const Query = require('airtable/lib/query');
const express = require('express');
const router = express.Router();

const RawMaterial = require('../models/RawMaterial.model');

/* Post home page. */
router.post('/materials', function(req, res, next) {
  RawMaterial.create(req.body)
    .then(rawMaterial => {
      res.status(201).json(rawMaterial);
    })
  .catch(error => {
    res.status(500).json(error);
  });
});


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

// SEARCH /api/search?q={query} - search for an item by any field
router.get('/search', (req, res, next) => {
  const { a, q } = req.query;
  const wantsAutocomplete = ((a === 1) ? true : false);
  const query = q.toString().toLowerCase();

  console.log(query);
  
  if (wantsAutocomplete) {
    RawMaterial.aggregate([
      {
        $search: {
          index: "autocompleteMaterials",
          autocomplete: {
            query: query,
            path: "*",
            tokenOrder: "sequential"
          }
        }
      },
      {
        $limit: 10
      },
      {
        $project: {
          "name.common": 1,
          "olfactiveProperties.descriptors": 1
        }
      }
    ])
      .toArray()
      .then(response => res.json(response))
      .catch(error => console.log(error));
  }

  if (!wantsAutocomplete) {
    RawMaterial.aggregate([
      {
        $search: {
          index: "materials",
          text: {
            query: query,
            path: {
              wildcard: "*"
            },
            fuzzy: {}
          }
        }
      }
    ])
      .toArray()
      .then(response => res.json(response))
      .catch(error => console.log(error));
  }
})

module.exports = router;
