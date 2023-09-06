import React from 'react';
import './Footer.css';
const currentYear = new Date().getFullYear();

function Footer(props) {
  return (
    <footer className="footer">
      <p className="footer__name">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <hr className="footer__underline" />
      <div className="footer__info">
        <p className="footer__copyright">&#169;{currentYear}</p>
        <div className="footer__links">
          <a href='https://practicum.yandex.ru/' className="footer__link" target='blank'>Яндекс.Практикум</a>
          <a href='https://github.com/' className="footer__link" lang='en' target='blank'>Github</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
