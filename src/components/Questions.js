import React from "react"

export default function Questions(){
    const [Hidden, setHidden] = React.useState('hidden')
    const [View , setView] = React.useState('')

    function Show(){
        setHidden('')
        setView('hidden')
    }

    return(
        <>
        <div className="Logo">
        <img src="images/logo-pequeno.png" />
        <h1>ZapRecall</h1>
        </div>
        <div className='Questions'>
        <div className="Pergunta">
        <h2 className={View}>O que é JSX?</h2>
        <h2 className={Hidden}> Uma extensão de linguagem do JavaScript</h2>
        <img onClick={Show} className={View}src="images/setinha.png"/>
        <div className="Respostas">
            <div className="Caixa red"><h3>Não Lembrei</h3></div>
            <div className="Caixa yellow"><h3>Quase não lembrei</h3></div>
            <div className="Caixa green"><h3>Zap!</h3></div>
        </div>
        {/* <h2>Pergunta 1</h2> <ion-icon  name="play-outline"></ion-icon> */}
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
        </footer>
        </>
    )
}