import React from "react";

class Calculadora extends React.Component {
    constructor(props) {
        super(props)
        this.state = { num1: 0, num2: 0, total: 0 }
    }

    cambioValores = (event) => {
        let nombreInput = event.target.name;
        let valorInput = event.target.value;
        this.setState({ [nombreInput]: valorInput })
    }
    suma = () => {
        let suma = parseFloat(this.state.num1) + parseFloat(this.state.num2)
        this.setState({ total: suma })
    }
    render() {
        return (
            <div>
                <h1>Resultado:{this.state.total}</h1>
                <input
                    type='number' name="num1"
                    onChange={this.cambioValores}
                >
                </input>
                <input
                    type='number' name="num2"
                    onChange={this.cambioValores}
                >
                </input>
                <button onClick={this.suma} 
                >Suma</button>

            </div>
        )
    }
}

export default function Forms2() {
    return <Calculadora />
}