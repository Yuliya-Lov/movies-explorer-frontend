import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import Header from '../Header/Header.js';
import Main from '../Main/Main.js';
import Footer from '../Footer/Footer.js';

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(true);
  const [isMobile, setIsMobile] = React.useState(false);

  const handleResize = () => {
    if (window.innerWidth < 790) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
  }, []);

  return (
    <div className="root">
      <Header isLoggedIn={isLoggedIn} isMobile={isMobile}></Header>
      <Main></Main>
      <Footer/>
    </div>
  );
}

export default App;
