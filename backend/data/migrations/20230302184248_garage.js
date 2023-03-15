exports.up = function(knex) {
    return knex.schema
      .createTable('users', users => {
        users.increments('user_id')
        users.string('username').notNullable().unique()
        users.string('password').notNullable()
      })
      .createTable('cars', cars => {
        cars.increments('car_id');
        cars.integer('user_id')
          .unsigned()
          .notNullable()
          .references('user_id')
          .inTable('users')
          .onUpdate('RESTRICT')
          .onDelete('RESTRICT')
        cars.string('make').notNullable();
        cars.string('model').notNullable();
        cars.string('trim').notNullable();
        cars.string('img_url').notNullable();
        cars.integer('price');
        cars.string('build_url');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('cars')
    .dropTableIfExists('users')
};