import React from 'react'
import './features.css';
import Feature from '../../components/feature/Feature';

const featuresData = [
  {
    title: 'Generative',
    text: 'The “generative” part of the name refers to the model’s ability to generate text.'
  },
  {
    title: 'Pre-trained',
    text: 'The “pretrained” part indicates that the model has been trained on a large dataset of text before it is used for a specific task.'
  },
  {
    title: 'Transformer',
    text: 'The “transformer” part of the name refers to the type of architecture that the model uses. In natural language processing, transformers are a type of neural network that are designed to process input text in a way that is similar to how humans understand language.'
  },
  {
    title: 'Neural Network',
    text: 'A neural network is a type of artificial intelligence that is modeled after the structure and function of the human brain. It is composed of many interconnected “neurons,” which are simple computational units that receive input, process it, and produce output.'
  }
]

function Features() {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h2 className="gradient__text">The Future is Now and You Just Need to Realize It. Step Into the Future Today. Make it Happen.</h2>
        <button type="button" className="slide">Request Early Access</button>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((item, index) => (
            <Feature title={item.title} text={item.text} key={item.title + index}/>
        ))};
      </div>
    </div>
  )
}

export default Features;