import React, {Component} from 'react';
import ListadoVentas from './ListadoVentas';
import Venta from './Venta';

export default class MainVentas extends Component {
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
      this.state.opcion === 'Listado' ? <ListadoVentas setOpcion={this.setOpcion}/> : <Venta setOpcion={this.setOpcion}/>;
    return componente;
  }
}