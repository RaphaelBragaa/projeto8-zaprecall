import React from "react"
import logo from "../../images/logo.png"

export default function Menu({setTela, tela}){


    return(
        <>
        <div className='Menu'>
        <img src={logo} />
        <h1>ZapRecall</h1>
        <div onClick={()=> setTela(!tela)} className="Start">
        Iniciar Recall!
        </div>
        </div>
        </>
    )
}