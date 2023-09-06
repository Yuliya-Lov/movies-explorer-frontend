import React from 'react';
import '../ArticleTitle/ArticleTitle.css';

function ArticleTitle({text}) {
  return (
    <div className='article-title'>
      <h2 className='article-title__name'>{text}</h2>
      <hr className='article-title__underline' />
    </div>
  );
}

export default ArticleTitle;
