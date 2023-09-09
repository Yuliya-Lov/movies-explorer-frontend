import React from 'react';
import './ControlledInput.css';

function ControlledInput({ id, type, labelName, placeHolder, value, onChange }) {
  return (
    <div className='controlled-input'>
      <label
        htmlFor={id}
        className='controlled-input__label'
        placeholder={placeHolder}
      >{labelName}</label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        className='controlled-input__input' />
      <span
        className="controlled-input__error" />
    </div>
  );
}

export default ControlledInput;
