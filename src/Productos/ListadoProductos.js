import React, { useState, useEffect } from "react";
import { getProductos } from '../api';

function ListadoProductos(props) {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    getProductos()
      .then((res) => setProductos(res.data))
      .catch((error) => console.error(error.message));
  }, []);

  return (
    <div className="container">
      <h1>Listado de productos</h1>
      <table className="tabla-datos">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>EAN</th>
            <th>Precio</th>
            <th>Acci&oacute;n</th>
          </tr>
        </thead>
        <tbody>
          {productos.map(producto => (
            <tr key={producto._id}>
              <td>{producto.nombre}</td>
              <td>{producto.ean}</td>
              <td>{producto.precio}</td>
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

export default ListadoProductos;
