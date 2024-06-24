import request from 'superagent'

export async function fetch() {
  // const response = { title: 'HELLO' }
  const response = await request.get('api/v1/schedule/')
  console.log(response.body)
  return response
}
