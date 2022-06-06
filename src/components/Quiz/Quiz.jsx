import React, { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import './Quiz.css';
import Question from '../Question/Question';


function Quiz({ name, score, questions, setQuestions, setScore }) {
  const [options, setOptions] = useState();
  const [currentQuestion, setCurrentQuestion] = useState(0);

  useEffect(() => {
    console.log(questions)
    setOptions(questions && handleShuffle([
      questions[currentQuestion]?.correct_answer,
      ...questions[currentQuestion]?.incorrect_answers,
    ]))
  }, [questions, currentQuestion])
  console.log(options)
  
  const handleShuffle = (opts) => {
    return opts.sort(() => Math.random() - 0.5)
  }

  return (
    <div className='quiz'>
      <span className='subtitle'>Welcome, {name}</span>
      {
        questions ? (
          <>
            <div className="quizInfo">
              <span>{questions[currentQuestion].category}</span>
              <span>
                {/* {questions[currQues].difficulty} */}
                Score : {score}
              </span>
            </div>
            <Question 
              currentQuestion={currentQuestion}
              setCurrentQuestion={setCurrentQuestion}
              questions={questions}
              options={options}
              correct={questions[currentQuestion]?.correct_answer}
              score={score}
              setScore={setScore}
            />
          </>
        ) : (
          <CircularProgress style={{
            margin: 100
          }}
          size={150}
          thickness={1}
          />
        )
      }
    </div>
  );
}

export default Quiz;
