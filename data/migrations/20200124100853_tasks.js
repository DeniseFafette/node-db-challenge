
exports.up = function(knex) {
    return knex.schema.createTable('tasks', tbl => {
        tbl.increments()
        tbl.text('task_description').notNullable()
        tbl.text('notes')
        tbl.boolean('task_completed').defaultTo(false)
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            inTable('projects')
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('tasks')
};
