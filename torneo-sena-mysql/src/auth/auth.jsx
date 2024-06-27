import axios from "axios";
import { useState } from "react";

const URI_AUTH = 'http://localhost:8000/auth'

const Auth = () => {
    const [name, SetnName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [buttonForm, setbuttonForm] = useState('Registrar')

    const sendForm = async (e) => {
        e.preventDefaul()
        if (buttonForm == 'Registrar') {
            console.log('Registrando ando ...')

            await axios.post(URI_AUTH, {
                name: name,
                email: email,
                password: password
            })
        }
    }
}