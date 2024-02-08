import { useState, useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { TfiAngleLeft } from "react-icons/tfi";
import { TfiAngleRight } from "react-icons/tfi";
import LandingPage from "../src/images/LandingPage.png";
import FormPage from "../src/images/FormPage.png";
import CepPage from "../src/images/CepPage.png";
import CalculatorApp from "../src/images/CalculatorApp.png";
import html from "../src/images/html-log.png";
import js2 from "../src/images/js-logo.webp";
import css from "../src/images/css-log.png";
import stranger from '../src/images/stranger.png';
import react from "../src/images/react-logo.png";
import LoginPage from "../src/images/LoginPage.png";
import { couldStartTrivia } from "typescript";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const projetos = [{
  linkDeploy: "https://plataforma-filmes-three.vercel.app/",
  linkGit: "https://github.com/888888b/Plataforma_filmes",
  foto: stranger,
  titulo: 'Plataforma de Filmes',
  tecnologias: ['React.js', 'HTML e CSS', "JavaScript", "API"],
  descriçao: "Plataforma de filmes feita em REACT.JS que recebe dados de uma API",
  id: 'Stranger'
  }, {
  linkDeploy: "https://888888b.github.io/Login-page-3/",
  linkGit: "https://github.com/888888b/Login-page-3",
  foto: LoginPage,
  titulo: "Login-page",
  tecnologias: ["HTML e CSS", "JavaScript"],
  descriçao: "Pagina de login com cadastro de usuario e senha",
  id: 'LoginPage'
  }, {
  linkDeploy: "https://calculadora-react-rho-six.vercel.app/",
  linkGit: "https://github.com/888888b/Calculadora-react",
  foto: CalculatorApp,
  titulo: "Calculadora",
  tecnologias: ["REACT.JS", "HTML e CSS", "JavaScript"],
  descriçao: "Calculadora responsiva e funcional feita com REACT.JS",
  id: 'CalculatorApp'
  }, {
  linkDeploy: "https://buscadordecep-lyart.vercel.app/",
  linkGit: "https://github.com/888888b/Buscador-de-CEP",
  foto: CepPage,
  titulo: "Buscador-de-CEP",
  tecnologias: ["REACT.JS", "HTML e CSS", "JavaScript","API"],
  descriçao: "Aplicação que busca informações de endereço atraves de uma api usando CEP",
  id: 'CepPage'
  }, {
  linkDeploy: "https://888888b.github.io/Landing-page-barbearia/",
  linkGit: "https://github.com/888888b/Landing-page-barbearia",
  foto: LandingPage,
  titulo: "Landing-page",
  tecnologias: ["HTML e CSS"],
  descriçao: "Landing-page HTML para uma Barbearia",
  id: 'LandingPage'
  }, {
  linkDeploy: "https://888888b.github.io/Pagina-Formulario/",
  linkGit: "https://github.com/888888b/Pagina-Formulario",
  foto: FormPage,
  titulo: "Formulario",
  tecnologias: ["HTML e CSS"],
  descriçao: "Formulario responsivo feito em HTML",
  id: 'FormPage'
  }
];


function Carrosel(){

  const [width, setWidth] = useState();
  const carrosel = useRef();
  const container= useRef();
  const controls = useAnimation();
  const [autorizado, setAutorizado] = useState(false);
  const [widthApp, setWidthApp] = useState(0);
  const controlSlides = useRef();
  const swiper = new Swiper('.swiper', {
    direction: 'horizontal', 
    modules: [Navigation, Pagination], 
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      600: {
        slidesPerGroup: 1,
        slidesPerView: 1
      },

      1100: {
        slidesPerGroup: 2,
        slidesPerView: 2
      },

      1600: {
        slidesPerView: 3,
        slidesPerGroup: 3
      },

      2100: {
        slidesPerView: 4,
        slidesPerGroup: 4
      }, 
      
      2700: {
        slidesPerView: 5,
        slidesPerGroup: 5
      }
    }
  });
  
  useEffect( () => {

    const loadingDelay = setTimeout(() => {
      setAutorizado(true);
    }, 500);

    const contentDelay = setTimeout(() => {
      setWidth(carrosel.current?.scrollWidth - carrosel.current?.offsetWidth);
      setWidthApp(carrosel.current?.offsetWidth);
    }, 2000);

  }, [setWidthApp, swiper]);

  return autorizado ?(
    <div className="carrosel-app" ref={carrosel}>
      <h1>Meus Projetos</h1>

      {widthApp < 750 ? (
        <motion.div className="btn">
          <motion.div className="container-carrosel" ref={container} drag="x" dragConstraints={{ right: 0, left: -width - 20 }}>
            {projetos.map( projeto => (
              <motion.div className="div-images">
                <motion.div className="images-img">
                  <img src={projeto.foto}/>
                </motion.div>
              </motion.div>
            ))} 
          </motion.div>
        </motion.div>
      ):(
        <div className="swiper">
          <div className="swiper-wrapper" ref={container}>
            {projetos.map( projeto => (
              <div className="swiper-slide">
                <div ref={controlSlides} className="control-slides">
                  <div className="images-img" id="swiper-img">
                    <img id={projeto.id} src={projeto.foto}/>
                  </div>
                </div>
              </div>
              ))} 
          </div>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>
      )}
    </div>
  ) : null
}

export default Carrosel;