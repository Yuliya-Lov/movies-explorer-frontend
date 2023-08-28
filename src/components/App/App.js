import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import Header from '../Header/Header.js';
import Main from '../Main/Main.js';

function App() {
  return (
    <div className="root">
      <Header></Header>
      <Main></Main>
    </div>
  );
}

export default App;
