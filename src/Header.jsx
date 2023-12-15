import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import AOS from "aos";
import 'aos/dist/aos.css';

function Cabeça(){
  AOS.init();
  return(
    <header data-aos="fade-down" data-aos-delay="250">
      <div className="header-container">
        <h1>Vitor</h1>
        <div className="container-links">
          <a href="https://github.com/888888b" target='_blank'><FontAwesomeIcon icon={faGithub} /></a>
          <a href="https://www.facebook.com/profile.php?id=61554714445212" target='_blank'><FontAwesomeIcon icon={faFacebook} /></a>
          <a href="https://www.instagram.com/vitor_araujo621/" target='_blank'><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="https://api.whatsapp.com/send?phone=5562998648742&text=Ol%C3%A1,%20desejo%20tratar%20de%20assuntos%20profissionais" target='_blank'><FontAwesomeIcon icon={faWhatsapp} /></a>
          <a href="https://twitter.com/VitorHu76072561" target='_blank'><FontAwesomeIcon icon={faTwitter} /></a>
        </div>
      </div>
    </header>
  )
}

export default Cabeça;