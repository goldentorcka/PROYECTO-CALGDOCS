import { Button } from "bootstrap";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import "/VITE-REACT-MYSQL/torneo-sena-mysql/estilos/estilosformuser.css";

const formFormat = ({ buttonForm, formato, URI, updateTextButton }) => {
    const [nomFormato, setNomFormato] = useState("");
    const [codFormato, setCodFormato] = useState("");
    const [verFormato, setVerFormato] = useState("");
    const [estFormato, setEstFormato] = useState("");
    const [idResponsable, setIdResponsable] = useState("");
    const [archivo, setArchivo] = useState(null); // Cambiado a null para manejar archivos
    const [nomMagnetico, setNomMagnetico] = useState("");
    const [fecActualizacion, setFecActualizacion] = useState("");
    const [idProcedimiento, setIdProcedimiento] = useState("");
    const [idUnidad, setIdUnidad] = useState("");

    const sendForm = async (e) => {
        e.preventDefault();

        if (buttonForm === "Actualizar") {
            console.log("Actualizando...");
            await axios.put(URI + formato.id_formato, {
                nom_formato: nomFormato,
                cod_formato: codFormato,
                ver_formato: verFormato,
                est_formato: estFormato,
                id_responsable: idResponsable,
                archivo: archivo,
                nom_magnetico: nomMagnetico,
                fec_actualizacion: fecActualizacion,
                id_procedimiento: idProcedimiento,
                id_unidad: idUnidad,
            });

            updateTextButton("Enviar");
            clearForm();
        } else if (buttonForm === "Enviar") {
            console.log("Guardando...");
            const formData = new FormData();
            formData.append("nom_formato", nomFormato);
            formData.append("cod_formato", codFormato);
            formData.append("ver_formato", verFormato);
            formData.append("est_formato", estFormato);
            formData.append("id_responsable", idResponsable);
            formData.append("archivo", archivo); // Asegúrate de tener la lógica adecuada para subir archivos
            formData.append("nom_magnetico", nomMagnetico);
            formData.append("fec_actualizacion", fecActualizacion);
            formData.append("id_procedimiento", idProcedimiento);
            formData.append("id_unidad", idUnidad);

            await axios.post(URI, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            clearForm();
        }
    };

    const clearForm = () => {
        setNomFormato("");
        setCodFormato("");
        setVerFormato("");
        setEstFormato("");
        setIdResponsable("");
        setArchivo(null);
        setNomMagnetico("");
        setFecActualizacion("");
        setIdProcedimiento("");
        setIdUnidad("");
    };

    const setData = () => {
        setNomFormato(formato.nom_formato);
        setCodFormato(formato.cod_formato);
        setVerFormato(formato.ver_formato);
        setEstFormato(formato.est_formato);
        setIdResponsable(formato.id_responsable);
        // Aquí debes manejar la lógica para setear el archivo si es necesario
        setNomMagnetico(formato.nom_magnetico);
        setFecActualizacion(formato.fec_actualizacion);
        setIdProcedimiento(formato.id_procedimiento);
        setIdUnidad(formato.id_unidad);
    };

    useEffect(() => {
        setData();
    }, [formato]);

    return (
        <>
            <div className="container">
                <form id="formatoForm" action="" onSubmit={sendForm}>
                    <label htmlFor="nom_formato">Nombre del Formato</label>
                    <input
                        type="text"
                        id="nom_formato"
                        value={nomFormato}
                        onChange={(e) => setNomFormato(e.target.value)}
                    />
                    <br />
                    <label htmlFor="cod_formato">Código del Formato</label>
                    <input
                        type="text"
                        id="cod_formato"
                        value={codFormato}
                        onChange={(e) => setCodFormato(e.target.value)}
                    />
                    <br />
                    <label htmlFor="ver_formato">Versión del Formato</label>
                    <input
                        type="text"
                        id="ver_formato"
                        value={verFormato}
                        onChange={(e) => setVerFormato(e.target.value)}
                    />
                    <br />
                    <label htmlFor="est_formato">Estado del Formato</label>
                    <input
                        type="text"
                        id="est_formato"
                        value={estFormato}
                        onChange={(e) => setEstFormato(e.target.value)}
                    />
                    <br />
                    <label htmlFor="id_responsable">ID Responsable</label>
                    <input
                        type="text"
                        id="id_responsable"
                        value={idResponsable}
                        onChange={(e) => setIdResponsable(e.target.value)}
                    />
                    <br />
                    {/* Aquí debe ir la lógica para subir archivos si es necesario */}
                    <label htmlFor="archivo">Archivo</label>
                    <input
                        type="file"
                        id="archivo"
                        onChange={(e) => setArchivo(e.target.files[0])}
                    />
                    <br />
                    <label htmlFor="nom_magnetico">Nombre Magnético</label>
                    <input
                        type="text"
                        id="nom_magnetico"
                        value={nomMagnetico}
                        onChange={(e) => setNomMagnetico(e.target.value)}
                    />
                    <br />
                    <label htmlFor="fec_actualizacion">Fecha de Actualización</label>
                    <input
                        type="date"
                        id="fec_actualizacion"
                        value={fecActualizacion}
                        onChange={(e) => setFecActualizacion(e.target.value)}
                    />
                    <br />
                    <label htmlFor="id_procedimiento">ID Procedimiento</label>
                    <input
                        type="text"
                        id="id_procedimiento"
                        value={idProcedimiento}
                        onChange={(e) => setIdProcedimiento(e.target.value)}
                    />
                    <br />
                    <label htmlFor="id_unidad">ID Unidad</label>
                    <input
                        type="text"
                        id="id_unidad"
                        value={idUnidad}
                        onChange={(e) => setIdUnidad(e.target.value)}
                    />
                    <br />

                    <input
                        type="submit"
                        id="boton"
                        value={buttonForm}
                        className="btn btn-primary"
                    />
                </form>
            </div>
        </>
    );
};

export default formFormat;
