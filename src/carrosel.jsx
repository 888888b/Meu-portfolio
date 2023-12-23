import { useState, useRef, useEffect } from "react";

import { motion } from "framer-motion";
import barbIMG from "../src/images/barbearia.jpg";
import loginIMG from "../src/images/login.jpg";
import quesIMG from "../src/images/questionario.png";
import buskIMG from "../src/images/buscador.jpg";
import calculator from "../src/images/calculator.png";
import html from "../src/images/html-log.png";
import js2 from "../src/images/js-logo.webp";
import css from "../src/images/css-log.png";
import react from "../src/images/react-logo.png";

const projetos = [{
  linkDeploy: "https://888888b.github.io/Landing-page-barbearia/",
  linkGit: "https://github.com/888888b/Landing-page-barbearia",
  foto: barbIMG,
  titulo: "Landing-page",
  tecnologias: ["HTML e CSS"]
  }, {
  linkDeploy: "https://buscadordecep-lyart.vercel.app/",
  linkGit: "https://github.com/888888b/Buscador-de-CEP",
  foto: buskIMG,
  titulo: "Buscador-de-CEP",
  tecnologias: ["REACT.JS", "HTML e CSS"]
  }, {
  linkDeploy: "https://calculadora-react-rho-six.vercel.app/",
  linkGit: "https://github.com/888888b/Calculadora-react",
  foto: calculator,
  titulo: "Calculadora",
  tecnologias: ["REACT.JS", "HTML e CSS"]
  }, {
  linkDeploy: "https://888888b.github.io/Pagina_Login/",
  linkGit: "https://github.com/888888b/Pagina_Login",
  foto: loginIMG,
  titulo: "Login-page",
  tecnologias: ["html e css"]
  }, {
  linkDeploy: "https://888888b.github.io/Pagina-Formulario/",
  linkGit: "https://github.com/888888b/Pagina-Formulario",
  foto: quesIMG,
  titulo: "Formulario",
  tecnologias: ["HTML e CSS"]
  }                         
];


function Carrosel(){

  const [width, setWidth] = useState();
  const carrosel = useRef();
  const container= useRef();

  useEffect( () => {
    setWidth(carrosel.current?.scrollWidth - carrosel.current?.offsetWidth);
  }, []);
  
  return(
    <div className="carrosel-app" ref={carrosel}>
      <h1>Meu portifolio</h1>
      <motion.div>
        <motion.div className="container-carrosel" ref={container} drag="x" dragConstraints={{ right: 0, left: -width - 20 }} >

          {projetos.map( projeto => (
            <motion.div className="div-images">
              <motion.div className="images-img">
                <img src={projeto.foto}/>
              </motion.div>
              <motion.div className="images-buttons">
                <div className="discriçao-imgs">
                  <h1>{projeto.titulo}</h1>
                  <p>
                    {projeto.tecnologias.map( tec => (
                      <span>{tec}</span>
                    ))}
                  </p>
                </div>
                <div className="images-btn">
                  <a href={projeto.linkGit} target="_blank">Codigo</a>
                  <a href={projeto.linkDeploy} target="_blank">Pagina</a>
                </div>
              </motion.div>
            </motion.div>
          ))}
          
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Carrosel;