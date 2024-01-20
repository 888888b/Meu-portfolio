import { useState, useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { TfiAngleLeft } from "react-icons/tfi";
import { TfiAngleRight } from "react-icons/tfi";
import barbIMG from "../src/images/barbearia.jpg";
import quesIMG from "../src/images/questionario.png";
import buskIMG from "../src/images/buscador.jpg";
import calculator from "../src/images/calculator.png";
import html from "../src/images/html-log.png";
import js2 from "../src/images/js-logo.webp";
import css from "../src/images/css-log.png";
import react from "../src/images/react-logo.png";
import login2 from "../src/images/login-page-2.png";
import ophm from '../src/images/ophm.png';
import { couldStartTrivia } from "typescript";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const projetos = [{
  linkDeploy: "https://plataforma-filmes-three.vercel.app/",
  linkGit: "https://github.com/888888b/Plataforma_filmes",
  foto: ophm,
  titulo: 'Plataforma de Filmes',
  tecnologias: ['React.js', 'HTML e CSS', "JavaScript", "API"],
  descriçao: "Plataforma de filmes feita em REACT.JS que recebe dados de uma API"
  }, {
  linkDeploy: "https://888888b.github.io/Login-page-3/",
  linkGit: "https://github.com/888888b/Login-page-3",
  foto: login2,
  titulo: "Login-page",
  tecnologias: ["HTML e CSS", "JavaScript"],
  descriçao: "Pagina de login com cadastro de usuario e senha"
  }, {
  linkDeploy: "https://calculadora-react-rho-six.vercel.app/",
  linkGit: "https://github.com/888888b/Calculadora-react",
  foto: calculator,
  titulo: "Calculadora",
  tecnologias: ["REACT.JS", "HTML e CSS", "JavaScript"],
  descriçao: "Calculadora responsiva e funcional feita com REACT.JS"
  }, {
  linkDeploy: "https://buscadordecep-lyart.vercel.app/",
  linkGit: "https://github.com/888888b/Buscador-de-CEP",
  foto: buskIMG,
  titulo: "Buscador-de-CEP",
  tecnologias: ["REACT.JS", "HTML e CSS", "JavaScript","API"],
  descriçao: "Aplicação que busca informações de endereço atraves de uma api usando CEP"
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
  const controls = useAnimation();
  const [carroselWidth, setCarroselWidth] = useState();
  const [carroselOff, setCarroselOff] = useState();
  const [autorizado, setAutorizado] = useState(false);
  const [oldWidth, setOldWidth] = useState(0);
  const [currentWidth, setCurrentWidth] = useState(50);


  const btnNextCarrosel = () => {
    if (carroselWidth > carroselOff) {
      if (currentWidth < oldWidth) {
        controls.start({x: -currentWidth + '%' , transition: { duration: 0.7, ease: 'easeInOut' }});
        setCurrentWidth(currentWidth + 50);
      } else{
        controls.start({x: -oldWidth + '%' , transition: { duration: 0.7, ease: 'easeInOut' }});
      }
    }
  }

  const btnPrevCarrosel = () => {
    if (currentWidth === 50) {
      controls.start({x: 0 + '%' , transition: { duration: 0.7, ease: 'easeInOut' }});
    }else{
      controls.start({x: -(currentWidth / 2) + '%' , transition: { duration: 0.7, ease: 'easeInOut' }});
      setCurrentWidth(currentWidth /2);
    }
  }

  useEffect( () => {

    const loadingDelay = () => {
      setAutorizado(true);
    }

    const contentDelay = () => {
      setWidth(carrosel.current?.scrollWidth - carrosel.current?.offsetWidth);
      setCarroselWidth(container.current?.scrollWidth);
      setCarroselOff(container.current?.offsetWidth);
      setOldWidth(parseInt((container.current?.scrollWidth * 100) / container.current?.offsetWidth - 100));
    }

    setTimeout(contentDelay, 2000)
    setTimeout(loadingDelay, 500);
  }, []);

  return autorizado ?(
    <div className="carrosel-app" ref={carrosel}>
      <h1>Meus Projetos</h1>

      <button className="btnNavegação" id="btn-left" onClick={btnPrevCarrosel}><TfiAngleLeft id="angle-icon"/></button>
      <button  className="btnNavegação" id="btn-right" onClick={btnNextCarrosel}><TfiAngleRight id="angle-icon"/></button>

      <motion.div className="btn">
        <motion.div  animate={controls} className="container-carrosel" ref={container} drag="x" dragConstraints={{ right: 0, left: -width - 20 }}>

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
  ) : null
}

export default Carrosel;