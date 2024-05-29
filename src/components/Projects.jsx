import '../styles/App.css';
import { useState, useRef, useEffect } from "react";
import LandingPage from "../images/LandingPage.png";
import FormPage from "../images/FormPage.png";
import CepPage from "../images/CepPage.png";
import CalculatorApp from "../images/CalculatorApp.png";
import ZilloCine from '../images/ZilloCine.png';
import LoginPage from "../images/login-page.png";
import AOS from "aos";
import 'aos/dist/aos.css';
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { Swiper, SwiperSlide } from './Swiper.jsx';
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const myProjects = [{
  linkDeploy: "https://plataforma-filmes-three.vercel.app/",
  linkGit: "https://github.com/888888b/Plataforma_filmes",
  img: ZilloCine,
  title: 'ZilloCine',
  tecnologies: [['React'], ['HTML'], ['CSS'],["JavaScript"], ["API"]],
  about: 'ZilloCine é uma plataforma de filmes que desenvolvi com o objetivo de oferecer aos usuários uma interface intuitiva e um design agradável. A plataforma conta com seis páginas principais: Home, Filmes, Séries, Conta, Player e Login. Utilizando uma API, o ZilloCine fornece todas as informações necessárias sobre os filmes disponíveis. Ao longo do desenvolvimento do projeto, tive a oportunidade de aprimorar minhas habilidades em diversas áreas, como design, lógica de programação, uso de APIs e desenvolvimento com React.',
  conclusion: "A criação do ZilloCine teve um impacto significativo no meu progresso como desenvolvedor web, permitindo-me ganhar experiência prática e enfrentar diversos desafios técnicos.",
  id: 'ZilloCine'
  },{
    linkDeploy: "https://login-page-f56l.vercel.app/",
    linkGit: "https://github.com/888888b/Login_page",
    img: LoginPage,
    title: "Pagina de Login",
    tecnologies: [['React'], ["HTML"], ['CSS'], ["JavaScript"]],
    about: 'Página de login desenvolvida com o objetivo de aprimorar e expandir meus conhecimentos na criação de aplicações que integram sistemas externos. O cadastro e login são feitos através do Firebase, e os dados do usuário podem ser vistos na página do perfil.',
    conclusion: "O desenvolvimento deste projeto me proporcionou aprimorar minhas habilidades de lógica de programação e integração com APIs.",
    id: 'Pagina de Login'
    }, {
    linkDeploy: "https://calculadora-react-rho-six.vercel.app/",
    linkGit: "https://github.com/888888b/Calculadora-react",
    img: CalculatorApp,
    title: "Calculadora",
    tecnologies: [["REACT"], ["HTML"], ['CSS'],["JavaScript"]],
    about: 'Calculadora web que pode realizar cálculos básicos como adição, subtração, divisão, multiplicação, raiz quadrada, potência, entre outros. O projeto também conta com um design agradável e responsivo.',
    conclusion: "Sendo um dos primeiros projetos que criei utilizando React, o desenvolvimento desta calculadora foi essencial para o meu avanço em lógica de programação e tratamento de dados.",
    id: 'CalculatorApp'
  }
];

function Carrosel(){
  const [authorized, setAuthorized] = useState(false);
  const [swiperRef, setSwiperRef] = useState(undefined);
  const projectsRef = useRef([]);

  const breakpoints = {
    1:{
      slidesPerView: 1
    },
    1500:{
      slidesPerView: 2
    },
    2000:{
      slidesPerView: 3
    },
    2000:{
      slidesPerView: 4
    }
  };

  const equalizeHeight =  () => {

    const getMaxHeight = (projectRef) => {
      let height = 0;
      const elements = projectRef.current;
      if (elements && Array.isArray(elements)){
        elements.forEach(element => {
          if (element.offsetHeight > 0){
            if (element.offsetHeight > height){
              height = element.offsetHeight;
            }
          }
        })

      };

      return height;
    };

    const equalize = () => {
      const maxHeight = getMaxHeight(projectsRef);
      if (maxHeight){
        projectsRef.current.forEach(element => {
          element.style.height = `${maxHeight}px`;
        });
      }
    };

    if (projectsRef.current.length && projectsRef.current[0].offsetHeight){
      equalize();
    }else{
      setTimeout(equalizeHeight, 500);
    }
  };
  
  useEffect( () => {
    AOS.init();
    duration: 900;

    setAuthorized(true);

    equalizeHeight();
  }, []);
  
  const handleSwiperControl = (command) => {
    if (swiperRef){
      if (command === 'next') {
        swiperRef.slideNext();
      }else{
        swiperRef.slidePrev();
      }
    }
  };

  return authorized ?(
    <section className="projects-container" data-aos="fade-up" data-aos-delay="300">
      <h1>Meus projetos</h1>
        <section className="swiper-container">
  
          <button className="swiper-btns-control btn-left"><SlArrowLeft onClick={() => {handleSwiperControl('prev')}} className="arrows"/></button>
          <button className="swiper-btns-control btn-right"><SlArrowRight onClick={() => {handleSwiperControl('next')}} className="arrows"/></button>
          
          <Swiper className='swiper' breakpoints={breakpoints} loop={true} swiperRef={setSwiperRef}>
              {myProjects.map( (project, index) => (
                <SwiperSlide>
                  <div ref={(e) => {projectsRef.current[index] = e}} className="project-slide">

                    <div className="project-img">
                      <img id={project.id} src={project.img}/>
                    </div>

                    <section className="slides-info">
                      <h2>{project.title}</h2>

                      <div className="indent-content">

                        <div className='about-project about'>
                          <h3>Sobre</h3>
                          <p>{project.about}</p>
                        </div>

                        <div className='about-project conclusion'>
                          <h3>Conclusão</h3>
                          <p>{project.conclusion}</p>
                        </div>

                        <div id="tecnologies">
                          {project.tecnologies.map(tecnology => (
                            <h4>{tecnology}</h4>
                          ))}
                        </div>
                      </div>

                      <div className="link-buttons">

                        <a target="_blank" href={project.linkDeploy}>
                          Pagina
                          <FaArrowUpRightFromSquare className='arrow-up-icon'/>
                        </a>

                        <a target="_blank" href={project.linkGit}>
                          Codigo
                          <FaArrowUpRightFromSquare className='arrow-up-icon'/>
                        </a>

                      </div>
                    </section>
                  </div>
                </SwiperSlide>
                ))}
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </Swiper>
        </section>
    </section>
  ) : null
}

export default Carrosel;