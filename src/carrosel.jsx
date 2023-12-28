import { useState, useRef, useEffect } from "react";

import { motion } from "framer-motion";
import barbIMG from "../src/images/barbearia.jpg";
import quesIMG from "../src/images/questionario.png";
import buskIMG from "../src/images/buscador.jpg";
import calculator from "../src/images/calculator.png";
import html from "../src/images/html-log.png";
import js2 from "../src/images/js-logo.webp";
import css from "../src/images/css-log.png";
import react from "../src/images/react-logo.png";
import login2 from "../src/images/login-page-2.png";

const projetos = [{
  linkDeploy: "https://buscadordecep-lyart.vercel.app/",
  linkGit: "https://github.com/888888b/Buscador-de-CEP",
  foto: buskIMG,
  titulo: "Buscador-de-CEP",
  tecnologias: ["REACT.JS", "HTML e CSS"],
  descriçao: "Aplicação que busca informações de endereço atraves de um CEP"
  }, {
  linkDeploy: "https://888888b.github.io/Login-page-3/",
  linkGit: "https://github.com/888888b/Login-page-3",
  foto: login2,
  titulo: "Login-page",
  tecnologias: ["HTML e CSS"],
  descriçao: "Pagina de login com cadastro de usuario e senha"
  }, {
  linkDeploy: "https://calculadora-react-rho-six.vercel.app/",
  linkGit: "https://github.com/888888b/Calculadora-react",
  foto: calculator,
  titulo: "Calculadora",
  tecnologias: ["REACT.JS", "HTML e CSS"],
  descriçao: "Calculadora feita em REACT.JS"
  }, {
  linkDeploy: "https://888888b.github.io/Landing-page-barbearia/",
  linkGit: "https://github.com/888888b/Landing-page-barbearia",
  foto: barbIMG,
  titulo: "Landing-page",
  tecnologias: ["HTML e CSS"],
  descriçao: "Landing-page HTML para uma Barbearia"
  }, {
  linkDeploy: "https://888888b.github.io/Pagina-Formulario/",
  linkGit: "https://github.com/888888b/Pagina-Formulario",
  foto: quesIMG,
  titulo: "Formulario",
  tecnologias: ["HTML e CSS"],
  descriçao: "Formulario responsivo feito em HTML"
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
      <motion.div className="btn">
        <motion.div className="container-carrosel" ref={container} drag="x" dragConstraints={{ right: 0, left: -width - 20 }}>

          {projetos.map( projeto => (
            <motion.div className="div-images">
              <motion.div className="images-img">
                <img src={projeto.foto}/>
              </motion.div>
              <motion.div className="images-buttons">
                <div className="discriçao-imgs">
                  <h1>{projeto.titulo}</h1>
                  <p id="descrição">{projeto.descriçao}</p>
                  <p id="tecnologias">
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