const db = require('../../dbConfig')

module.exports = {
    find,
    add
}

function find() {
    return db('projects')
}

function add() {
    return db('projects').insert(project)
}