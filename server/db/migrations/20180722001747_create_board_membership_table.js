module.exports.up = (knex) =>
  knex.schema.createTable('board_membership', (table) => {
    /* Columns */

    table.text('id').notNullable().primary();

    table.bigInteger('board_id').notNullable();
    table.text('user_id').notNullable();

    table.timestamp('created_at', true);
    table.timestamp('updated_at', true);

    /* Indexes */

    table.unique(['board_id', 'user_id']);
    table.index('user_id');
  });

module.exports.down = (knex) => knex.schema.dropTable('board_membership');
