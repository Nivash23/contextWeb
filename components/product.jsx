import React, { useContext } from 'react'
import Card from '../components/card'
import App, { MessageContext } from '../src/App'

function product() {
  const name = useContext(MessageContext);
  return (
      <div >
          <Card/>
    </div>
  )
}

export default product;