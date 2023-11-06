import React, { useContext } from 'react'
import '../src/App'
import { MessageContext } from '../src/App'
import Grand from '../components/grand'

function child() {
    const { message } =useContext(MessageContext)
  return (
      <div>
          <h2>child:{message}</h2>
          <Grand/>
          
      </div>
  )
}

export default child