import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import FormUsers from "./formusers.jsx";
import FormQueryUser from "./formqueryuser.jsx";
import "/VITE-REACT-MYSQL/torneo-sena-mysql/estilos/estiloscrudUsers.css";

const URI = "http://localhost:8000/users/";

const CrudUsers = () => {
  const [usersList, setUserList] = useState([]);
  const [buttonForm, setButtonForm] = useState("Enviar");

  const [user, setUser] = useState({
    id: "",
    Nom_Usuario: "",
    Cor_Usuario: "",
    Pas_Usuario: "",
    Fch_Creacion: "",
  });

  useEffect(() => {
    getAllUsers();
  }, [usersList]);

  const getAllUsers = async () => {
    const respuesta = await axios.get(URI);
    setUserList(respuesta.data);
  };

  const getUser = async (id) => {
    setButtonForm("Enviar");
    const respuesta = await axios.get(URI + id);
    setButtonForm("Actualizar");
    setUser({
      ...respuesta.data,
    });
  };

  const updateTextButton = (texto) => {
    setButtonForm(texto);
  };

  const deleteUser = (id) => {
    Swal.fire({
      title: "¿Estas seguro?",
      text: "No podras revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axios.delete(URI + id);
        Swal.fire({
          title: "Borrado!",
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
              <th>Nombres</th>
              <th>Correo</th>
              <th>Contraseña</th>
              <th>Fecha de Creacion</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {usersList.map((user) => (
              <tr key={user.id}>
                <td>{user.Nom_Usuario}</td>
                <td>{user.Cor_Usuario}</td>
                <td>{user.Pas_Usuario}</td>
                <td>{user.Fch_Creacion}</td>
                <td>
                  <button onClick={() => getUser(user.id)}>Editar</button>
                  <button onClick={() => deleteUser(user.id)}>Borrar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <hr />
        <FormUsers
          buttonForm={buttonForm}
          user={user}
          URI={URI}
          updateTextButton={updateTextButton}
        />
        <hr />
        <FormQueryUser
          URI={URI}
          getUser={getUser}
          deleteUser={deleteUser}
          buttonForm={buttonForm}
        />
      </div>
    </>
  );
};
export default CrudUsers;
