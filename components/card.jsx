import React, { useContext } from 'react'
import product from '../components/product'
import { MessageContext } from '../src/App'

function card() {
    const { name } =useContext(MessageContext)
  return (
      <div>
          <p>Name:{ name}</p>
          
    </div>
  )
}

export default card