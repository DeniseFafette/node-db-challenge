const express = require('express')
const server = express()
const projectRouter = require('./api/projects/projectRouter')
const resourceRouter = require('./api/resources/resourceRouter')
const taskRouter = require('./api/tasks/taskRouter')

server.use(express.json())
server.use('/api/projects', projectRouter)
server.use('/api/resources', resourceRouter)
server.use('/api/tasks', taskRouter)

module.exports = server;