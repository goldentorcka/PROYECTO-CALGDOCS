import React from 'react';
import { CNavItem, CSidebar, CSidebarNav, CNavTitle, CNavGroup } from '@coreui/react';
import { cilSpeedometer, cilStar } from '@coreui/icons';
import CIcon from '@coreui/icons-react';

const Sidebar = () => {
  return (
    <CSidebar>
      <CSidebarNav>
        <CNavTitle>Administrador</CNavTitle>
        <CNavItem href="#/dashboard">
          <CIcon icon={cilSpeedometer} customClassName="nav-icon" />
          Dashboard
        </CNavItem>
        <CNavGroup toggler="Components">
          <CNavItem href="#/formatos">
            <CIcon icon={cilStar} customClassName="nav-icon" />
            Formatos
          </CNavItem>
          <CNavItem href="#/procesos">
            <CIcon icon={cilStar} customClassName="nav-icon" />
            Procesos
          </CNavItem>
          <CNavItem href="#/procedimientos">
            <CIcon icon={cilStar} customClassName="nav-icon" />
            Procedimientos
          </CNavItem>
          <CNavItem href="#/unidades">
            <CIcon icon={cilStar} customClassName="nav-icon" />
            Unidades
          </CNavItem>
          <CNavItem href="#/areas">
            <CIcon icon={cilStar} customClassName="nav-icon" />
            Áreas
          </CNavItem>
          <CNavItem href="#/usuarios">
            <CIcon icon={cilStar} customClassName="nav-icon" />
            Usuarios
          </CNavItem>
        </CNavGroup>
      </CSidebarNav>
    </CSidebar>
  );
};

export default Sidebar;
