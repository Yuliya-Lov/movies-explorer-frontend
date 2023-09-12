import React from 'react';
import './Footer.css';
const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__name">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__info">
        <p className="footer__copyright">&#169;{currentYear}</p>
        <ul className="footer__links">
          <li className='footer__link-item'>
            <a href='https://practicum.yandex.ru/' className="footer__link" target='blank'>Яндекс.Практикум</a>
          </li>
          <li className='footer__link-item'>
            <a href='https://github.com/' className="footer__link" lang='en' target='blank'>Github</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer;
