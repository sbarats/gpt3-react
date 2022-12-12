import React from 'react'
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

function Header() {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-container">
        <h1 className="gradient__text">Let's Build Something Amazing with GPT-3 OpenAI</h1>
        <p><a href="https://en.wikipedia.org/wiki/GPT-3">Generative Pre-trained Transformer 3 (GPT-3; stylized GPT·3)</a> is an autoregressive language model that uses deep learning to produce human-like text. Given an initial text as prompt, it will produce text that continues the prompt.</p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your Email Address"/>
          <button type="button">Get Started</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt="recent users"/>
          <p>1,600 people used this in the last 24 hours</p>
        </div>
        <div className="gpt3__header-image">
          <img src={ai} alt="AI 3d rendered face graphic"/>  
        </div>
      </div>
    </div>
  )
}

export default Header