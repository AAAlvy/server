const knex = require('./knex');

module.exports = {
  getDrinkers: function() {
    return knex('drinker');
  },
  getDrinker: function(id) {
    return knex('drinker').where('id', id).first();
  },
  getDrinkerBeers: function(drinker_id) {
    return knex('beer').where('drinker_id', drinker_id);
  },
  postBeer: function(beer) {
    return knex('beer').insert(beer).returning('*');
  }

};
