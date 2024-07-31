import React from 'react';
import "/VITE-REACT-MYSQL/torneo-sena-mysql/estilos/estilosAdmministrator.css";

const AdministratorLogin = () => {
  return (
    <div className="admin-container">
      <div className="sidebar">
        <h2>Administrador</h2>
        <ul>
          <li>Formatos</li>
          <li>Procesos</li>
          <li>Procedimientos</li>
          <li>Unidades</li>
          <li>Áreas</li>
          <li>Usuarios</li>
        </ul>
      </div>
      <div className="main-content">
        <h1>Bienvenido, Administrador</h1>
        <p>Aquí puedes gestionar todos los componentes de la aplicación.</p>
        {/* Aquí puedes agregar el contenido dinámico según la selección en la barra lateral */}
      </div>
    </div>
  );
};

export default AdministratorLogin;
