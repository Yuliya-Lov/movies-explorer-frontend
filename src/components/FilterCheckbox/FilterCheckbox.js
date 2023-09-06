import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox({ isShort, handleTumbClick }) {



  return (
    <div className="checkbox">
      <label className="checkbox__area">
        <input
        type="checkbox"
        className="checkbox__input"
        onChange={handleTumbClick} checked={isShort? true : false}/>
        <span className="checkbox__switch"></span>
      </label>
      <p className="checkbox__name">Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;
