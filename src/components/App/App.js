import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import Header from '../Header/Header.js';
import Main from '../Main/Main.js';

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  return (
    <div className="root">
      <Header isLoggedIn={isLoggedIn}></Header>
      <Main></Main>
    </div>
  );
}

export default App;
