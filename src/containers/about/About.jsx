import React from 'react';
import Feature from '../../components/feature/Feature';
import './about.css';

function About() {
  return (
    <div className="gpt3__about section__margin" id="about">
      <div className="gpt3__about-feature">
        <Feature title="About GPT-3" text="The architecture is a standard transformer network (with a few engineering tweaks) with the unprecedented size of 2048-token-long context and 175 billion parameters (requiring 800 GB of storage). The training method is generative pretraining, meaning that it is trained to predict what the next token is. The model demonstrated strong few-shot learning on many text-based tasks."/>
      </div>
      <div className="gpt3__about-heading">
        <h2 className="gradient__text">The possibilities are beyond your imagination</h2>
        <p>Explore the library</p>
      </div>
      <div className="gpt3__about-container">
        <Feature title="Chatbots" text="GPT-3 has been used by Jason Rohrer in a retro-themed chatbot project named Project December, which is accessible online and allows users to converse with several AIs using GPT-3 technology."/>
        <Feature title="Knowledgebase" text="GPT-3, specifically the Codex model, is the basis for GitHub Copilot, a code completion and generation software that can be used in various code editors and IDEs."/>
        <Feature title="Writing" text="GPT-3 is used in Copy.ai, the first AI copywriting app for marketers and business owners."/>
      </div>
    </div>
  )
}

export default About;