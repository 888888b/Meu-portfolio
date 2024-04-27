import React, { useEffect } from 'react';
import imgDev from "../src/images/img-dev.jpg";
import perfil from '../src/images/profile.png';
import AOS from "aos";
import 'aos/dist/aos.css';
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoHtml5 } from "react-icons/io";
import { FaReact } from "react-icons/fa6";
import { RiJavascriptFill } from "react-icons/ri";
import { AiTwotoneApi } from "react-icons/ai";
import { IoLogoPython } from "react-icons/io";
import { FaGitSquare } from "react-icons/fa";

function Main(){
  useEffect( () => {
    AOS.init();
      duration: 900;
  }, [])

  return(
    <main className="main-container">
      <div className="div-titulo-sobre" data-aos="fade-up" data-aos-delay="300">

        <div className="divs-titulo" id="div-titulo-text">
          <h2>Sou o <span>Vitor Hugo</span></h2>
          <h1>Desenvolvedor <br/>Web</h1>
          <a href="mailto:vitorhugo621contato@gmail.com" target="_blank">Contate-me</a>
        </div>
        
        <div className="divs-titulo" id="div-titulo-img">
          <div id="img-div">
            <img src={perfil}/>
          </div>
        </div>
        
      </div>

      <div className="div-sobre" data-aos="fade-up">
        <div id="div-sobre-text">
          <h2>Sobre min</h2>
          <h1>Estudante de Tecnologia</h1>
          <p>Olá, meu nome é Vitor Hugo e sou um jovem fascinado pela tecnologia. Estou há mais de um ano estudando e praticando minhas habilidades na área do desenvolvimento web. É possível ver minha evolução através dos projetos que realizei até então. No momento, estou estudando SQL Server, pois busco expandir meus conhecimentos e capacidade de desenvolver aplicações.</p>
        </div>

        <div id="div-sobre-img">
          <img src={imgDev}/>
        </div>
        
      </div>

      <div className='experiencia' data-aos="fade-up">
        <div className='experiencia-text'>
          <h1>Linguagens e Framework</h1>
          <h2>Minhas habilidades:</h2>
        </div>
        <div id='icons-box-container'>

        <div className='icons-box'>
          <IoLogoHtml5 className='icons'/>
          <h2>html5</h2>
        </div>
          <div className='icons-box'>
            <IoLogoCss3 className='icons' />
            <h2>css3</h2>
          </div>
          <div className='icons-box'>
            <RiJavascriptFill className='icons'/>
            <h2>javascript</h2>
          </div>
          <div className='icons-box'>
            <FaReact className='icons'/>
            <h2>react</h2>
          </div>
          <div className='icons-box'>
            <IoLogoPython className='icons'/>
            <h2>python</h2>
          </div>
          <div className='icons-box'>
            <FaGitSquare className= 'icons'/>
            <h2>git</h2>
          </div>
          <div className='icons-box'>
            <AiTwotoneApi className='icons'/>
            <h2>api</h2>
          </div>
 
        </div>
      </div>
    </main>
  )
}

export default Main;