//Anidacion de Componentes
import React from "react";

class Habitante extends React.Component {
    render() {
        return <h2>{this.props.nombre}</h2>
    }
}

class FondoBikini extends React.Component {
    render() {
        return (
            <div>
                <h1>¿Quien vive en la piña debajo del {this.props.sitio}</h1>
                <Habitante nombre="Bob Esponja" />
                <Habitante nombre="Calamardo" />
                <Habitante nombre="Patricio" />
            </div>
        )
    }
}

export default function Propiedades3() {
    return (
        <div>
            <FondoBikini sitio="mar" />
            <FondoBikini sitio="subsuelo" />
            <FondoBikini sitio="alcantarillado" />
        </div>
    )
}
