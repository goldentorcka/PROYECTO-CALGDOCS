import { Button } from "bootstrap";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const FormUnidad = ({ buttonForm, unidad, URI, updateTextButton }) => {
    const [ nombre, setNombres ] = useState('')
}
    const sendForm = (e) => {
        e.preventDefault()
        if (buttonForm == 'Actualizar') {
            console.log('Actualizando ando...')
            axios.put(URI + unidad.id, {
                nombre: nombre
            })

            updateTextButton('Enviar')
            clearForm()

        } else if(buttonForm == 'Enviar') {
            console.log('Enviando ando...')
            axios.post(URI, {
                nombre: nombre
            })

            clearForm()
        }
    }


    const clearForm = () => {
        setNombres('')
    }

    const setData = () => {
        setNombres(unidad.nombre)
    }

    useEffect(() => {
        setData()
    }, [unidad])

    


