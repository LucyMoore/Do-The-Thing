import db from './db.js'

//get single task by id
async function getTaskByID(taskId) {
  const test = await db('Tasks')
    .select()
    .where({ id: taskId })
    .then((task) => {
      console.log(task, 'Task')
    })
}

//get all tasks

//add a new task

// get all tasks due in th enext week
export default getTaskByID
