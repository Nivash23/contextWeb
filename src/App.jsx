import React, { createContext, useState } from 'react'
import Product from '../components/product'

const MessageContext = createContext();
function App() {
  const [name, setName] = useState('Nivash');
    return (
        <div>
            <MessageContext.Provider value={{name}}>
                <Product/>

            </MessageContext.Provider>
    </div>
  )
}

export {App as default, MessageContext}