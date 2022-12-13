import React from 'react'
import './article.css';

function Article({imgUrl, date, title}) {
  return (
    <div className="gpt3__blog-container_article">
      <div className="gpt3__blog-container_article-image">
        <img src={imgUrl} alt="blog" />
      </div>
      <div className="gpt3__blog-container_article-content">
        <p>{date}</p>
        <h4>{title}</h4>
      </div>
      <button type="button" className="slide">Read More</button>
    </div>
  )
}

export default Article;