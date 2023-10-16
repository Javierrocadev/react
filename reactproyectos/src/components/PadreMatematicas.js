import Matematicas from "./Matematicas";
function PadreMatematicas(props) {
    //NECESITAMOS UN METODO PARA PODER EJECUTAR LA ACCION
    //CUANDO EL HIJO LO NECESITE
    const metodoPadre = (num) => {
        var resultado2 = num * 2;
        var resultado3 = num * 3;
        console.log(resultado2);
        console.log(resultado3);

    }
    return (<div>
        <h1 style={{ color: "red" }}>Saludo PARENT</h1>
        {/* EL METODO LO LLAMAREMOS DESDE EL HIJO 
        POR LO QUE DEBEMOS ENVIAR, MEDIANTE PROPS
        EL METODO AL HIJO EN SU DIBUJO
        */}
        <Matematicas idhijo="1" metodoPadre={metodoPadre} />
    </div>)
}
export default PadreMatematicas;