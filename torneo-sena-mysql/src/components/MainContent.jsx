import React from 'react';
import { CContainer } from '@coreui/react';
import { Route, Switch } from 'react-router-dom';

const Dashboard = React.lazy(() => import('../views/Dashboard.jsx'));
const Formatos = React.lazy(() => import('../views/Format.jsx'));
const Procesos = React.lazy(() => import('../views/Procesos'));
const Procedimientos = React.lazy(() => import('../views/Procedimientos'));
const Unidades = React.lazy(() => import('../views/Unidades'));
const Areas = React.lazy(() => import('../views/Areas'));
const Usuarios = React.lazy(() => import('../views/Usuarios'));

const MainContent = () => {
  return (
    <CContainer fluid>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/formatos" component={Formatos} />
          <Route path="/procesos" component={Procesos} />
          <Route path="/procedimientos" component={Procedimientos} />
          <Route path="/unidades" component={Unidades} />
          <Route path="/areas" component={Areas} />
          <Route path="/usuarios" component={Usuarios} />
        </Switch>
      </React.Suspense>
    </CContainer>
  );
};

export default MainContent;
