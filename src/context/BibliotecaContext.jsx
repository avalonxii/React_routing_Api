import React, { createContext } from 'react'

export const bibliotecaContext = createContext()

export default function BibliotecaProvider(props) {

    
  return (
    <bibliotecaContext.Provider value={''}>
        {props.children}
    </bibliotecaContext.Provider>
  )
}
