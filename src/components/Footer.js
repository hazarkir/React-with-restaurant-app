import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faGithub, faMedium, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://www.facebook.com/hazarkir" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a href="https://x.com/Hazar_kir" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a href="https://www.instagram.com/hazarkir" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a href="https://github.com/hazarkir" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a href="https://www.linkedin.com/in/hazar-k%C4%B1r-8207a7260/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
      </div>
      <p className="copyText">&copy; 2024 Burger 33</p>
    </div>
  );
}

export default Footer;
