import React from "react";

class Suma extends React.Component {
    render(){
        let num1 = parseFloat(this.props.num1);
        let num2 = parseFloat(this.props.num2);
        let suma = num1+num2;
        return (
            <h2>
                El Resultado de {num1} y {num2} es igual a {suma}
            </h2>
        )
    }

}

export default function Sumas() {
    return <Suma num1="14" num2="57"/>
}