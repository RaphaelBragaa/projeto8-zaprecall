import React from "react"
import error from "../../images/error.png"
import right from "../../images/right.png"
import doubt from "../../images/doubt.png"

export default function Footer({Ready, Results,setResults,Type,setType}){


    



    return(
        <footer>
        {Ready}/4 CONCLUÍDOS
         <div className="Resultados">
          {Results.map((Result) =>{return(
          <img src={Result}/>
          )})}
         </div>
        
        </footer>
    )
}