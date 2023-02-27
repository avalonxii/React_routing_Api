import React from 'react'

export default function Card({ libro }) {
    return (
        <article className='card'>
            <header className="cardSpace">
              <strong>{libro.titulo}</strong>
                {libro.genero}
            </header>

            {libro.resumen}

            <footer className="cardSpace">
                <strong>{libro.autor}</strong>
                <strong>{libro.date}</strong>
            </footer>
        </article>
    )
}
