import React from 'react';
import { CHeader, CHeaderBrand, CHeaderNav, CHeaderNavItem, CHeaderNavLink } from '@coreui/react';

const Header = () => {
  return (
    <CHeader>
      <CHeaderBrand href="#">Administrador</CHeaderBrand>
      <CHeaderNav className="d-none d-md-flex me-auto">
        <CHeaderNavItem>
          <CHeaderNavLink href="#/dashboard">Dashboard</CHeaderNavLink>
        </CHeaderNavItem>
      </CHeaderNav>
    </CHeader>
  );
};

export default Header;
