import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { addUsuario } from '../api/Api_usuarios_Service'
import { UsuarioContext } from '../context/UsuarioContext'

export default function Register() {
    const [Passw, setPssw] = useState('')
    const User = useRef('')
    const Email = useRef('')
    const [Disabled, setDisabled] = useState(true)
    const [InvalidUser, setInvalidUser] = useState(null)
    const [InvalidPassw, setInvalidPassw] = useState(null)
    //const [MessagePassw, setMessagePassw] = useState([])

    // usamos el conexto de usuario
    const { findUserByName } = useContext(UsuarioContext)

    const validarUser = () => {

        if (User.current.value.length < 4) {
            setInvalidUser(null)
        } else {
            //si existe no puede usar ese nombre y si no existe si puede suarlo
            findUserByName(User.current.value)
                ? setInvalidUser(true)
                : setInvalidUser(false)
        }

    }

    useEffect(() => {

        if ((Passw == '')) {
            setInvalidPassw(null)
        } else {
            Passw.length >= 8 ? setInvalidPassw(false) : setInvalidPassw(true)
        }
    }, [Passw])

    useEffect(() => {
        if (InvalidPassw == false && InvalidUser == false) {
            setDisabled(false)
        } else {
            setDisabled(true)
        }
    }, [InvalidPassw, InvalidUser])

    const saveUser = (e) => {
        e.preventDefault()

        const newUsuario = {
            name: User.current.value,
            email: Email.current.value,
            passw: Passw,
        }

        console.log(newUsuario)

        addUsuario(newUsuario).then(() => window.alert('todo ok')) // cambiar por modal
    }

    return (
        <>
            <h2>Registro</h2>
            <form onSubmit={saveUser}>
                <div className="grid">
                    <label htmlFor="firstname">
                        Nombre de Usuario
                        <input
                            type="text"
                            ref={User}
                            name="user"
                            placeholder="Nombre de Usuario"
                            onBlur={validarUser}
                            aria-invalid={InvalidUser}
                            required
                        />
                        <small>
                            {InvalidUser == null
                                ? 'Tiene que tener mas de 4 caracteres'
                                : InvalidUser
                                ? 'Este nombre de usuario ya existe'
                                : 'Puedes usar este nombre de usuario'}{' '}
                        </small>
                    </label>

                    <label htmlFor="lastname">
                        Contraseña
                        <input
                            type="password"
                            id="lastname"
                            name="lastname"
                            placeholder="Contraseña"
                            aria-invalid={InvalidPassw}
                            onChange={(e) => setPssw(e.target.value)}
                            required
                        />
                        <small>Tiene que tener 8 o mas caracteres</small>
                    </label>
                </div>

                <label htmlFor="email">Email address</label>
                <input
                    type="email"
                    ref={Email}
                    name="email"
                    placeholder="Email address"
                    required
                />
                <small></small>

                <button
                    type="submit"
                    className={Disabled ? 'outline' : ''}
                    disabled={Disabled}
                >
                    Registrase
                </button>
                <small>
                    * Mientras los campos no este correctamente rellenados no
                    podras registrate
                </small>

                <article className='c-h' style={{gap: '7px'}}>Si ya tiene una cuenta <Link to={'/getStarted'}>Inicia Sesion</Link> </article>
            </form>
        </>
    )
}
