import React from 'react';
import './ControlledInput.css';

function ControlledInput({ id, type, labelName, placeHolder, value, onChange, isDisabled, isRequired, minLengthValue, maxLengthValue, pattern, errorValue, slim }) {
  return (
    <div className={`controlled-input ${slim ? 'controlled-input_slim' : ''}`}>
      <label
        htmlFor={id}
        className='controlled-input__label'
      >{labelName}</label>
      <input
        type={type}
        id={id}
        value={value}
        disabled={isDisabled}
        onChange={onChange}
        placeholder={placeHolder}
        minLength={minLengthValue || ''}
        maxLength={maxLengthValue || ''}
        pattern={pattern}
        required={isRequired || false}
        className={`
        controlled-input__input
        ${!!errorValue ? 'controlled-input__input_error-value' :''}
        ${(!!errorValue && slim) ? 'controlled-input__input_slim-error' :''}`}
        autoComplete="off" />
      <span
        id={id}
        className={`controlled-input__error ${id}-error`} >{errorValue}</span>
    </div>
  );
}

export default ControlledInput;
