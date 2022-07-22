import React from "react"

export default function Menu({setTela, tela}){


    return(
        <>
        <div className='Menu'>
        <img src="images/logo.png" />
        <h1>ZapRecall</h1>
        <div onClick={()=> setTela(!tela)} className="Start">
        Iniciar Recall!
        </div>
        </div>
        </>
    )
}