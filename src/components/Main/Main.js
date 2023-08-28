import React from 'react';
import Promo from '../Promo/Promo.js';
import NavTab from '../NavTab/NavTab.js';
import AboutProject from '../AboutProject/AboutProject.js';

function Main(props) {
  return (
    <section>
      <Promo/>
      <NavTab/>
      <AboutProject/>
    </section>
  );
}

export default Main;
