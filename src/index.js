import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import './styles/index.css';
import Landing from './components/Landing';
import NavBar from './components/NavBar';

ReactDOM.render(
  <BrowserRouter>
    <Route exact path='/' component={Landing} />
    <div>
      <NavBar />
    </div>  
  </BrowserRouter>,
  document.getElementById('root')
);

