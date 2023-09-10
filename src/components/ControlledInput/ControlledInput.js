import React from 'react';
import './ControlledInput.css';

function ControlledInput({ id, type, labelName, placeHolder, value, onChange, isDisabled, isRequired, minLengthValue, maxLengthValue, slim}) {
  return (
    <div className={`controlled-input ${slim && 'controlled-input_slim'}`}>
      <label
        htmlFor={id}
        className='controlled-input__label'
        placeholder={placeHolder}
      >{labelName}</label>
      <input
        type={type}
        id={id}
        value={value}
        disabled={isDisabled}
        onChange={onChange}
        minLength={minLengthValue|| ''}
        maxLength={maxLengthValue || '' }
        required={isRequired || false}
        className='controlled-input__input controlled-input__input_slim'
        autoComplete="off"/>
      {!slim && <span
        className= {`controlled-input__error ${id}-error`}/>}
    </div>
  );
}

export default ControlledInput;
