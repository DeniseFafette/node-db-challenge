
exports.up = function(knex) {
  return knex.schema.createTable('projects', tbl => {
      tbl.increments()
      tbl.string('name', 24).notNullable().unique()
      tbl.text('description')
      tbl.boolean('completed').defaultTo(false)
  })
  .createTable('resources', tbl => {
    tbl.increments()
    tbl.string('resource_name', 24).notNullable().unique()
    tbl.text('resource_description')
})
.createTable('tasks', tbl => {
    tbl.increments()
    tbl.text('task_description').notNullable()
    tbl.text('notes')
    tbl.boolean('task_completed').defaultTo(false)
    tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
})
.createTable('project_resource', tbl => {
    tbl.increments()
    tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
    tbl.integer('resource_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('resources')
  })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('project_resource')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
};
