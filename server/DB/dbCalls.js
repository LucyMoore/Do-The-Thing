import db from './db'

//get task by id
export function getTaskByID() {
  const test = db('Tasks')
    .select()
    .where({ id: 1 })
    .then((user) => {
      console.log(user)
    })
}
