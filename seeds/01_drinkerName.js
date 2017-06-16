
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE drinker RESTART IDENTITY CASCADE;')
    .then(function () {
      // Inserts seed entries
      return knex('drinker').insert([
        {email: 'joe@aol.com', password: '123', is_active: true},
        {email: 'bob@yahoo.com', password: '456', is_active: true},
        {email: 'steve@cox.net', password: '789', is_active: true}
      ]);
    });
};
