import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const Navbar = () => {
  return (
    
    <nav>
        <ul className='brand'><strong>Fullstack</strong></ul>
        <ul>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/biblioteca'}>Biblioteca</Link></li>
            <li><Link to={'/misLibros'}>Mis libros</Link></li>
            <li><Link to={'/addLibros'}>Añadir Libro</Link></li>
            <li><Link to={'/getStarted'} role='button'>Get Started</Link></li>
        </ul>   
    </nav>
  )
}

 export default () => (
    <>
      <div className='contenedor'>
        <Navbar />
      </div>
      <div className='contenedor'>
        <Outlet />
      </div>
    </>
);
