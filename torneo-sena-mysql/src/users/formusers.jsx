import { Button } from "bootstrap";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import "/VITE-REACT-MYSQL/torneo-sena-mysql/estilos/estilosformuser.css";

const FormUsers = ({ buttonForm, user, URI, updateTextButton }) => {
  const [Nom_Usuario, setNom_Usuario] = useState("");
  const [Cor_Usuario, setCor_Usuario] = useState("");
  const [Pas_Usuario, setPas_Usuario] = useState("");
  const [Fch_Creacion, setFch_Creacion] = useState("");

  const sendForm = (e) => {
    e.preventDefault();
    if (buttonForm == "Actualizar") {
      console.log("Actualizando ando...");
      axios.put(URI + user.id, {
        Nom_Usuario: Nom_Usuario,
        Cor_Usuario: Cor_Usuario,
        Pas_Usuario: Pas_Usuario,
        Fch_Creacion: Fch_Creacion,
      });

      updateTextButton("Enviar");
      clearForm();
    } else if (buttonForm == "Enviar") {
      console.log("Guardando ando");
      axios.post(URI, {
        Nom_Usuario: Nom_Usuario,
        Cor_Usuario: Cor_Usuario,
        Pas_Usuario: Pas_Usuario,
        Fch_Creacion: Fch_Creacion,
      });

      clearForm();
    }
  };

  const clearForm = () => {
    setNom_Usuario("");
    setCor_Usuario("");
    setPas_Usuario("");
    setFch_Creacion("");
  };

  const setData = () => {
    setNom_Usuario(user.Nom_Usuario);
    setCor_Usuario(user.Cor_Usuario);
    setPas_Usuario(user.Pas_Usuario);
    setFch_Creacion(user.Fch_Creacion);
  };

  useEffect(() => {
    setData();
  }, [user]);

  return (
    <>
      <div className="container">
        <form id="userForm" action="" onSubmit={sendForm}>
          <label htmlFor="documento">Documento</label>

          <input
            type="text"
            id="documento"
            value={Doc_User}
            onChange={(e) => setDoc_User(e.target.value)}
          />
          <br />
          <label htmlFor="nombres">Nombres</label>
          <input
            type="text"
            id="nombres"
            value={Nom_User}
            onChange={(e) => setNom_User(e.target.value)}
          />
          <br />
          <label htmlFor="apellidos">Apellidos</label>
          <input
            type="text"
            id="apellidos"
            value={Ape_User}
            onChange={(e) => setApe_User(e.target.value)}
          />
          <br />
          <label htmlFor="correo">Correo</label>
          <input
            type="text"
            id="correo"
            value={Cor_User}
            onChange={(e) => setCor_User(e.target.value)}
          />
          <br />
          <label htmlFor="contraseña">Contraseña</label>
          <input
            type="text"
            id="contraseña"
            value={Pas_User}
            onChange={(e) => setPas_User(e.target.value)}
          />
          <br />
          <label htmlFor="nombres_de_Usuario">Nombre de Usuario</label>
          <input
            type="text"
            id="nombres_de_Usuario"
            value={Nom_Usuario}
            onChange={(e) => setNom_Usuario(e.target.value)}
          />
          <br />
          <label htmlFor="fecha_de_Creacion">Fecha de Creacion</label>
          <input
            type="date"
            id="fecha_de_Creacion"
            value={Fec_User}
            onChange={(e) => setFec_User(e.target.value)}
          />
          <br />

          <input
            type="submit"
            id="boton"
            value={buttonForm}
            className="btn_btn_success"
          />
        </form>
      </div>
    </>
  );
};

export default FormUsers;
