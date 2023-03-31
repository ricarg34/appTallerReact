import React from "react";

class Alumnos extends React.Component {
    render() {
        const alumnos = []
        for (let i = 0; i < this.props.cantidad; i++) {
            alumnos.push(<p key={i}>Alumno {i + 1} </p>)
        }
        return <div>{alumnos}</div>
    }
}

export default function Propiedades2() {
    return (
        <Alumnos cantidad="10"/>
    )
}

