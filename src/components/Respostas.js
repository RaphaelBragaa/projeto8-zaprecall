import React from "react"

export default function Respostas({Ready,setReady}){
    function Soma(){
        setReady(Ready+1)
        alert("PAMONHA")

    }
    return(
        <div className="Respostas">
        <div onClick={Soma}className="Caixa red"><h3>Não Lembrei</h3></div>
        <div onClick={Soma}className="Caixa yellow"><h3>Quase não lembrei</h3></div>
        <div onClick={Soma}className="Caixa green"><h3>Zap!</h3></div>
        </div>
    )
}