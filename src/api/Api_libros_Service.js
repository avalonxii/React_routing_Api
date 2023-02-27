import axios from 'axios'

const baseUrl = 'http://localhost:3001/api/libros/'

export const getAllLibros = () => axios.get(baseUrl).then(res => res.data)

export const addLibro = (newLibro) => axios.post(baseUrl, newLibro)

export const deleteLibro = (id) => axios.delete(`${baseUrl}${id}`)

export const editLibro = (id, updatelibro) => axios.put(`${baseUrl}${id}`, updatelibro)
