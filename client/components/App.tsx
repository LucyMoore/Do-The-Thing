import React from 'react'
import Column from './Column'
import Task from './Task'
function App() {
  return (
    <>
      <h1>YOU CAN DO ALL THE THINGS</h1>
      <section>
        <Column title="To Do" />
        <Column title="Over Due" />
      </section>
    </>
  )
}
export default App
