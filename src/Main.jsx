import imgDev from "../src/images/img-dev.jpg";
import imgPerfil from "../src/images/foto-perfil.png";

function Main(){
  return(
    <main className="main-container">
      <div className="div-titulo-sobre">

        <div className="divs-titulo" id="div-titulo-text">
          <h2>Sou <span>Vitor Hugo</span></h2>
          <h1>Desenvolvedor Web</h1>
          <a href="mailto:vitorhugo621contato@gmail.com" target="_blank">Contate-me</a>
        </div>
        
        <div className="divs-titulo" id="div-titulo-img">
          <div id="img-div">
            <img src={imgPerfil}/>
          </div>
        </div>
        
      </div>

      <div className="div-sobre">
        <div id="div-sobre-text">
          <h2>Sobre min</h2>
          <h1>Sou um Desenvolvedor <br/>Web</h1>
          <p>Desde de criança sou fascinado pela maneira como são criados programas e sistemas, e depois de anos aqui estou , na programação!</p>
        </div>

        <div id="div-sobre-img">
          <img src={imgDev}/>
        </div>
        
      </div>

      <div className="div-experiencia">
        <div className="experiencia-titulo"><h2>Meu resumo</h2></div>
        <div className="experiencia-divs">
          <div className="experiencia-text">
            <h2>Conhecimento</h2>
            <h1>A mais de 1 ano como um <span>Desenvolvedor</span> </h1>
          </div>
          <div className="div-estudos">
            <ul>
              <li>Java Script</li>
              <p>1 ano de experiencia</p>
              <li>HTML e CSS</li>
              <p>1.5 anos de experiencia</p>
              <li>Python</li>
              <p>1 ano de experiencia</p>
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Main;