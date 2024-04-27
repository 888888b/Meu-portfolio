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
import moviezilla from '../src/images/moviezilla.png';
import react from "../src/images/react-logo.png";
import LoginPage from "../src/images/login-page.png";
import { couldStartTrivia } from "typescript";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AOS from "aos";
import 'aos/dist/aos.css';

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const projetos = [{
  linkDeploy: "https://plataforma-filmes-three.vercel.app/",
  linkGit: "https://github.com/888888b/Plataforma_filmes",
  foto: moviezilla,
  titulo: 'Plataforma de Filmes',
  tecnologias: [['React'], ['HTML e CSS'], ["JavaScript"], ["API"]],
  descriçao: "Plataforma de filmes que consome dados de uma api",
  id: 'moviezilla'
  },{
    linkDeploy: "https://login-page-f56l.vercel.app/",
    linkGit: "https://github.com/888888b/Login_page",
    foto: LoginPage,
    titulo: "Pagina de Login",
    tecnologias: [["HTML e CSS"], ["JavaScript"], ['React']],
    descriçao: "Pagina com login e cadastro de usuario. Pagina amigavel e responsiva.",
    id: 'LoginPage'
    }, {
    linkDeploy: "https://calculadora-react-rho-six.vercel.app/",
    linkGit: "https://github.com/888888b/Calculadora-react",
    foto: CalculatorApp,
    titulo: "Calculadora",
    tecnologias: [["REACT"], ["HTML e CSS"], ["JavaScript"]],
    descriçao: "Calculadora responsiva e funcional feita com react.js",
    id: 'CalculatorApp'
  },{
  linkDeploy: "https://buscadordecep-lyart.vercel.app/",
  linkGit: "https://github.com/888888b/Buscador-de-CEP",
  foto: CepPage,
  titulo: "Buscador de CEP",
  tecnologias: [["REACT"], ["HTML e CSS"], ["JavaScript"],["API"]],
  descriçao: "Aplicação que busca informações de endereço atraves de uma api usando CEP",
  id: 'CepPage'
  }, {
  linkDeploy: "https://888888b.github.io/Landing-page-barbearia/",
  linkGit: "https://github.com/888888b/Landing-page-barbearia",
  foto: LandingPage,
  titulo: "Landing Page",
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
    AOS.init();
    duration: 900;

    const loadingDelay = setTimeout(() => {
      setAutorizado(true);
    }, 500);

    const contentDelay = setTimeout(() => {
      setWidth(carrosel.current?.scrollWidth - carrosel.current?.offsetWidth);
      setWidthApp(carrosel.current?.offsetWidth);
    }, 2000);

  }, [setWidthApp, swiper]);

  return autorizado ?(
    <div className="carrosel-app" ref={carrosel} data-aos="fade-up" data-aos-delay="300">
      <h1>Meus Projetos</h1>
        <div className="swiper">
          <div className="swiper-wrapper" ref={container}>
            {projetos.map( projeto => (
              <div className="swiper-slide">
                <div ref={controlSlides} className="control-slides">
                  <div className="images-img" id="swiper-img">
                    <img id={projeto.id} src={projeto.foto}/>
                    <div className="img-gradient"></div>
                  </div>

                  <div className="slide-link-button">
                    <h2>{projeto.titulo}</h2>
                    <div id="indent-content">
                      <p>{projeto.descriçao}</p>
                      <div id="tecnologies">
                        {projeto.tecnologias.map(tecn => (
                          <h4>{tecn}</h4>
                        ))}
                      </div>
                    </div>
                    <div className="link-buttons">
                      <a target="_blank" href={projeto.linkDeploy}>Pagina</a>
                      <a target="_blank" href={projeto.linkGit}>Codigo</a>
                    </div>
                  </div>
                </div>
              </div>
              ))} 
          </div>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>
    </div>
  ) : null
}

export default Carrosel;