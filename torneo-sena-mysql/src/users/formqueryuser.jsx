import axios from "axios"
import { useEffect, useState } from "react"
import "/VITE-REACT-MYSQL/torneo-sena-mysql/estilos/estilosformqueryuser.css"

const FormQueryUser = ({ URI, getUser, deleteUser, buttonForm }) => {
    const [userQuery, setUserQuery] = useState([])
    const [documento, setDocumento] = useState('')

    const sendFormQuery = async (documento) => {
 

        if (documento) {
            const respuesta = await axios.get(URI + 'documento/' + documento)
            console.log(respuesta.data)

            setUserQuery(
                respuesta.data
            )

            console.log(userQuery.length)
        } else {
            setUserQuery([])
        }
    }

    useEffect(() => {
        setUserQuery([])
        setDocumento('')
    }, [buttonForm])

    return (
        <>
            <form action="" id="querfForm">
                <label htmlFor="documentoQuery">Documento</label>
                <input type="number" id="documentoQuery" value={documento} onChange={(e) => { sendFormQuery(e.target.value);
                setDocumento(e.target.value) }} />
            </form>


            {   
                userQuery.length > 0 ?<table>
                    <thead>
                        <tr>
                            <th>Documento</th>
                            <th>Nombres</th>
                            <th>Apellidos</th>
                            <th>Correo</th>
                            <th>Contraseña</th>
                            <th>Nombre de Usuario</th>
                            <th>Fecha de Creacion</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userQuery.map((user) => (
                            <tr key={user.id}>
                                <td>{user.Doc_User}</td>
                                <td>{user.Nom_User}</td>
                                <td>{user.Ape_User}</td>
                                <td>{user.Cor_User}</td>
                                <td>{user.Pas_User}</td>
                                <td>{user.Nom_Usuario}</td>
                                <td>{user.Fec_Creacion}</td>
                                <td>
                                    <button onClick={() => deleteUser(user.id)}>Eliminar</button>
                                    <button onClick={() => getUser(user.id)}>Editar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table> : ''
            }
        </>
    )
}

export default FormQueryUser