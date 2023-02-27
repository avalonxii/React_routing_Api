import React, { useRef, useState } from 'react'
import { addLibro, getAllLibros} from '../api/Api_libros_Service'

export default function AddLibros() {
    const [Resumen, setResumen] = useState('')

    const titulo = useRef('')
    const genero = useRef('')
    const resumen = useRef('')

    const onSubmit = (e) =>{
        e.preventDefault()

        const newlibro = {
            titulo: titulo.current.value,
            genero: genero.current.value,
            autor: 'yo',
            resumen: resumen.current.value
        }

        addLibro(newlibro).then(() => window.alert('se ha guardado correctamente'))
    }

    return (
        <div className='c-h'>
            <form onSubmit={onSubmit} className="addLibro">
            <div className="grid">
                <label htmlFor="Titulo">
                    Titulo
                    <input
                        type="text"
                        ref={titulo}
                        name="titulo"
                        placeholder="Titulo"
                        required
                    />
                </label>

                <label htmlFor="Genero">
                    Genero
                    <input
                        type="text"
                        ref={genero}
                        name="genero"
                        placeholder="Genero"
                        required
                    />
                </label>

                <label htmlFor="Autor">
                    Autor
                    <input
                        type="text"
                        id="autor"
                        name="autor"
                        placeholder="You ()"
                        disabled
                    />
                </label>
            </div>
            <label htmlFor="resumen">Resumen</label>
            <textarea
                ref={resumen}
                name="resumen"
                placeholder="Resumen"
                aria-invalid=""
                required
            />
            <small>Caractéres permitidos: 0/1400</small>

            <button type="submit">Enviar</button>
        </form>
        </div>
    )
}
