import React from 'react'

//Creando el Componente y inicializando el estado
class Juego extends React.Component {
  constructor(props) {
    console.log("Entro en el constructor");
    super(props)
    this.state = {
      cadena: '*'
    };
  }

  //Metodo me permite actualizar el estado del componente para su actualizacion
  incrementar = () => {
    this.setState({ cadena: this.state.cadena + '*' })
  };
  decrementar = () => {
    let a = this.state.cadena
    if (a.length > 0) {
      this.setState({ cadena: a.slice(0, -1) })
    }

  };
  reset = () => {
    this.setState({ cadena: '*' })
  }
  shouldComponentUpdate() {
    if (this.state.cadena.length % 2 === 0) {
      return false;
    } else {
      return true;
    }
  }

  //Renderizando en el Doom
  render() {
    console.log("Entro en el renderizado");
    return (
      <div>
        <h2>{this.state.cadena}</h2>
        <p>En este momento tienes {this.state.cadena.length} asteriscos</p>
        <button onClick={this.decrementar}>Restar</button>
        <button onClick={this.incrementar}>Sumar</button>
        <button onClick={this.reset}>Limpiar</button>
      </div>
    );
  }

  //Se ejecuta despues del metodo render() cuando el componente ya ha sido montado y todos los elementos del DOM ya estan disponibles, y es utilizado para cargar datos del servidor o para realizar operaciones que requiran elementos del DOM.
   
  componentDidMount() {
    console.log("Componente montado y listo para utilizar");
  }

  //Se ejecuta justo despues del metodo render , pero solo cuando es actualizado el state, lo que implica que no sera invocadp durante la fase de montaje

  componentDidUpdate() {
    console.log("El Componente ya se ha actualizado");
  }

  //Se invoca inmediatamente antes de que un compoente sea desmontado y destruido . se debe utilizar para realizar tareas de limpieza :limpiar elementos del DOM , cancelar solicitudes de red , desconectar a un servidor , cerra una instancia de trabajo solo se ejecuta una sola vez durante todo el cilo de vida de un componenet
  componentWillUnmount(){

  }
  
}

export default function CicloVida() {
  return <Juego />;
}


//Flujo del Ciclo de Vida
//1 .- Class Constructor
//2 .- getDerivedStateFromProps
//3.- Render
//4.- componentDidMount
//5.- componentDidUpdate
//6.- componentWillUnmount()