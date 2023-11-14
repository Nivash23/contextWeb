import React, { createContext, useState } from 'react'
import Product from '../components/product'
import p1 from '../images/product_img.jpg'
import p from '../images/product1_img.jpg'

const MessageContext = createContext();
function App() {
  const [Price, setPrice] = useState(249)
  const [ProductPrice1, setProductPrice1] = useState(175)
  
  const [Productname1, setProductname1] = useState('The Legend of the wolf');
  const [Productname2, setProductname2] = useState('The Wolf in Sheep’s Clothing');
    return (
      <div>
            <h1 id='tit'>ONLINE SHOPPING</h1>
            <MessageContext.Provider value={{Productname1,p1,Price,setPrice,Productname2,p,ProductPrice1,setProductPrice1}}>
                <Product/>

            </MessageContext.Provider>
    </div>
  )
}

export {App as default, MessageContext}