import React from 'react';
import './SubmitButton.css';

function SubmitButton({buttonText, buttonAction, isDisabled}) {
  return (
    <button type='submit' onClick={buttonAction} disabled={isDisabled} className={`submit-button ${isDisabled && 'submit-button_disabled'}`}>{buttonText}</button>
  );
}

export default SubmitButton;
