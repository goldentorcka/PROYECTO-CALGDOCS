import { Button } from "bootstrap";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const FormUsers = ({ buttonForm, user, URI, updateTextButton }) => {

    const [documento, setDocumento] = useState('')
    const [nombres, setNombres] = useState('')
    const [apellidos, setApellidos] = useState('')
    const [correo, setCorreo ] = useState('')
    const [direccion, setDireccion ] = useState('')
    const [tipo_de_usuario, setTipo_de_usuario] = useState('')

    

    const sendForm = (e) => {
        e.preventDefault()
        if (buttonForm == 'Actualizar') {
            console.log('Actualizando ando...')
            axios.put(URI + user.id, {
                documento: documento,
                nombres: nombres,
                apellidos: apellidos,
                correo: correo,
                direccion: direccion,
                tipo_de_usuario: tipo_de_usuario
            })

            updateTextButton('Enviar')
            clearForm()

        } else if(buttonForm == 'Enviar') {
            console.log('Guardando ando')
            axios.post(URI, {
                documento: documento,
                nombres: nombres,
                apellidos: apellidos,
                correo: correo,
                direccion: direccion,
                tipo_de_usuario: tipo_de_usuario
            })

            clearForm()
        }
    }

    const clearForm = () => {
        setDocumento('')
        setNombres('')
        setApellidos('')
        setCorreo('')
        setDireccion('')
        setTipo_de_usuario('')
    }

    const setData = () => {
        setDocumento(user.documento)
        setNombres(user.nombres)
        setApellidos(user.apellidos)
        setCorreo(user.correo)
        setDireccion(user.direccion)
        setTipo_de_usuario(user.tipo_de_usuario)
    }

    useEffect(() => {
        setData()
    }, [user])
 
    return (
        <>
            <form id="userForm" action="" onSubmit={sendForm}>
                <label htmlFor="documento">Documento</label>

                <input type="text" id="documento" value={documento} onChange={(e) => setDocumento(e.target.value)} />
                <br /> 
                <label htmlFor="nombres">Nombres</label>
                <input type="text" id="nombres" value={nombres} onChange={(e) => setNombres(e.target.value)} />
                <br />
                <label htmlFor="apellidos">Apellidos</label>
                <input type="text" id="apellidos" value={apellidos} onChange={(e) => setApellidos(e.target.value)} />
                <br />
                <label htmlFor="correo">Correo</label>
                <input type="text" id="correo" value={correo} onChange={(e) => setCorreo(e.target.value)} />
                <br />
                <label htmlFor="direccion">Direccion</label>
                <input type="text" id="direccion" value={direccion} onChange={(e) => setDireccion(e.target.value)} />
                <br />
                <label htmlFor="tipo_de_usuario">Tipo de Usuario</label>
                <select name="" id="tipo_de_usuario" value={tipo_de_usuario} onChange={(e) => setTipo_de_usuario(e.target.value)}>
                    <option value="">Selecciona uno...</option>
                    <option value="Usuario Normal">Usuario Normal</option>
                    <option value="Usuario Administrador">Usuario Administrador</option>
                    <option value="Otro">Otro</option>
                </select>
                <br />
                
                <input type="submit" id="boton" value={buttonForm} className="btn btn_success" />
            </form>
        </>
    )
}

export default FormUsers