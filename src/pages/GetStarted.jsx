import React from 'react'
import { Link } from 'react-router-dom'

export default function GetStarted() {
    //valdiar formulario (si el usuario existe , la contraseña es correcta, )

    return (
        <>
            <h2>Get Started</h2>
            <form>
                <label htmlFor="firstname">
                    Nombre de Usuario
                    <input
                        type="text"
                        id="firstname"
                        name="firstname"
                        placeholder="Nombre de Usuario"
                        required
                    />
                    <small></small>
                </label>

                <label htmlFor="lastname">
                    Contraseña
                    <input
                        type="text"
                        id="lastname"
                        name="lastname"
                        placeholder="Contraseña"
                        required
                    />
                    <small></small>
                </label>

                <button type="submit">Enviar</button>

                <article className='c-h'style={{gap: '7px'}}> Si no tiene cuenta <Link to={'/register'}>Registrese</Link> </article>
            </form>
        </>
    )
}
