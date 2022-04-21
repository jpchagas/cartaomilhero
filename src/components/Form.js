import {useState} from 'react'


function Form(){
    function calcularCartao(e){
        e.preventDefault()
        console.log(parseFloat(cotacao)+parseFloat(pontos)+parseFloat(milhas))
        console.log("cadastrou o usuario")
    }
    
    const[cotacao, setCotacao] = useState()
    const[pontos, setPontos] = useState()
    const[milhas, setMilhas] = useState()

    return(
        <>
            <h1>Meu Cadastro:</h1>
            <form onSubmit={calcularCartao}>
                <div>
                    <label htmlFor='cotacao'> Cotação</label>
                    <input type="text" id='cotacao' name='cotacao' placeholder='Cotação Dólar' onChange={(e) => setCotacao(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor='pontos'> Pontos</label>
                    <input type="text" id='pontos' name='pontos' placeholder='Pontos por Dólar' onChange={(e) => setPontos(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor='milhas'>Milhas</label>
                    <input type="text" id='milhas' name='milhas' placeholder='Milhas por Ponto' onChange={(e) => setMilhas(e.target.value)}/>
                </div>
                <div>
                    <input type="submit" value="Calcular"/>
                </div>
            </form>
        </>
    )
}

export default Form