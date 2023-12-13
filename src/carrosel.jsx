import { useState, useRef, useEffect } from "react";

import { motion } from "framer-motion";
import barbIMG from "../src/images/barbearia.jpg";
import loginIMG from "../src/images/login.jpg";
import quesIMG from "../src/images/questionario.jpg";
import buskIMG from "../src/images/buscador.jpg";

const projetos = [{
  linkDeploy: "https://888888b.github.io/Landing-page-barbearia/",
  linkGit: "https://github.com/888888b/Landing-page-barbearia",
  foto: barbIMG
  }, {
  linkDeploy: "https://buscadordecep-lyart.vercel.app/",
  linkGit: "https://github.com/888888b/Buscador-de-CEP",
  foto: buskIMG
  }, {
  linkDeploy: "https://888888b.github.io/Pagina_Login/",
  linkGit: "https://github.com/888888b/Pagina_Login",
  foto: loginIMG
  }, {
  linkDeploy: "https://888888b.github.io/Pagina-Formulario/",
  linkGit: "https://github.com/888888b/Pagina-Formulario",
  foto: quesIMG
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
                <a href={projeto.linkGit} target="_blank">Github</a>
                <a href={projeto.linkDeploy} target="_blank">Deploy</a>
              </motion.div>
            </motion.div>
          ))}
          
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Carrosel;