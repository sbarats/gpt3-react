import React from 'react';
import gpt3Logo from '../../assets/logo.svg'
import './footer.css';

function Footer() {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h2 className="gradient__text">Step into the future, now</h2>
      </div>
      <div className="gpt3__footer-btn">
      <button type="button" className="slide">Request Early Access</button>
      </div>
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={gpt3Logo} alt="GPT-3 Logo" />
          <p>Crechterwoord K12 182 DK All Rights Reserved.</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Contact</h4>
          <p>Crechterwoord K12 182 DK AICity, ST 12345</p>
          <p>123-456-7890</p>
          <p>discover@gpt3now.com</p>
        </div>
      </div>
      <div className="gpt3__footer-copyright">
      <p>© 2022 GPT-3. All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer;