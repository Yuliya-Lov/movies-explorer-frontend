import React from "react";
import './InfoTooltip.css';
import success_icon from "../../images/success-icon.svg";
import failed_icon from "../../images/failed-icon.svg";

const InfoTooltip = ({ isOpen, isOk, message, onClose }) => {

  return (
    <div className={`tooltip ${isOpen && 'tooltip_opened'}`}>
      <div className="tooltip__container">
        <img className="tooltip__status-icon" src={isOk ? success_icon : failed_icon} alt="Иконка статуса запроса"></img>
        <h2 className="tooltip__info-message">{message}</h2>
        <button
          type="button"
          onClick={onClose}
          className="tooltip__button-close"
          aria-label="Закрыть форму." />
      </div>
    </div>
  )
};

export default InfoTooltip;
