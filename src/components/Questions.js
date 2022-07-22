import React from "react"
import Footer from "./Footer"
import Flashcard from "./Flashcard"


export default function Questions(){
  const [hidden, setHidden] = React.useState('')
  const Number =[1,2,3,4]

    return(
        <>
        <div className="Logo">
        <img src="images/logo-pequeno.png" />
        <h1>ZapRecall</h1>
        </div>
        {Number.map((Number) => (
        <Flashcard Number={Number}/>
      ))}
       
      <Footer/>
        </>
    )
}



{/* <div className='Questions'>
<div className="Pergunta">
<h2 className={View}>O que é JSX?</h2>
<h2 className={Hidden}> Uma extensão de linguagem do JavaScript</h2>
<img onClick={Show} className={View}src="images/setinha.png"/>
<div className="Respostas">
    <div className="Caixa red"><h3>Não Lembrei</h3></div>
    <div className="Caixa yellow"><h3>Quase não lembrei</h3></div>
    <div className="Caixa green"><h3>Zap!</h3></div>
</div>
{/* <h2>Pergunta 1</h2> <ion-icon  name="play-outline"></ion-icon>
</div>
<div className="Question">
<h2>Pergunta 2</h2> <ion-icon  name="play-outline"></ion-icon>
</div>
<div className="Question">
<h2>Pergunta 3</h2> <ion-icon  name="play-outline"></ion-icon>
</div>
<div className="Question">
<h2>Pergunta 4</h2> <ion-icon  name="play-outline"></ion-icon>
</div>
</div>
<footer>
0/4 CONCLUÍDOS
</footer> */}