import React from "react";

class Alumno extends React.Component {
    constructor(props) {
        super(props);
        //Creacion del Estado Inicial del Objeto
        this.state={nota:"Por Determinar"}
    }

    cambiarNota=() =>{
        //Modificacion del Estado para alterar alguna parte del componente
        this.setState({nota:10})
    }


    render () {
        return (
            <div>
                
                <h1>{this.props.nombre}</h1>
                <h1>{this.state.nota}</h1>
                <button
                   type="button"
                   onClick={this.cambiarNota}
                   >Ver Nota
                </button>
            </div>
        )
    }
}

export default function State1() {
    return (
        <div>
            <Alumno nombre="Ana" />
            <Alumno nombre="Eva" />
        </div>
    )
}