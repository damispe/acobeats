import React from 'react';
import logo from '../logo.png';
import '../styles/Landing.css';
import {Link} from 'react-router-dom';

function Landing() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Link className='texto' to='/home'>enter</Link>
      </header>
    </div>
  );
}

export default Landing;
