import express from 'express'
import * as Path from 'node:path'

const server = express()

server.use('api/v1/schedule')

server.use(express.json())

server.get('/', (req, res) => {
  res.send('this is the server')
})
export default server
