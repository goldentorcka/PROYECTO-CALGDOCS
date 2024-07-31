import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MainContent from './components/MainContent';
import "/VITE-REACT-MYSQL/torneo-sena-mysql/estilos/estilosapp.css"
// import { useState } from 'react'
// import { Routes, Route, Link} from 'react-router-dom'
// import Home from './home/Home.jsx'
// // import Home from './administrator/administrator.jsx'
// import CrudUsers from './users/crudUsers.jsx'
// import CrudFormats from './Format/crudFormat.jsx'
// import AdministratorLogin from './administrator/administrator.jsx'

function App() {
  return (
    <>
      <div className="app">
          <Sidebar />
          <div className="wrapper">
            <Header />
            <MainContent />
          </div>
      </div>
    </>
  )
}
export default App;
