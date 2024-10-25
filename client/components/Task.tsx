import React from 'react'
import { TaskDetail } from '../../Model/TaskDetail'

function Task() {
  return (
    <>
      <div id="task">
        <h1>Task: {task.name} </h1>
        <p>due on: {task.dueDate?.toDateString()} </p>
      </div>
    </>
  )
}
export default Task

const task: TaskDetail = {
  name: 'clean car',
  dueDate: new Date(2024, 11, 2),
  repeat: true,
  frequency: 7,
  completedDate: null,
}
