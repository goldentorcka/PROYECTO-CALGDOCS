import { Button } from "bootstrap";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import "/VITE-REACT-MYSQL/torneo-sena-mysql/estilos/estilosformuser.css";

const FormFormat = ({ buttonForm, formato, URI, updateTextButton }) => {
  // Estados para almacenar los valores del formulario
  const [nomFormato, setNomFormato] = useState("");
  const [codFormato, setCodFormato] = useState("");
  const [verFormato, setVerFormato] = useState("");
  const [estFormato, setEstFormato] = useState("");
  const [idResponsable, setIdResponsable] = useState("");
  const [archivo, setArchivo] = useState(null); // Estado para almacenar el archivo
  const [nomMagnetico, setNomMagnetico] = useState("");
  const [fecActualizacion, setFecActualizacion] = useState("");
  const [idProcedimiento, setIdProcedimiento] = useState("");
  const [idUnidad, setIdUnidad] = useState("");
  const fileInputRef = useRef(null); // Referencia al input de archivo

  // Función para manejar el envío del formulario
  const sendForm = async (e) => {
    e.preventDefault(); // Previene el comportamiento por defecto del formulario (recargar la página).

    setLoading(true); // Activa el estado de carga
    setError(null); // Limpia el estado de errores

    try {
      if (buttonForm === "Actualizar") {
        // Verifica si el botón tiene la etiqueta "Actualizar".
        console.log("Actualizando ando..."); // Mensaje en consola para depuración.

        // Realiza una solicitud PUT a la API para actualizar un formato existente.
        await axios.put(URI + formato.id, {
          nom_formato: nomFormato, // Nombre del formato.
          cod_formato: codFormato, // Código del formato.
          ver_formato: verFormato, // Versión del formato.
          est_formato: estFormato, // Estado del formato.
          id_responsable: idResponsable, // ID del responsable del formato.
          archivo: archivo, // El archivo no se envía en el PUT, solo en el POST.
          nom_magnetico: nomMagnetico, // Nombre magnético del formato.
          fec_actualizacion: fecActualizacion, // Fecha de actualización del formato.
          id_procedimiento: idProcedimiento, // ID del procedimiento asociado.
          id_unidad: idUnidad, // ID de la unidad asociada.
        });

        updateTextButton("Enviar"); // Cambia el texto del botón a "Enviar".
        clearForm(); // Limpia el formulario.
      } else if (buttonForm === "Enviar") {
        // Verifica si el botón tiene la etiqueta "Enviar".
        console.log("Guardando ando"); // Mensaje en consola para depuración.

        // Crea un nuevo objeto FormData para enviar datos de formulario multipart/form-data.
        const formData = new FormData();
        formData.append("nom_formato", nomFormato); // Añade el nombre del formato.
        formData.append("cod_formato", codFormato); // Añade el código del formato.
        formData.append("ver_formato", verFormato); // Añade la versión del formato.
        formData.append("est_formato", estFormato); // Añade el estado del formato.
        formData.append("id_responsable", idResponsable); // Añade el ID del responsable.
        formData.append("archivo", archivo); // Añade el archivo al FormData.
        formData.append("nom_magnetico", nomMagnetico); // Añade el nombre magnético del formato.
        formData.append("fec_actualizacion", fecActualizacion); // Añade la fecha de actualización.
        formData.append("id_procedimiento", idProcedimiento); // Añade el ID del procedimiento.
        formData.append("id_unidad", idUnidad); // Añade el ID de la unidad.

        // Realiza una solicitud POST a la API para crear un nuevo formato.
        await axios.post(URI, formData, {
          headers: {
            "Content-Type": "multipart/form-data", // Configura el encabezado para enviar datos multipart/form-data.
          },
        });

        clearForm(); // Limpia el formulario.
      }
    } catch (error) {
      console.error("Error durante la solicitud:", error); // Mensaje en consola en caso de error.
      setError(error.message); // Guarda el mensaje de error en el estado.
    } finally {
      setLoading(false); // Desactiva el estado de carga después de la solicitud.
    }
  };

  // Función para limpiar los campos del formulario
  const clearForm = () => {
    setNomFormato(""); // Limpia el nombre del formato.
    setCodFormato(""); // Limpia el código del formato.
    setVerFormato(""); // Limpia la versión del formato.
    setEstFormato(""); // Limpia el estado del formato.
    setIdResponsable(""); // Limpia el ID del responsable.
    setArchivo(null); // Resetea el archivo
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // Limpia el valor del input de archivo.
    }
    setNomMagnetico(""); // Limpia el nombre magnético.
    setFecActualizacion(""); // Limpia la fecha de actualización.
    setIdProcedimiento(""); // Limpia el ID del procedimiento.
    setIdUnidad(""); // Limpia el ID de la unidad.
  };

  // Función para establecer los datos del formato cuando cambia
  const setData = () => {
    setNomFormato(formato.nom_formato); // Establece el nombre del formato.
    setCodFormato(formato.cod_formato); // Establece el código del formato.
    setVerFormato(formato.ver_formato); // Establece la versión del formato.
    setEstFormato(formato.est_formato); // Establece el estado del formato.
    setIdResponsable(formato.id_responsable); // Establece el ID del responsable.
    // Aquí debes manejar la lógica para setear el archivo si es necesario.
    setNomMagnetico(formato.nom_magnetico); // Establece el nombre magnético.
    setFecActualizacion(formato.fec_actualizacion); // Establece la fecha de actualización.
    setIdProcedimiento(formato.id_procedimiento); // Establece el ID del procedimiento.
    setIdUnidad(formato.id_unidad); // Establece el ID de la unidad.
  };

  useEffect(() => {
    setData(); // Actualiza los datos del formulario cuando el formato cambia.
  }, [formato]); // Dependencia en formato, se ejecuta cada vez que formato cambia.

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
          <label htmlFor="archivo">Archivo</label>
          <input
            type="file"
            id="archivo"
            ref={fileInputRef} // Referencia al input de archivo
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

export default FormFormat;
