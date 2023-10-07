module.exports.up = (knex) =>
  knex.schema.createTable('card_subscription', (table) => {
    /* Columns */

    table.text('id').notNullable().primary();

    table.bigInteger('card_id').notNullable();
    table.text('user_id').notNullable();

    table.boolean('is_permanent').notNullable();

    table.timestamp('created_at', true);
    table.timestamp('updated_at', true);

    /* Indexes */

    table.unique(['card_id', 'user_id']);
    table.index('user_id');
  });

module.exports.down = (knex) => knex.schema.dropTable('card_subscription');
