import React from "react";
import './stylos.css';


class Imagen extends React.Component {
    render() {
        return (
            <div className="gallery">
                <a href={this.props.foto} width='600' height='400'>
                    <div className="desc"> {this.props.descripcion}</div>
                </a>
            </div>
        )
    }
}

export default function Propiedades4 () {
    return (
        <div>
            <Imagen foto='/logo192.png' descripcion="React 18"/>

            <Imagen foto='/logo512.png' descripcion="React 19"/>
        </div>
    )
}