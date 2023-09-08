import React from 'react';
import './SubmitButton.css';

function SubmitButton({buttonText, buttonAction}) {
  return (
    <button type='submit' onClick={buttonAction} className='submit-button'>{buttonText}</button>
  );
}

export default SubmitButton;
