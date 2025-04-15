import db from './db.js'

//get single task by id
export async function getTaskByID(taskId) {
  const taskSingle = await db('Tasks').select().where({ id: taskId })
  return taskSingle
}

//get all tasks

//add a new task

// get all tasks due in th enext week
// export default getTaskByID
