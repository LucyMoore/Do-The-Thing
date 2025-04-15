import db from './db'

//get single task by id
export function getTaskByID() {
  const test = db('Tasks')
    .select()
    .where({ id: 1 })
    .then((task) => {
      console.log(task)
    })
}

//get all tasks

//add a new task

// get all tasks due in th enext week
