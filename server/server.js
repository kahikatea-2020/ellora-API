const path = require('path')
const express = require('express')

const request = require('superagent')
const routes = require('./routes/routes')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/', routes)

module.exports = server
