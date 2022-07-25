import React from "react"
import Footer from "../Footer/Footer"
import Flashcard from "../Flashcard/Flashcard"
import logo from "../../images/logo-pequeno.png"
import error from "../../images/error.png"
import Congratulations from "../Congratulations/Congratulations"


export default function Questions(){
 
  const Number =[1,2,3,4]
  const [Ready, setReady]=React.useState(0)
  const [Type, setType]=React.useState(0)
  const [Results, setResults]=React.useState([])
  const [Complete, setComplete]=React.useState('hidden')
  const [order,setOrder]=React.useState(true)

  






    return(
        <>
        <div className="Logo">
        <img src={logo} />
        <h1>ZapRecall</h1>
        </div>
        <div className="Main" >
        {Number.map((Number) => (
        <Flashcard Number={Number} Ready={Ready} setReady={setReady} Type={Type} setType={setType} Results={Results} setResults={setResults} error={error} order={order} setOrder={setOrder}/>
      ))}
       </div>
     <Congratulations Ready={Ready} Complete={Complete} setComplete={setComplete} Results={Results} error={error} order={order} setOrder={setOrder}/>
      <Footer Ready={Ready} Type={Type} setType={setType} Results={Results} setResults={setResults}/>
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