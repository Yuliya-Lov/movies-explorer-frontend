import React from 'react';
import  './Underline.css';

function Underline({ type }) {
  return (
    <hr className={`underline underline_type_${type}`}/>
  );
}

export default Underline;
