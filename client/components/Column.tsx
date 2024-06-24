import React from 'react'
import Task from './Task'
import { fetch } from '../apis/apiClient'

function Column() {
  async function handleLoad() {
    const x = await fetch()
  }
  handleLoad()

  return (
    <>
      <h1 id="Title"></h1>
    </>
  )
}

export default Column
