import React, { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar"
import Quiz from "./components/Quiz"

function App() {
 
  const [questionData, setQuestionData] = useState([])

  useEffect(()=>{
    fetch("https://opentdb.com/api.php?amount=10&category=9&difficulty=easy")
    .then(res => res.json())
    .then(data => setQuestionData(data.results))
  }, [])

  const questions = questionData.map(q => {
    let choices = {
      incorrect_answers : q.incorrect_answers,
      correct_answer: q.correct_answer
    }
    //console.log(choices)

    return <Quiz answer={choices} question={q.question} />
  })

// works but only displays incorrect answer to the choices
// const questions = questionData.map(q => <Quiz answer={q.incorrect_answers} question={q.question} />)



  return (
    <div>
    <Navbar/>
    <main>
     {questions}
      <Footer />
      </main>
    </div>
  );
}

export default App;
