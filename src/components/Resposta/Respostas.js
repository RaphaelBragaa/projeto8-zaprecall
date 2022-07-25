import React from "react"
import right from "../../images/right.png"
import doubt from "../../images/doubt.png"

export default function Respostas({Ready,setReady, Type, setType, Results, setResults, setQuestion,error,order,setOrder}){
    const [orda,setOrda]=React.useState(false)
console.log(error)
console.log(order)


    function Soma(number){
        let newResults=[]
        setReady(Ready+1)
        setType(number)
        console.log(number)
        console.log(Type)
        if(number===1){
            newResults =[...Results,error]
            setResults(newResults)
            setQuestion(false)
            setOrder(false)
            console.log(order)
    }if(number===2){
            newResults = [...Results,doubt]
            setResults(newResults)
            setQuestion(false)
    } if(number===3){
        setResults([...Results,right])
        setQuestion(false)
    }
    for(let i=0;i<Results.length;i++){
        if(Results[i]===error){
        setOrda(true)
        console.log(error)
        }
     }
     
     
   
    console.log(Results)
}
    return(
        <div className="Respostas">

        <div onClick={()=>Soma(1)}className="Caixa red"><h3>Não Lembrei</h3></div>
        <div onClick={()=>Soma(2)}className="Caixa yellow"><h3>Quase não lembrei</h3></div>
        <div onClick={()=>Soma(3)}className="Caixa green"><h3>Zap!</h3></div>
        </div>
    )
}