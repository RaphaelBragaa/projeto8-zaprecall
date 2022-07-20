import ReactDOM from "react-dom";
import Menu from "./components/Menu";
import Questions from "./components/Questions";

function App(){
    return(
        <>
       
        <Questions/>
        </>
    )
}

ReactDOM.render(<App />, document.querySelector(".root"));