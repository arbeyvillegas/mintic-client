import React, {Component} from 'react';
import ListadoUsuarios from './ListadoUsuarios';
import Usuario from './Usuario';

export default class MainUsuarios extends Component {
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
      this.state.opcion === 'Listado' ? <ListadoUsuarios setOpcion={this.setOpcion}/> : <Usuario setOpcion={this.setOpcion}/>;
    return componente;
  }
}