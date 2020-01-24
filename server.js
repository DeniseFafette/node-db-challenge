const express = require('express')
const server = express()
const projectRouter = require('./projects/projectRouter')

server.use('express.json()')
server.use('/api/projects', projectRouter)

module.exports = server;