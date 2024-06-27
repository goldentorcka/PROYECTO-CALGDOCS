import { useState } from 'react'
import { Routes, Route, Link} from 'react-router-dom'
import Home from './home/Home.jsx'
import CrudUsers from './users/crudUsers.jsx'
import CrudFormats from './Format/crudFormat.jsx'
import "/VITE-REACT-MYSQL/torneo-sena-mysql/estilos/estilosapp.css"

function App() {
  

  return (
    <>
      <div className='container'>
        <nav>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/users">Usuarios</Link>
            </li>
            <li>
              <Link to="/formatos">Formato</Link>
            </li>
            <li>
              <Link to="/auth">Sesion</Link>
            </li>
            <li>
              <Link to="/administrador">Modulo Administrador</Link>
            </li>
            <li>
              <Link to="/consulta">Modulo Consulta</Link>
            </li>
          </ul>
        </nav>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<CrudUsers />} />
          <Route path="/formatos" element={<CrudFormats />} />
        </Routes>
      </div>
    </>
  )
}

export default App
