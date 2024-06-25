import React from 'react'
import Task from './Task'
function Column(props: { title: string }) {
  return (
    <>
      <div id="column">
        {props.title}
        <Task></Task>
      </div>
    </>
  )
}
export default Column
