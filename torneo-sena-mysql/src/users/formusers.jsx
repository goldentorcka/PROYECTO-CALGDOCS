import { Button } from "bootstrap";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import "/VITE-REACT-MYSQL/torneo-sena-mysql/estilos/estilosformuser.css"

const FormUsers = ({ buttonForm, user, URI, updateTextButton }) => {

    const [Doc_User, setDoc_User] = useState('')
    const [Nom_User, setNom_User] = useState('')
    const [Ape_User, setApe_User] = useState('')
    const [Cor_User, setCor_User ] = useState('')
    const [Pas_User, setPas_User] = useState('')
    const [Nom_Usuario, setNom_Usuario ] = useState('')
    const [Fec_User, setFec_User] = useState('')
    
    
 
    const sendForm = (e) => {
        e.preventDefault()
        if (buttonForm == 'Actualizar') {
            console.log('Actualizando ando...')
            axios.put(URI + user.id, {
                Doc_User: Doc_User,
                Nom_User: Nom_User,
                Ape_User: Ape_User,
                Cor_User: Cor_User,
                Pas_User: Pas_User,
                Nom_Usuario: Nom_Usuario,
                Fec_User: Fec_User
            })

            updateTextButton('Enviar')
            clearForm()

        } else if(buttonForm == 'Enviar') {
            console.log('Guardando ando')
            axios.post(URI, {
            
                Doc_User: Doc_User,
                Nom_User: Nom_User,
                Ape_User: Ape_User,
                Cor_User: Cor_User,
                Pas_User: Pas_User,
                Nom_Usuario: Nom_Usuario,
                Fec_User: Fec_User
            })

            clearForm()
        }
    }

    const clearForm = () => {
        setDoc_User('')
        setNom_User('')
        setApe_User('')
        setCor_User('')
        setPas_User('')
        setNom_Usuario('')
        setFec_User('')
    }

    const setData = () => {
        setDoc_User(user.Doc_User)
        setNom_User(user.Nom_User)
        setApe_User(user.Ape_User)
        setCor_User(user.Cor_User)
        setPas_User(user.Pas_User)
        setNom_Usuario(user.Nom_Usuario)
        setFec_User(user.Fec_User)
    }

    useEffect(() => {
        setData()
    }, [user])
 
    return (
        <>
            <div className="container">
                <form id="userForm" action="" onSubmit={sendForm}>
                    <label htmlFor="documento">Documento</label>

                    <input type="text" id="documento" value={Doc_User} onChange={(e) => setDoc_User(e.target.value)} />
                    <br /> 
                    <label htmlFor="nombres">Nombres</label>
                    <input type="text" id="nombres" value={Nom_User} onChange={(e) => setNom_User(e.target.value)} />
                    <br />
                    <label htmlFor="apellidos">Apellidos</label>
                    <input type="text" id="apellidos" value={Ape_User} onChange={(e) => setApe_User(e.target.value)} />
                    <br />
                    <label htmlFor="correo">Correo</label>
                    <input type="text" id="correo" value={Cor_User} onChange={(e) => setCor_User(e.target.value)} />
                    <br />
                    <label htmlFor="contraseña">Contraseña</label>
                    <input type="text" id="contraseña" value={Pas_User} onChange={(e) => setPas_User(e.target.value)} />
                    <br />
                    <label htmlFor="nombres_de_Usuario">Nombre de Usuario</label>
                    <input type="text" id="nombres_de_Usuario" value={Nom_Usuario} onChange={(e) => setNom_Usuario(e.target.value)} />
                    <br />
                    <label htmlFor="fecha_de_Creacion">Fecha de Creacion</label>
                    <input type="date" id="fecha_de_Creacion" value={Fec_User} onChange={(e) => setFec_User(e.target.value)} />
                    <br />
                    
                    <input type="submit" id="boton" value={buttonForm} className="btn btn_success" />
                </form>
            </div>
        </>
    )
}

export default FormUsers