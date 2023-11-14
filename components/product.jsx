import React, { useContext } from 'react'
import Card from '../components/card'
import Card1 from '../components/card1'
import App, { MessageContext } from '../src/App'

function product() {
  const {Productname1} = useContext(MessageContext);
  return (
      <div >
      <Card />
      <Card1 />
    </div>
  )
}

export default product;