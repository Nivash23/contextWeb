import React, { createContext, useState } from 'react'


const MessageContext = createContext();
function App() {
    return (
        <div>
            <MessageContext.Provider>
                

            </MessageContext.Provider>
    </div>
  )
}

export {App as default, MessageContext}