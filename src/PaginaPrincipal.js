import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './PaginaPrincipal.css';
import Inicio from './Inicio';
import MainProductos from './Productos/MainProductos';
import MainUsuarios from './Usuarios/MainUsuarios';
import MainVentas from './Ventas/MainVentas';

function PaginaPrincipal() {
  return (
    <Router>
      <div id="top" className="header">
        <div className="header-child">
          <div className="title">Ventas Ambrosia</div>
        </div>
      </div>
      <div id="left" className="menubar">
        {/* <div class="top-left header">Menú</div> */}

        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/productos">Productos</Link>
          </li>
          <li>
            <Link to="/usuarios">Usuarios</Link>
          </li>
          <li>
            <Link to="/ventas">Ventas</Link>
          </li>
        </ul>
      </div>
      <div id="main">
        <Switch>
          <Route key="1" path="/" exact={true} children={Inicio} />
          <Route
            key="2"
            path="/productos"
            exact={true}
            children={()=> <MainProductos/>}
          />
          <Route
            key="3"
            path="/usuarios"
            exact={true}
            children={() => <MainUsuarios/>}
          />
          <Route 
            key="4" 
            path="/ventas" 
            exact={true} 
            children={() => <MainVentas/>} />
        </Switch>
      </div>
    </Router>
  );
}

export default PaginaPrincipal;
