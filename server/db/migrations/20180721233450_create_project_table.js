module.exports.up = (knex) =>
  knex.schema.createTable('project', (table) => {
    /* Columns */

    table.text('id').notNullable().primary();

    table.text('name').notNullable();
    table.jsonb('background');
    table.text('background_image_dirname');

    table.timestamp('created_at', true);
    table.timestamp('updated_at', true);
  });

module.exports.down = (knex) => knex.schema.dropTable('project');
