import React, { useState, useEffect } from "react";
import { getUsuarios } from '../api';

function ListadoUsuarios(props) {
    const [usuarios, setUsuarios] = useState([]);
  useEffect(() => {
    getUsuarios()
      .then((res) => setUsuarios(res.data))
      .catch((error) => console.error(error.message));
  }, []);

  return (
    <div className="container">
      <h1>Listado de usuarios</h1>
      <table className="tabla-datos">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Rol</th>
            <th>Estado</th>
            <th>Acci&oacute;n</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map(usuario => (
            <tr key={usuario._id}>
              <td>{usuario.nombre}</td>
              <td>{usuario.email}</td>
              <td>{usuario.rol}</td>
              <td>{usuario.estado}</td>
              <td></td>
            </tr>
          )
          )
          }
        </tbody>
      </table>
      <input type="button" value="Nuevo" onClick={() => props.setOpcion('Nuevo')} />
    </div>
  );
}
export default ListadoUsuarios;