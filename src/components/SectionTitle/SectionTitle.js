import React from 'react';
import './SectionTitle.css';

function SectionTitle({text}) {
  return (
    <div className='section-title'>
      <h2 className='section-title__name'>{text}</h2>
    </div>
  );
}

export default SectionTitle;
