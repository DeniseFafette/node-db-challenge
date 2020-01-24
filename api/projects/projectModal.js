const db = require('../../dbConfig')

module.exports = {
    find,
    add
}

function find() {
    return db('projects')
}

function add(project) {
    return db('projects').insert(project)
}