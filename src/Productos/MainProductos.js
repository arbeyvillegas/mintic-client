import React, {Component} from 'react';
import ListadoProductos from './ListadoProductos';
import Producto from './Producto';

export default class MainProductos extends Component {
  constructor(props) {
    super(props);
    this.state = { opcion: 'Listado' };
    this.setOpcion = this.setOpcion.bind(this);
  }

  setOpcion(nombreOpcion) {
    this.setState({ opcion: nombreOpcion });
  }

  render() {
    let componente =
      this.state.opcion === 'Listado' ? <ListadoProductos setOpcion={this.setOpcion}/> : <Producto setOpcion={this.setOpcion}/>;
    return componente;
  }
}
