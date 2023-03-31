//Propiedades de Componentes
import React from "react";

class Alumno extends React.Component {
    render() {
        return (
            <div>
                <h1>Conectadas al CHAT</h1>
                <h2>Me Llamo {this.props.nombre}</h2>
                <h3>Me estoy conectando desde {this.props.lugar}</h3>
            </div>
        )
    }
}

export default function Propiedades() {
    return (
        <article>
            <Alumno nombre="Armando" lugar="Canada" />
            <Alumno nombre="Jose"  lugar="Japon"/>
            <Alumno nombre="Miguel" lugar="El Salvador"/>
        </article>
    )
}