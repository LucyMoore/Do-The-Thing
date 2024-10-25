import express from 'express'
import scheduleRoutes from './routes/scheduleRoutes.js'
import * as Path from 'node:path'

const server = express()
server.use(express.json())

server.use('/api/v1/tasks', scheduleRoutes)

server.get('/', (req, res) => {
  res.send(typeof scheduleRoutes)
})

export default server
