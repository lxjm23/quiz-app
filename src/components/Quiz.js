import React from "react";
import Answer from "./Answer";

function Quiz(props){
  
  let answ  = Object.keys(props.answer)
  console.log(answ)

  const answers = Object.values(props.answer).map(ans => {

  return <Answer answer1={ans}></Answer>})
  return(
    <div className="question-container">
      <p  className="question">{props.question}</p>
      {answers}
      <hr/>
    </div>
  )
}

export default Quiz