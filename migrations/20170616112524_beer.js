
exports.up = function(knex, Promise) {
  return knex.schema.createTable('beer', (table) => {
    table.increments('id');
    table.text('name');
    table.text('brewer');
    table.text('city');
    table.text('style');
    table.float('abv');
    table.float('rating');
    table.integer('user_id').references('user.id').unsigned().onDelete('cascade');
});
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('beer');
};
