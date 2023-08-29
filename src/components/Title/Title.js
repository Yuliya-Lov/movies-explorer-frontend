import React from 'react';
import './Title.css';

function Title({ level, size, text }) {

  const titleView = `title title_size_${size}`;

  switch (level) {
    case 1:
      return <h1 className={titleView}>{text}</h1>;
    case 2:
      return <h2 className={titleView}>{text}</h2>;
    case 3:
      return <h3 className={titleView}>{text}</h3>;
    default:
      throw Error('Unknown level: ' + level);
  }
}

export default Title;
