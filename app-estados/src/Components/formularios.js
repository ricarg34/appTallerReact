import React from "react";

class Saludo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { alumno: '' };
    }
    cambioNombre = (event) => {
        this.setState({ alumno: event.target.value })
    }
    render() {
        return (
            <form>
                <h1>Hola {this.state.alumno}</h1>
                <p>Escribe tu nombre para modificar el State</p>
                <input type='text' name="nombre"
                    onChange={this.cambioNombre}
                >
                </input>
            </form>
        )
    }
}

export default function Forms() {
    return <Saludo />
}