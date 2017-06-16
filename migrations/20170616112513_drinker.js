
exports.up = function(knex, Promise) {
  return knex.schema.createTable('drinker', (table) => {
    table.increments('id');
    table.text('email');
    table.text('password');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.boolean('is_active');
});
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('drinker');
};
