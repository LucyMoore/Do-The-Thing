import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
  res.send('This is the schedule endpoint')
})

// Add other schedule-related routes here

export default router
