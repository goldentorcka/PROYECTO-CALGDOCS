import axios from "axios";
import { useEffect, useState } from "react";

const FormQueryFormat = ({ URI, getFormato, deleteFormato, buttonForm }) => {
    const [formatoQuery, setFormatoQuery] = useState([]);
    const [nomFormato, setNomFormato] = useState('');

    const sendFormQuery = async (nomFormato) => {
        if (nomFormato) {
            const respuesta = await axios.get(URI + 'nombre/' + nomFormato);
            console.log(respuesta.data);

            setFormatoQuery(
                respuesta.data
            );

            console.log(formatoQuery.length);
        } else {
            setFormatoQuery([]);
        }
    };

    useEffect(() => {
        setFormatoQuery([]);
        setNomFormato('');
    }, [buttonForm]);

    return (
        <>
            <form action="" id="queryForm">
                <label htmlFor="nombreFormatoQuery">Nombre del Formato</label>
                <input type="text" id="nombreFormatoQuery" value={nomFormato} onChange={(e) => { 
                    sendFormQuery(e.target.value);
                    setNomFormato(e.target.value); 
                }} />
            </form>

            {   
                formatoQuery.length > 0 ? 
                <table>
                    <thead>
                        <tr>
                            <th>Nombre Formato</th>
                            <th>Código Formato</th>
                            <th>Versión Formato</th>
                            <th>Estado Formato</th>
                            <th>ID Responsable</th>
                            <th>Nombre Magnético</th>
                            <th>Fecha Actualización</th>
                            <th>ID Procedimiento</th>
                            <th>ID Unidad</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {formatoQuery.map((formato) => (
                            <tr key={formato.id_formato}>
                                <td>{formato.nom_formato}</td>
                                <td>{formato.cod_formato}</td>
                                <td>{formato.ver_formato}</td>
                                <td>{formato.est_formato}</td>
                                <td>{formato.id_responsable}</td>
                                <td>{formato.nom_magnetico}</td>
                                <td>{formato.fec_actualizacion}</td>
                                <td>{formato.id_procedimiento}</td>
                                <td>{formato.id_unidad}</td>
                                <td>
                                    <button onClick={() => deleteFormato(formato.id_formato)}>Eliminar</button>
                                    <button onClick={() => getFormato(formato.id_formato)}>Editar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table> : ''
            }
        </>
    );
}

export default FormQueryFormat;
