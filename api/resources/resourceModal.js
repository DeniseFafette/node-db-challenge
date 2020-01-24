const db = require('../../dbConfig')

module.exports = {
    find,
    add
}

function find() {
    return db('resources')
}

function add() {
    return db('resources').insert(resource)
}