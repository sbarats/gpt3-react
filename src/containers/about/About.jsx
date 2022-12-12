import React from 'react';
import Feature from '../../components/feature/Feature';
import './about.css';

function About() {
  return (
    <div className="gpt3__about section__margin" id="about">
      <div className="gpt3__about-features">
        <Feature />
      </div>
      <div className="gpt3__about-heading">
        <h2 className="gradient-text">The possibilities are beyond your imagination</h2>
        <p>Explore the library</p>
      </div>
      <div className="gpt3__about-container">
        <Feature />
        <Feature />
        <Feature />
      </div>
    </div>
  )
}

export default About