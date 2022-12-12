import React from 'react'
import './features.css';
import Feature from '../../components/feature/Feature';

const featuresData = [
  {
    title: 'Feature 1',
    text: 'body text goes here. Lorem ipsum dolor sit amet.'
  },
  {
    title: 'Feature 2',
    text: 'body text goes here. Lorem ipsum dolor sit amet.'
  },
  {
    title: 'Feature 3',
    text: 'Your text goes here. Lorem ipsum dolor sit amet.'
  },
  {
    title: 'Feature 4',
    text: 'Some text goes here. Lorem ipsum dolor sit amet.'
  }
]

function Features() {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h2 className="gradient__text">The Future is Now and You Just Need to Realize It. Step Into the Future Today. Make it Happen.</h2>
        <p>Request Early Access</p>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((item, index) => (
            <Feature />
        ))}
      </div>
    </div>
  )
}

export default Features;