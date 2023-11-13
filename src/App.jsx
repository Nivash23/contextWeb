import React, { createContext, useState } from 'react'
import Product from '../components/product'
import p1 from '../images/product_img.jpg'

const MessageContext = createContext();
function App() {
  const [Price,setPrice]=useState(249)
  const [Productname1, setProductname1] = useState('The Legend of the wolf');
    return (
        <div>
            <MessageContext.Provider value={{Productname1,p1,Price,setPrice}}>
                <Product/>

            </MessageContext.Provider>
    </div>
  )
}

export {App as default, MessageContext}