import React, { useEffect, useState } from 'react'
import { getAllLibros } from '../api/Api_libros_Service'
import Card from '../components/varios/Card'

export default function Biblioteca() {

    const [Libros, setLibros] = useState([])


    useEffect(() => {
        getAllLibros().then(result => setLibros(result))
    },[])

  return (
    <>
        <h2>Biblioteca</h2>
        <div className="biblioteca">
            {Libros.map(libro => <Card key={libro.id} libro={libro}/>)}
        </div>
    </>
  )
}
