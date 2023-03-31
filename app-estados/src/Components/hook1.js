//Importando el Hook useState desde react nos permite mantener un estado local en un componente de funcion
import React, { useState } from "react";

function Example() {
    const [count, SetCount] = useState(0);

    return (
        <div>
            <p>Pulsa Clik para cambiar el valor del estado {count}</p>
            {/* Actualizar el componente example*/}
            <button onClick={
                () =>
                    SetCount(
                        count + 1

                    )
            }>
                Pulsame
            </button>
        </div>
    )
}

export default Example;