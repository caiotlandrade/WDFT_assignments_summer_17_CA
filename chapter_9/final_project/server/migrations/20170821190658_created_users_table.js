
exports.up = function(knex, Promise) {
    return knex.schema.createTableIfNotExists('users', (table) => {
      table.increments('id').primary();
      table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
      table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
      table.string('email').notNullable().unique();
      table.string('username').notNullable().unique();
      table.integer('account_id').notNullable();
      table.string('firebase_uid').notNullable().unique();
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users');
  };
  