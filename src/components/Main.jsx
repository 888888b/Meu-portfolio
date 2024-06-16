import React from 'react';
import sub_img from "../images/sub-image.jpg";
import profile_img from '../images/profile-photo.png';
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoHtml5 } from "react-icons/io";
import { FaReact } from "react-icons/fa6";
import { RiJavascriptFill } from "react-icons/ri";
import { AiTwotoneApi } from "react-icons/ai";
import { IoLogoPython } from "react-icons/io";
import { FaGitSquare } from "react-icons/fa";

function Main(){

  return(
    <section className="profile-container">
      <section className="profile-intro">

        <div className="intro-title">
          <h2>Sou o <span>Vitor Hugo</span></h2>
          <h1>Desenvolvedor <br/>Web</h1>
          <a href="mailto:vitorhugo621contato@gmail.com" target="_blank">Contate-me</a>
        </div>
        
        <div className="intro-img">
            <img src={profile_img}/>
        </div>
        
      </section>

      <section className="profile-details">
        <div className='about-me'>
          <h2>Sobre min</h2>
          <h1>Estudante de Tecnologia</h1>
          <p>Olá, meu nome é Vitor Hugo e sou um jovem apaixonado por tecnologia. Estou há mais de um ano dedicado ao estudo e à prática das habilidades em desenvolvimento web. É possível acompanhar minha evolução pelos projetos que já realizei. Atualmente, estou focado em estudar e desenvolver projetos que integram APIs, buscando assim ampliar meus conhecimentos e capacidade para desenvolver aplicações.</p>
        </div>

        <div className='about-img'>
          <img src={sub_img}/>
        </div> 
      </section>

      <section className='profile-experience'>

        <div className='title-box'>
          <h1>Linguagens e Framework</h1>
          <h2>Minhas habilidades:</h2>
        </div>

        <section className='languages-container'>
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
 
        </section>
      </section>
    </section>
  )
}

export default Main;