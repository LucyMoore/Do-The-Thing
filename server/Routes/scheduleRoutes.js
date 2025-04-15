import express from 'express'
import getTaskByID from '../DB/dbCalls.js'

const router = express.Router()

router.get('/', (req, res) => {
  let testx = getTaskByID(1)
  res.send('This is the schedule endpoint')
})

// Add other schedule-related routes here

export default router
