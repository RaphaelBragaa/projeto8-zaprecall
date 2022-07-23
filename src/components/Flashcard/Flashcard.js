import React from "react"
import Verso from "../Verso"



export default function Frente({Number, Ready, setReady}){
    const [Question, setQuestion] = React.useState(false);
    

    return(
        <>
        <div className={Question ? 'hidden':'Question'}>
            <h2>Pergunta {Number}</h2> <ion-icon onClick={()=> setQuestion(!Question)} name="play-outline"></ion-icon>
        </div>
       {Question ? (<Verso Ready={Ready} setReady={setReady}/>):(<></>)} 
        </>
    )
}