import { useState } from 'react'
import { Routes, Route, Link} from 'react-router-dom'
import Home from './home/Home.jsx'
import CrudUsers from './users/crudUsers.jsx'

function App() {
  

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/users">Usuarios</Link>
          </li>
          <li>
            <Link to="/areas">Areas</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<CrudUsers />} />
        
      
      </Routes>
    </>
  )
}

export default App
