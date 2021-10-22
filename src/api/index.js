import axios from "axios";

const url_base = 'https://arjevica-mintic.herokuapp.com';
export function postProducto(producto) {
  return axios.post(url_base + '/productos', producto);
}

export function getProductos() {
  return axios.get(url_base + '/productos');
}


export function postUsuario(usuario) {
  return axios.post(url_base + '/usuarios', usuario);
}

export function getUsuarios() {
  return axios.get(url_base + '/usuarios');
}

export function getVendedores() {
  return axios.get(url_base + '/usuarios/vendedores');
}

export function getVentas() {
  return axios.get(url_base + '/ventas');
}

export function postVenta(venta) {
  return axios.post(url_base + '/ventas', venta);
}
