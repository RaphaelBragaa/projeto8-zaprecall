import React from "react";
import happy from "../../images/party.png"
import sad from "../../images/sad.png"
import error from "../../images/error.png"

export default function Congratulations({Ready, Complete,setComplete,order}){
    
    
    if(Ready == 4){
        setComplete('Congratulations')
    }
    console.log(order)
    

    



    return(
        <>
        <div className={Complete}>
          <div className="Title">
           {order ? (<img src={happy}/>):(<img src={sad}/>)}
           {order ? (<h1>Parabéns!</h1>):(<h1>Putz...</h1>)}
          </div>
          {order?(<h2>Você não esqueceu de nenhum flashcard!</h2>):(<h2>Ainda faltam alguns...
Mas não desanime!</h2>)}
        </div>
        </>
    )
}
