import React from "react";
import happy from "../../images/party.png"
import sad from "../../images/sad.png"

export default function Congratulations({Ready, Complete,setComplete}){
    if(Ready == 4){
        setComplete('Congratulations')
    }
    
    return(
        <>
        <div className={Complete}>
          <div className="Title">
           <img src={happy}/>
           <h1>Parabéns!</h1>
          </div>
          <h2>Você não esqueceu de nenhum flashcard!</h2>
        </div>
        </>
    )
}