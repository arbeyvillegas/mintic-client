import React, { useState, useEffect } from "react";
import { getVentas } from '../api';

function ListadoVentas(props) {
    const [ventas, setVentas] = useState([]);
  useEffect(() => {
    getVentas()
      .then((res) => setVentas(res.data))
      .catch((error) => console.error(error.message));
  }, []);

  return (
    <div className="container">
      <h1>Listado de ventas</h1>
      <table className="tabla-datos">
        <thead>
          <tr>
            <th>Vendedor</th>
            <th>Cliente</th>
            <th>Fecha</th>
            <th>Total</th>
            <th>Estado</th>
            <th>Acci&oacute;n</th>
          </tr>
        </thead>
        <tbody>
          {ventas.map(venta => (
            <tr key={venta.id}>
              <td>{venta.nombrevendedor}</td>
              <td>{venta.cliente}</td>
              <td>{venta.fecha}</td>
              <td>{venta.total}</td>
              <td>{venta.estado}</td>
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
export default ListadoVentas;