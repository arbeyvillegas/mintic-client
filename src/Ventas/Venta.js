import { postVenta, getVendedores, getProductos } from '../api';
import React, { useEffect, useState } from 'react';

function Venta(props) {

  const guardarVenta = () => {
    postVenta(venta)
      .then((res) => {
        console.log(res.data);
        alert('Guardado existosamente!');
        props.setOpcion('Listado')
      })
      .catch(error => {
        alert(error.message);
        console.error(error);
      }
      );
  };

  const [venta, setVenta] = useState({ vendedor: '', cliente: '', total: 0, productos: [], estado: 'Pendiente' });
  const [vendedores, setVendedores] = useState([]);
  const [listadoProductos, setListadoProductos] = useState([]);
  const [productoActual, setProductoActual] = useState({ id: '', cantidad: 1 });

  useEffect(() => {
    getVendedores()
      .then(res => setVendedores(res.data))
      .catch(error => console.error(error));

    getProductos()
      .then(res => setListadoProductos(res.data))
      .catch(error => console.error(error));
  }, []);

  const setValorVenta = valor => {
    setVenta({ ...venta, ...valor });
  };

  const setValorProductoActual = valor => {
    setProductoActual({ ...productoActual, ...valor })
  };

  const adicionarProducto = () => {
    let detalleProducto = listadoProductos.find(item => item._id === productoActual.id);
    let precioTotalProducto = productoActual.cantidad * detalleProducto.precio;
    let precioTotalVenta = venta.total + precioTotalProducto;
    let productosVenta = [...venta.productos, { ...productoActual, precio: detalleProducto.precio, nombre: detalleProducto.nombre, precioTotal: productoActual.cantidad * detalleProducto.precio }];

    setValorVenta({ productos: productosVenta, total: precioTotalVenta });

    setProductoActual({ id: '', cantidad: 1 });
  };

  return (
    <div className="container">
      <h2>Venta</h2>
      <table className="form">
        <tbody>
          <tr className="formFila">
            <td className="formLabel">
              <label>Vendedor</label>
            </td>
            <td className="formInput">
              <select
                value={venta.vendedor}
                onChange={(e) => setValorVenta({ vendedor: e.target.value })}>
                <option value="">Seleccionar</option>
                {vendedores.map(vendedor => <option value={vendedor._id} key={vendedor._id}>{vendedor.nombre}</option>)}
              </select>
            </td >
            <td className="formLabel">
              <label>Total</label>
            </td>
            <td className="formInput">
              <input type="number" readOnly={true} value={venta.total} className="number" />
            </td>
          </tr>
          <tr className="formFila">
            <td className="formLabel">
              <label>Estado</label>
            </td>
            <td className="formInput">
              <select value={venta.estado}
                onChange={(e) => setValorVenta({ estado: e.target.value })}>
                <option value='Pendiente'>Pendiente</option>
                <option value='Pagado'>Pagado</option>
                <option value='Enviado'>Enviado</option>
              </select>
            </td>
            <td className="formLabel">
              <label>Cliente</label>
            </td>
            <td className="formInput">
              <input type="text" value={venta.cliente} onChange={(e) => setValorVenta({ cliente: e.target.value })}/>
            </td>
          </tr>
          <tr className="formFila">
            <td className="formLabel">
              <label>Producto</label>
            </td>
            <td className="formInput">
              <select value={productoActual.id} onChange={(e) => setValorProductoActual({ id: e.target.value })}>
                <option value="">Seleccionar</option>
                {listadoProductos.map(producto => <option value={producto._id} key={producto._id}>{producto.nombre}</option>)}
              </select>
            </td>
            <td className="formLabel">
              <label>Cantidad</label>
            </td>
            <td className="formInput">
              <input
                type="number"
                className="number"
                value={productoActual.cantidad}
                onChange={(e) => setValorProductoActual({ cantidad: e.target.value })}></input>
            </td>
          </tr>
          <tr className="formFila">
            <td className="formLabel" colSpan="4" style={{ textAlign: 'center' }}>
              <button onClick={adicionarProducto}>Adicionar</button>
            </td>
          </tr>
          <tr>
            <td colSpan="4">
              <table className="tabla-datos">
                <thead>
                  <tr>
                    <th>
                      Producto
                    </th>
                    <th>
                      Precio unitario
                    </th>
                    <th>
                      Cantidad
                    </th>
                    <th>
                      Precio total
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {venta.productos.map(item => {
                    return (
                      <tr key={item.id}>
                        <td>
                          {item.nombre}
                        </td>
                        <td className="number">
                          {item.precio}
                        </td>
                        <td className="number">
                          {item.cantidad}
                        </td>
                        <td className="number">
                          {item.precioTotal}
                        </td>
                      </tr>
                    );
                  }
                  )
                  }
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="botones">
        <button onClick={guardarVenta}>Guardar</button>
        <button onClick={() => props.setOpcion('Listado')}>Cancelar</button>
      </div>
    </div>
  );
}

export default Venta;
