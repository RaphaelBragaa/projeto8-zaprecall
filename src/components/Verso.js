import React from "react"
import Respostas from "./Respostas"
import setinha from "../images/setinha.png"

export default function Verso({Ready,setReady}){
    const [click, setClick]=React.useState(false)
    const Perguntas =[
        {pergunta:'O que é JSX?', resposta:'Uma extensão de linguagem do JavaScript'},
        {pergunta:'Componentes devem iniciar com __',resposta:'letra maiúscula'},
        {pergunta:'Podemos colocar __ dentro do JSX',resposta:'expressões'},
        {pergunta:'O ReactDOM nos ajuda __',resposta:' interagindo com a DOM para colocar componentes React na mesma'},
        {pergunta:'Usamos o npm para __ ',resposta:'gerenciar os pacotes necessários e suas dependências'},
        {pergunta:'Usamos props para __',resposta:'passar diferentes informações para componentes '},
        {pergunta:'Usamos estado (state) para __ ',resposta:'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente'},
        {pergunta:' O React é __',resposta:'uma biblioteca JavaScript para construção de interfaces'},
    ]

    const random = (min,max)=>Math.floor(Math.random()*(max-min)-min)
    const i = random(0,Perguntas.length)
    
    return(
        <>
       <div className={"Pergunta"}>
            <h2>{Perguntas[i].pergunta}</h2>
            {click?(<></>):(<img onClick={()=>setClick(true)}src={setinha}/>)}
            {click? (<h2 >{Perguntas[i].resposta}</h2> ) : (<></>) }
            {click?(<Respostas Ready={Ready} setReady={setReady}/>):(<></>)}
       </div>
      
        </>
    )
}

// {Perguntas.map((Pergunta, index, i)=>{return (<div className="Pergunta">
//             <h2 key={index}>{Pergunta[i].pergunta}</h2>
//             <h2 >{Pergunta[i].resposta}</h2>
//             <Respostas/>
//        </div>)} ) }