import React, { useContext } from 'react'
import { MessageContext } from '../src/App'
import '../src/App'

function grand() {
    const {message} =useContext(MessageContext)
  return (
      <div>grand:{ message}</div>
  )
}

export default grand