import React from "react"

export default function Menu(){
    const [Start, setStart]= React.useState('Menu')

    function Começar(){
        setStart('hidden')
    }

    return(
        <>
        <div className={Start}>
        <img src="images/logo.png" />
        <h1>ZapRecall</h1>
        <div onClick={Começar} className="Start">
        Iniciar Recall!
        </div>
        </div>
        </>
    )
}