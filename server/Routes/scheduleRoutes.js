import express from 'express'
import { getTaskByID } from '../DB/dbCalls.js'

const router = express.Router()

router.get('/', async (req, res) => {
  let task = await getTaskByID(1)
  console.log('here... ', task)
  res.send('todays task is ' + task[0].name)
})

// Add other schedule-related routes here

export default router
