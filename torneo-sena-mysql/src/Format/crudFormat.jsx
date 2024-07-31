import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import formFormat from "./formFormat.jsx";
import FormQueryFormat from "./formqueryFormat.jsx";

const URI = "http://localhost:8000/formatos/";

const CrudFormats = () => {
  const [formatosList, setFormatosList] = useState([]);
  const [buttonForm, setButtonForm] = useState("Enviar");

  const [formato, setFormato] = useState({
    id: "",
    nom_formato: "",
    cod_formato: "",
    ver_formato: "",
    est_formato: "",
    id_responsable: "",
    archivo: "",
    nom_magnetico: "",
    fec_actualizacion: "",
    id_procedimiento: "",
    id_unidad: "",
  });

  useEffect(() => {
    getAllFormatos();
  }, [formatosList]);

  const getAllFormatos = async () => {
    const respuesta = await axios.get(URI);
    setFormatosList(respuesta.data);
  };

  const getFormato = async (id) => {
    setButtonForm("Enviar");
    const respuesta = await axios.get(URI + id);
    setButtonForm("Actualizar");
    setFormato({
      ...respuesta.data,
    });
  };

  const updateTextButton = (texto) => {
    setButtonForm(texto);
  };

  const deleteFormato = (id) => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "¡No podrás revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, bórralo!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axios.delete(URI + id);
        Swal.fire({
          title: "¡Borrado!",
          text: "El registro ha sido borrado.",
          icon: "success",
        });
      }
    });
  };

  return (
    <>
      <div className="container">
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
            {formatosList.map((formato) => (
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
                  <button onClick={() => getFormato(formato.id_formato)}>
                    Editar
                  </button>
                  <button onClick={() => deleteFormato(formato.id_formato)}>
                    Borrar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <hr />
        <formFormat
          buttonForm={buttonForm}
          formato={formato}
          URI={URI}
          updateTextButton={updateTextButton}
        />
        <hr />
        <FormQueryFormat
          URI={URI}
          getFormato={getFormato}
          deleteFormato={deleteFormato}
          buttonForm={buttonForm}
        />
      </div>
    </>
  );
};

export default CrudFormats;
