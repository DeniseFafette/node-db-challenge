const express = require('express')
const server = express()
const projectRouter = require('./projects/projectRouter')
const resourceRouter = require('./resources/resourceRouter')
const taskRouter = require('./tasks/taskRouter')

server.use('express.json()')
server.use('/api/projects', projectRouter)
server.use('/api/resources', resourceRouter)
server.use('/api/tasks', taskRouter)

module.exports = server;