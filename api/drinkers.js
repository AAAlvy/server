const express = require('express');

const router = express.Router();

const queries = require('../database/queries');

router.get('/', (req, res) => {
  queries.getDrinkers().then(drinkers => {
    res.json(drinkers);
  });
});
router.get('/:id', (req, res) => {
  queries.getDrinker(req.params.id).then(drinker => {
    res.json(drinker);
  });
});
router.get('/:id/beers', (req, res) => {
  queries.getDrinkerBeers(req.params.id).then(beers => {
    res.json(beers);
  });
});
router.post('/:id/beers', (req, res) => {
  queries.postBeer(req.body)
  .then(results => {
    res.send(results[0]);
  });
});  

module.exports = router;
