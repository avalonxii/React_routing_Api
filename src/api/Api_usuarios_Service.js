import axios from 'axios'

const baseUrl = 'http://localhost:3001/api/usuarios/'

export const getAllUsuarios = () => axios.get(baseUrl).then(res => res.data)

export const addUsuario = (newUsuario) => axios.post(baseUrl, newUsuario)

export const deleteUsuario = (id) => axios.delete(`${baseUrl}${id}`)

export const editUsuario= (id, updateUsuario) => axios.put(`${baseUrl}${id}`, updateUsuario)