import { Button, MenuItem, TextField } from '@mui/material';
import React, { useState } from 'react';
import Categories from '../../Data/Categories';
import './Home.css'
import {useNavigate} from 'react-router-dom'
import ErrorMessage from '../ErrorMessage/ErrorMessage';

function Home({ name, setName, fetchQuestions}) {
  const [category, setCategory] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [error, setError] = useState(false);

  const navigate = useNavigate()

  const submitHandler = () => {
    if (!category || !difficulty || !name) {
      setError(true);
      return;
    } else {
      setError(false);
      fetchQuestions(category, difficulty);
      navigate('/quiz');
    }

  }

  return (
    <div className='content'>
      <div className='settings'>
        <span style={{ fontSize: 30, color: 'rgb(120,194,195)' }}>Select settings</span>

        <div className='settings__select'>
          {error && <ErrorMessage> Please fill all the fields</ErrorMessage>}

          <TextField label="Enter Your Name" variant='outlined' style={{ marginBottom: 25 }} onChange={(e)=>setName(e.target.value)}/>
          <TextField select label="Select Category" variant='outlined' style={{ marginBottom: 30 }} onChange={(e) => setCategory(e.target.value)} value={category}>
            {
              Categories.map((cat) => (
                <MenuItem key={cat.category} value={cat.value}>
                  {cat.category}
                </MenuItem>

              ))
            }
          </TextField>
          <TextField select label="Select Difficulty" variant='outlined' style={{ marginBottom: 30 }} onChange={(e) => setDifficulty(e.target.value)} value={difficulty}>
            <MenuItem key='Easy' value='easy'>Easy</MenuItem>
            <MenuItem key='Normal' value='medium'>Normal</MenuItem>
            <MenuItem key='Hard' value='hard'>Hard</MenuItem>
          </TextField>
          <Button variant='contained' color="primary" size='large' sx={{padding: '12px', fontSize: '2vh'}} onClick={submitHandler}>
            Let's go
          </Button>
        </div>

      </div>
      <img src="/rounded-in-photoretrica.png" alt="quiz" className='banner' style={{opacity: '0.70'}}/>
    </div>
  );
}

export default Home;
