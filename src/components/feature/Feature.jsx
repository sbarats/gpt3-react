import React from 'react'
import './feature.css';

function Feature({title, text}) {
  return (
    <div className="gpt3__feature-container__feature">
      <div className="gpt3__feature-container__feature-title">
      <div className="gradient__bar-feature"> </div>
        <h3>{title}</h3>
        </div>
      <div className="gpt3__feature-container__feature-text">
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Feature;