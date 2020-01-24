const db = require('../../dbConfig')

module.exports = {
    find,
    add
}

function find() {
    return db('tasks')
        .join('projects', 'project_id', 'projects.id')
        .select('task_description', 'notes', 'tasks.id', 'task_completed', 'projects.id', 'name', 'description')
}

function add(task) {
    return db('tasks').insert(task)
}