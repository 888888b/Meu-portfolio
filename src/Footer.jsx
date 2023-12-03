import react from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons';


function Footer(){
  return(
    <footer>
      <p>Minha pagina de portifolio</p>
      <div id="footer-icons" className="container-links">
        <a href="#"><FontAwesomeIcon icon={faGithub}/></a>
        <a href="#"><FontAwesomeIcon icon={faInstagram}/></a>
        <a href="#"><FontAwesomeIcon icon={faTwitter}/></a>
        <a href="#"><FontAwesomeIcon icon={faFacebook}/></a>
      </div>
    </footer>
  )
}

export default Footer;