import React from 'react';
import gpt3Logo from '../../assets/logo.png';
import './footer.css';

function Footer() {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h2 className="gradient__text">Step into the future, now</h2>
      </div>
      <div className="gpt3__footer-btn">
        <p>Request Early Access</p>
      </div>
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={gpt3Logo} alt="GPT-3 Logo" />
        </div>
      </div>
    </div>
  )
}

export default Footer;