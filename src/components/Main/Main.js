import React from 'react';
import './Main.css';
import Promo from '../Promo/Promo.js';
import NavTab from '../NavTab/NavTab.js';
import AboutProject from '../AboutProject/AboutProject.js';
import Techs from '../Techs/Techs.js';

function Main(props) {
  return (
    <section className='main'>
      <Promo/>
      <NavTab/>
      <AboutProject/>
      <Techs/>
    </section>
  );
}

export default Main;
