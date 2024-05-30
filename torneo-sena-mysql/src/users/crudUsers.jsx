import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import FormUsers from './formusers'
import Swal from 'sweetalert2';
import FormQueryUser from './formqueryuser'


const URI = 'http://localhost:8000/users/'

const CrudUsers = () => {

    const [usersList, setUserList] = useState([])
    const [buttonForm, setButtonForm] = useState('Enviar')

    const [user, setUser] = useState({
        id: '',
        documento: '',
        nombres: '',
        apellidos: '', 
        correo: '',
        direccion: '',
        tipo_de_usuario: ''
    })

    
    useEffect(() => {
        getAllUsers()
    }, [usersList])


    const getAllUsers = async () => {
        const respuesta = await axios.get(URI)
        setUserList(respuesta.data)
    }

    
    const getUser = async (idUser) => {
        setButtonForm('Enviar')
        const respuesta = await axios.get(URI + idUser)
        setButtonForm('Actualizar')
        setUser({
            ...respuesta.data
        })
    }

    const updateTextButton = (texto) => {
        setButtonForm(texto)
    }

    const deleteUser = (idUser) => {
        Swal.fire({
            title: "Perrito estas seguro?",
            text: "No podras revertir esto!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then(async(result) => {
            if (result.isConfirmed) {
                await axios.delete(URI + idUser)
              Swal.fire({
                title: "Borrado!",
                text: "El registro ha sido borrado.",
                icon: "success"
              });
            }
          });
    }

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Documento</th>
                        <th>Nombres</th>
                        <th>Apellidos</th>
                        <th>Correo</th>
                        <th>Direccion</th>
                        <th>Tipo-de-Usuario</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {usersList.map((user) => (
                        <tr key={user.id}>
                            <td>{user.documento}</td>
                            <td>{user.nombres}</td>
                            <td>{user.apellidos}</td>
                            <td>{user.correo}</td>
                            <td>{user.direccion}</td>
                            <td>{user.tipo_de_usuario}</td>
                            <td>
                                <button onClick={() => getUser(user.id)}>Editar</button>
                                <button onClick={() => deleteUser(user.id)}>Borrar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <hr />
            <FormUsers buttonForm={buttonForm} user={user} URI={URI} updateTextButton={updateTextButton} />
            <hr />
            <FormQueryUser URI={URI} getUser={getUser} deleteUser={deleteUser} buttonForm={buttonForm} />
        </>
    )
}
export default CrudUsers