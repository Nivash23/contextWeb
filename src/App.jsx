import React, { createContext, useState } from 'react'
import Child from '../components/child'


const MessageContext = createContext();
function App() {
    const [message,setMessage]=useState('hi')
    return (
        <div>
            <MessageContext.Provider value={{ message }}>
                <Child />

            </MessageContext.Provider>
    </div>
  )
}

export {App as default, MessageContext}