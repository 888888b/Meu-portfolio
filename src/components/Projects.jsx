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

const myProjects = [{
  linkDeploy: "https://plataforma-filmes-three.vercel.app/",
  linkGit: "https://github.com/888888b/Plataforma_filmes",
  img: ZilloCine,
  title: 'ZilloCine',
  tecnologies: [['React'], ['HTML e CSS'], ["JavaScript"], ["API"]],
  about: 'ZilloCine é uma plataforma de filmes que desenvolvi com o objetivo de oferecer aos usuários uma interface intuitiva e um design agradável. A plataforma conta com seis páginas principais: Home, Filmes, Séries, Conta, Player e Login. Utilizando uma API, o ZilloCine fornece todas as informações necessárias sobre os filmes disponíveis. Ao longo do desenvolvimento do project, tive a oportunidade de aprimorar minhas habilidades em diversas áreas, como design, lógica de programação, uso de APIs e desenvolvimento com React.',
  conclusion: "A criação do ZilloCine teve um impacto significativo no meu progresso como desenvolvedor web, permitindo-me ganhar experiência prática e enfrentar diversos desafios técnicos.",
  id: 'ZilloCine'
  },{
    linkDeploy: "https://login-page-f56l.vercel.app/",
    linkGit: "https://github.com/888888b/Login_page",
    img: LoginPage,
    title: "Pagina de Login",
    tecnologies: [["HTML e CSS"], ["JavaScript"], ['React']],
    about: 'Página de login desenvolvida por com o objetivo de aprimorar e expandir meus conhecimentos na criação de aplicações que integram sistemas externos.',
    conclusion: "O desenvolvimento deste projeto me proporcionou aprimorar minhas habilidades de lógica de programação e integração com APIs.",
    id: 'LoginPage'
    }, {
    linkDeploy: "https://calculadora-react-rho-six.vercel.app/",
    linkGit: "https://github.com/888888b/Calculadora-react",
    img: CalculatorApp,
    title: "Calculadora",
    tecnologies: [["REACT"], ["HTML e CSS"], ["JavaScript"]],
    about: '',
    conclusion: "Calculadora responsiva e funcional feita com react.js",
    id: 'CalculatorApp'
  },{
  linkDeploy: "https://buscadordecep-lyart.vercel.app/",
  linkGit: "https://github.com/888888b/Buscador-de-CEP",
  img: CepPage,
  title: "Buscador de CEP",
  tecnologies: [["REACT"], ["HTML e CSS"], ["JavaScript"],["API"]],
  about: '',
  conclusion: "Aplicação que busca informações de endereço atraves de uma api usando CEP",
  id: 'CepPage'
  }, {
  linkDeploy: "https://888888b.github.io/Landing-page-barbearia/",
  linkGit: "https://github.com/888888b/Landing-page-barbearia",
  img: LandingPage,
  title: "Landing Page",
  tecnologies: ["HTML e CSS"],
  about: '',
  conclusion: "Landing-page HTML para uma Barbearia",
  id: 'LandingPage'
  }, {
  linkDeploy: "https://888888b.github.io/Pagina-Formulario/",
  linkGit: "https://github.com/888888b/Pagina-Formulario",
  img: FormPage,
  title: "Formulario",
  tecnologies: ["HTML e CSS"],
  about: '',
  conclusion: "Formulario responsivo feito em HTML",
  id: 'FormPage'
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
      <h1>Meus projects</h1>
        <section className="swiper-container">
  
          <button className="swiper-btns-control btn-left"><SlArrowLeft onClick={() => {handleSwiperControl('prev')}} className="arrows"/></button>
          <button className="swiper-btns-control btn-right"><SlArrowRight onClick={() => {handleSwiperControl('next')}} className="arrows"/></button>
          
          <Swiper className='swiper' breakpoints={breakpoints} swiperRef={setSwiperRef}>
              {myProjects.map( (project, index) => (
                <SwiperSlide>
                  <div ref={(e) => {projectsRef.current[index] = e}} className="project-slide">

                    <div className="images-img" id="swiper-img">
                      <img id={project.id} src={project.img}/>
                      <div className="img-gradient"></div>
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
                        <a target="_blank" href={project.linkDeploy}>Pagina</a>
                        <a target="_blank" href={project.linkGit}>Codigo</a>
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