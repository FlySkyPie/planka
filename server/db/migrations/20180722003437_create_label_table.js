module.exports.up = (knex) =>
  knex.schema.createTable('label', (table) => {
    /* Columns */

    table.increments('id').primary();

    table.bigInteger('board_id').notNullable();

    table.text('name');
    table.text('color').notNullable();

    table.timestamp('created_at', true);
    table.timestamp('updated_at', true);

    /* Indexes */

    table.index('board_id');
  });

module.exports.down = (knex) => knex.schema.dropTable('label');
