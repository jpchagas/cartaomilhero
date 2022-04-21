function Evento(){
    function meuEvento(){
        console.log("Opa! Fui ativado!")
    }

    return(
        <>
        <p> Clique para disparar um evento:</p>
        <button onClick={meuEvento}>Ativar!</button>
        </>
    )
}

export default Evento