import React from 'react'
import { TaskDetail } from '../../Model/TaskDetail'

function Task() {
  return (
    <>
      <h1>Task: {task.name} </h1>
      <p>due on: {task.dueDate} </p>
    </>
  )
}
export default Task

const task: TaskDetail = {
  name: 'clean car',
  dueDate: 110924,
  repeat: true,
  daysBetween: 7,
}
