import db from './db.js'

//get single task by id
export async function getTaskByID(taskId) {
  const taskSingle = await db('Tasks').select().where({ id: taskId })
  return taskSingle
}

//get all tasks
export async function getAllTasks(taskId) {
  const tasks = await db('Tasks').select()
  console.log(tasks.length)
  return tasks
}

//add a new task
export async function addNewTask(newTask) {
  let nextDue = new Date()
  nextDue.setDate(nextDue.getDate + 5)
  const taskAdded = await db('Tasks').insert({
    name: 'clean stove',
    details: 'clean the top and back',
    dueDate: nextDue,
  })
  console.log(tasks.length)
  return tasks
}

// get all tasks due in the next week
// export default getTaskByID
