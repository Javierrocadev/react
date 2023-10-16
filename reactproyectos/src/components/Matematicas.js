function Matematicas(props) {
    //CAPTURAMOS EN UNA VARIABLE DE METODO EL PROPS
    //QUE VIENE DEL PARENT (metodoPadre)
    var ejecutarPadre = props.metodoPadre;
    var idhijo = props.idhijo;
    return (<div>
        <h1 style={{ color: "blue" }}>Saludo HIJO</h1>
        <button onClick={() => ejecutarPadre(idhijo)}>doble</button>
        <button onClick={() => ejecutarPadre(idhijo)}>triple</button>
    </div>)
}
export default Matematicas;