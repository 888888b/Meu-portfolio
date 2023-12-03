import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function Cabeça(){
  return(
    <header>
      <div className="header-container">
        <h1>Vitor</h1>
        <div className="container-links">
          <a href="#"><FontAwesomeIcon icon={faGithub} /></a>
          <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
          <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="#"><FontAwesomeIcon icon={faWhatsapp} /></a>
          <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
        </div>
      </div>
    </header>
  )
}

export default Cabeça;