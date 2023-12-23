import React, { useEffect } from 'react';
import imgDev from "../src/images/img-dev.jpg";
import perfil from '../src/images/profile.png';
import AOS from "aos";
import html from "../src/images/html-log.png";
import js2 from "../src/images/js-logo.webp";
import css from "../src/images/css-log.png";
import react from "../src/images/react-logo.png";
import 'aos/dist/aos.css';


function Main(){
  useEffect( () => {
    AOS.init();
  }, [])
  return(
    <main className="main-container">
      <div className="div-titulo-sobre" data-aos="fade-up" data-aos-delay="300">

        <div className="divs-titulo" id="div-titulo-text">
          <h2>Sou <span>Vitor Hugo</span></h2>
          <h1>Desenvolvedor <br/>Web</h1>
          <a href="mailto:vitorhugo621contato@gmail.com" target="_blank">Contate-me</a>
        </div>
        
        <div className="divs-titulo" id="div-titulo-img">
          <div id="img-div">
            <img src={perfil}/>
          </div>
        </div>
        
      </div>

      <div className="div-sobre">
        <div id="div-sobre-text">
          <h2>Sobre min</h2>
          <h1>Explorando o mundo digital</h1>
          <p>Desde criança sou fascinado pela tecnologia e sua transformação. Atualmente, sigo meus estudos na área da programação web.</p>
        </div>

        <div id="div-sobre-img">
          <img src={imgDev}/>
        </div>
        
      </div>

      <div className='experiencia'>
        <div className='experiencia-text'>
          <h1>Linguagens e Frameworks</h1>
          <h2>E do meu conhecimento as tecnologias:</h2>
        </div>
        <div className='experiencia-icons'>
          <div className='linguagem'><img src={js2}/></div>
          <div className='linguagem'><img id="html" src={html}/></div>
          <div className='linguagem'><img src={css}/></div>
          <div className='linguagem'><img src={react}/></div>
        </div>
      </div>
    </main>
  )
}

export default Main;