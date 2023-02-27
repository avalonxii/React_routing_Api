import React, { createContext, useEffect, useState } from 'react'
import { getAllUsuarios } from '../api/Api_usuarios_Service'

export const UsuarioContext = createContext()

export default function UsuarioProvider(props) {
    const [ListaUsuarios, setListaUsuarios] = useState([])

    useEffect(() => {
        getAllUsuarios().then((result) => setListaUsuarios(result))
    },[])

    const findUserByName = (userName) => {
        let existe = null

        ListaUsuarios.map( u => {        
            if(u.name == userName) {
                existe = u
            }
        })

        return existe
    }

    const findUserByEmail = (userEmail) => {
        let existe = null

        ListaUsuarios.map( u => {        
            if(u.email == userEmail) {
                existe = u
            }
        })

        return existe
    }


    return (
        <UsuarioContext.Provider value={{ findUserByName }}>
            {props.children}
        </UsuarioContext.Provider>
    )
}
