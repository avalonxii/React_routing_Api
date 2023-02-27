import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import BibliotecaProvider from './context/BibliotecaContext'
import UsuarioProvider from './context/UsuarioContext'

import Navbar from './components/nav/Nav'
import FormLibros from './pages/FormLibros'
import Biblioteca from './pages/Biblioteca'
import GetStarted from './pages/GetStarted'
import Register from './pages/Resgister'

import './index.css'
import '@picocss/pico'

const router = createBrowserRouter([
    {
        element: <Navbar />,
        children: [
            { path: '/', element: <h1>Home</h1> },
            { path: '/biblioteca', element: <Biblioteca /> },
            { path: '/misLibros', element: <h1>Mis libros</h1> },
            { path: '/addLibros', element: <FormLibros /> },
            { path: '/getStarted', element: <GetStarted /> },
            { path: '/register', element: <Register /> },
        ],
    },
])

//contexto a todas las rutas
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <UsuarioProvider>
            <BibliotecaProvider>
                <RouterProvider router={router} />
            </BibliotecaProvider>
        </UsuarioProvider>
    </React.StrictMode>
)
