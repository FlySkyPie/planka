module.exports.up = (knex) =>
  knex.schema.createTable('action', (table) => {
    /* Columns */

    table.text('id').notNullable().primary();

    table.bigInteger('card_id').notNullable();
    table.text('user_id').notNullable();

    table.text('type').notNullable();
    table.jsonb('data').notNullable();

    table.timestamp('created_at', true);
    table.timestamp('updated_at', true);

    /* Indexes */

    table.index('card_id');
  });

module.exports.down = (knex) => knex.schema.dropTable('action');
