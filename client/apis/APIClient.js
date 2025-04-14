// import * as superagent from 'superagent'
import superagent from 'superagent'

const router = '/api/v1/tasks'

export async function getAllItems() {
  const res = await superagent.get('/api/v1/tasks')
  console.log('body', res.body)
  return res.body
}
