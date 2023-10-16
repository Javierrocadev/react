//para poder usar useState
//necesitamos importarlo de la libreria react
import { useState } from "react";
function Contador() {
    //declaramos una variable de tipo useState
    //y en la creacion debemos indicar su valor
    const [numero, setNumero] = useState(0);
    const sumarNumero = () => {
        //para modificar el valor de la variable state
        //debemos hacerlo mediante setVariable
        //que se utiliza como método
        setNumero(numero + 1);
    }
    return (<div>
        <h1>Ejemplo usState</h1>
        <h2>Contador: {numero}</h2>
        <button onClick={() => sumarNumero()}>Sumar contador</button>
        <button onClick={() => { setNumero(numero - 1) }}>Restar contador</button>
    </div>)
}
export default Contador;