import { Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

function Header(props) {
  return (
    <div className='header'>
      {/* <Typography variant='h1'> */}
        <Link to='/' className='title'>KNOWledge Quiz</Link>
      {/* </Typography> */}
      <hr className='divider'/>
    </div>
  );
}

export default Header;
