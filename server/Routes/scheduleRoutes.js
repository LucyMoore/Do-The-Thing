import express from 'express'
import { getAllTasks, getTaskByID } from '../DB/dbCalls.js'

const router = express.Router()

router.get('/:id', async (req, res) => {
  let id = req.params.id
  let task = await getTaskByID(id)
  res.send('todays task is ' + task[0].name)
})

router.get('/', async (req, res) => {
  let tasks = await getAllTasks()
  res.send('todays tasks: ' + tasks[0].name)
})

// Add other schedule-related routes here

export default router
