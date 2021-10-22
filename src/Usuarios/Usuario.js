import { postUsuario } from '../api';
import React, { useState } from 'react';

function Usuario(props) {
  const guardarUsuario = () => {
    postUsuario(usuario)
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

  const [usuario, setUsuario] = useState({ nombre: '', email: '', password: '', rol: 'Vendedor', estado: 'Activo' });

  const setValorUsuario = valor => {
    setUsuario({ ...usuario, ...valor });
  };

  return (
    <div className="container">
      <h2>Vendedor</h2>
      <div className="form">
        <div className="formFila">
          <div className="formLabel">
            <label>Nombre</label>
          </div>
          <div className="formInput">
            <input
              type="text"
              value={usuario.nombre}
              onChange={(e) => setValorUsuario({ nombre: e.target.value })}
            />
          </div>
        </div>
        <div className="formFila">
          <div className="formLabel">
            <label>Email</label>
          </div>
          <div className="formInput">
            <input
              type="text"
              value={usuario.email}
              onChange={(e) => setValorUsuario({ email: e.target.value })}
            />
          </div>
        </div>
        <div className="formFila">
          <div className="formLabel">
            <label>Contraseña</label>
          </div>
          <div className="formInput">
            <input
              type="password"
              onChange={(e) => setValorUsuario({ password: e.target.value })}
            />
          </div>
        </div>
        <div className="formFila">
          <div className="formLabel">
            <label>Rol</label>
          </div>
          <div className="formInput">
            <select value={usuario.rol}
              onChange={(e) => setValorUsuario({ rol: e.target.value })}>
              <option value='Vendedor'>Vendedor</option>
              <option value='Administrador'>Administrador</option>
            </select>
          </div>
        </div>
        <div className="formFila">
          <div className="formLabel">
            <label>Estado</label>
          </div>
          <div className="formInput">
            <select value={usuario.estado}
              onChange={(e) => setValorUsuario({ estado: e.target.value })}>
              <option value='Activo'>Activo</option>
              <option value='Inactivo'>Inactivo</option>
            </select>
          </div>
        </div>
      </div>
      <div className="botones">
        <button onClick={guardarUsuario}>Guardar</button>
        <button onClick={() => props.setOpcion('Listado')}>Cancelar</button>
      </div>
    </div>
  );
}

export default Usuario;
