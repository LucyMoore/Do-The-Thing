import { useState } from 'react'
import Column from './Column'
import React from 'react'
import { title } from 'process'

function App() {
  return (
    <>
      <div id="content">
        <Column></Column>
        <Column></Column>
      </div>
    </>
  )
}

export default App
