import React from 'react';
import './PopupWithNav.css';
import Navigation from '../Navigation/Navigation';

function PopupWithNav({isMobile, isOpen, onClose}) {
  console.log('isOpen', isOpen)
  return (
    <div className={`popup ${isOpen && 'popup_opened'}`}>
      <div className="popup__container">
        <Navigation isMobile={isMobile}/>
        <button
          type="button"
          onClick={onClose}
          className="popup__button-close"
          aria-label="Закрыть навигацию." />
      </div>
    </div>
  );
}

export default PopupWithNav;
