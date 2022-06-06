import React, { useState } from 'react';
import he from 'he';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import './Question.css'
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Question({
  currentQuestion,
  setCurrentQuestion,
  questions,
  options,
  correct,
  setScore,
  score,
}) {
  const [selected, setSelected] = useState();
  const [error, setError] = useState(false);
  
  const navigate = useNavigate();

  const handleSelect = (item) => {
    if (selected===item && selected===correct) {
      return 'select'
    } else if (selected===item && selected!==correct) {
      return 'wrong'
    } else if (item===correct) {
      return 'select'
    }
  }

  const handleCheck = (item) => {
    setSelected(item);
    if (item === correct) setScore(score + 1);
    setError(false);
  };

  const handleNext = () =>{
    if (currentQuestion>8) {
      navigate('/result');
    } else if (selected) {
      setCurrentQuestion(currentQuestion+1);
      setSelected();
    } else {
      setError('Please select an answer at first')
    }
  }

  const handleQuit = () => {
    
  }
  
  return (
    <div className='question'>
      <h1 >Question {currentQuestion + 1}</h1>
      <div className='singleQuestion'>
        <h2>{he.decode(questions[currentQuestion].question)}</h2>
        <div className="options">
          {error && <ErrorMessage> {error}</ErrorMessage>}
          {
            options &&
            options.map((item) => (<button
              onClick={()=>handleCheck(item)}
              className={`singleOption ${selected && handleSelect(item)}`}
              key={item}
              disabled={selected}
            >{he.decode(item)}
            </button>))
          }
        </div>
        <div className='controls'>
          <Button
            variant="contained"
            color="secondary"
            size='large'
            style={{ width: '46%', lineHeight: 'normal' }}
            href="/"
            onClick={handleQuit}
            sx={{
              padding: '15px',
              fontSize: { xs: "2.2vw", md: '1.5vw'}
            }}
            >Quit</Button>
          <Button
            variant="contained"
            size='large'
            color="primary"
            style={{ width: '46%', lineHeight: 'normal' }}
            onClick={handleNext}
            sx={{
              padding: '15px',
              fontSize: { xs: "2.2vw", md: '1.5vw' }
            }}
          >Next</Button>
        </div>
      </div>

    </div>
  );
}

export default Question;
