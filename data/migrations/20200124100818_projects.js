
exports.up = function(knex) {
  return knex.schema.createTable('projects', tbl => {
      tbl.increments()
      tbl.string('name', 24).notNullable().unique()
      tbl.text('description')
      tbl.boolean('completed').defaultTo(false)
  })
  .createTable('project_resource', tbl => {
    tbl.increments()
    tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        inTable('projects')
  })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('project_resource')
    .dropTableIfExists('projects')
};
