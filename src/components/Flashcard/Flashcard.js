import React from "react"
import Verso from "../Verso/Verso"



export default function Frente({Number, Ready, setReady, Type, setType, Results, setResults}){
    const [Question, setQuestion] = React.useState(false);
    

    return(
        <>
        <div className={Question ? 'hidden':'Question'}>
            <h2>Pergunta {Number}</h2> <ion-icon onClick={()=> setQuestion(!Question)} name="play-outline"></ion-icon>
        </div>
       {Question ? (<Verso Ready={Ready} setReady={setReady} Type={Type} setType={setType} Results={Results} setResults={setResults}  setQuestion={setQuestion}/>):(<></>)} 
        </>
    )
}