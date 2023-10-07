module.exports.up = (knex) =>
  knex.schema.createTable('task', (table) => {
    /* Columns */

    table.text('id').notNullable().primary();

    table.bigInteger('card_id').notNullable();

    table.text('name').notNullable();
    table.boolean('is_completed').notNullable();

    table.timestamp('created_at', true);
    table.timestamp('updated_at', true);

    /* Indexes */

    table.index('card_id');
  });

module.exports.down = (knex) => knex.schema.dropTable('task');
