import { useEffect, React } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub, faLinkedin,faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function Cabeça(){

  return(
    <header>
      <section className="header-content">
        <h1>Vitor</h1>
        <div className="header-links">
          <a href="https://github.com/888888b" target='_blank'><FontAwesomeIcon icon={faGithub} /></a>
          <a href="https://www.instagram.com/vitor_araujo621/" target='_blank'><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="https://www.linkedin.com/in/vitor-araujo-2054622a6" target="_blank" ><FontAwesomeIcon icon={faLinkedin}/></a>
          <a href="https://api.whatsapp.com/send?phone=5562998648742&text=Ol%C3%A1,%20desejo%20tratar%20de%20assuntos%20profissionais" target='_blank'><FontAwesomeIcon icon={faWhatsapp} /></a>
        </div>
      </section>
    </header>
  )
}

export default Cabeça;