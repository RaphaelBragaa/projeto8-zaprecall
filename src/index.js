import ReactDOM from "react-dom";
import React from "react"
import Menu from "./components/Menu/Menu";
import Questions from "./components/Question/Questions";
import "./css/reset.css"
import "./css/style.css"


function App(){
    const [tela, setTela] = React.useState(true)
    return(
        <>
       { tela? (
        <Menu setTela={setTela} tela={tela}/>
       ):(<Questions/>)}



        </>
    )
}

ReactDOM.render(<App />, document.querySelector(".root"));