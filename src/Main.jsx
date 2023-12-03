

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
            <img src="https://i.pinimg.com/originals/51/20/1d/51201dde76e237887b72e439ba68bf47.jpg"/>
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
          <img src="./images/img-dev.jpg"/>
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

      <div className="portifolio">
        <div className="portifolio-titulo">
          <h2>Meu Portifolio</h2>
        </div>

        <div className="div-projetos">
          <div className="projetos" id="projeto-1">
            <div className="projetos-img">
              <iframe src="https://888888b.github.io/Pagina_Login/"/>
            </div>
            <div className="projetos-text">
              <a className="a-github"  href="https://github.com/888888b/Pagina_Login" target="_blank"
>Github</a>
              <a href="https://888888b.github.io/Pagina_Login/"  className="a-deploy" target="_blank"
>Deploy</a>
            </div>
          </div>
            
          <div className="projetos" id="projeto-2">
            <div className="projetos-img">
              <iframe src='https://888888b.github.io/Landing-page-barbearia/'/>
            </div>
            <div className="projetos-text">
              <a className="a-github"  href="https://github.com/888888b/Landing-page-barbearia" target="_blank">Github</a>
              <a href="https://888888b.github.io/Landing-page-barbearia/"  className="a-deploy" target="_blank"
>Deploy</a>
            </div>
          </div>
            
          <div className="projetos" id="projeto-3">
            <div className="projetos-img">
              <iframe src="https://buscadordecep-lyart.vercel.app/"/>
            </div>
            <div className="projetos-text">
              <a className="a-github"  href="https://github.com/888888b/Buscador-de-CEP" target="_blank"
>Github</a>
              <a href="https://buscadordecep-lyart.vercel.app/"  className="a-deploy" target="_blank"
>Deploy</a>
            </div>
          </div>
            
          <div className="projetos" id="projeto-4">
            <div className="projetos-img">
              <iframe src="https://888888b.github.io/Pagina-Formulario/"/>
            </div>
            <div className="projetos-text">
              <a className="a-github" href="https://github.com/888888b/Pagina-Formulario" target="_blank"
>Github</a>
              <a href="https://888888b.github.io/Pagina-Formulario/"  className="a-deploy" target="_blank"
>Deploy</a>
            </div>
          </div>
            
        </div>
      </div>
    </main>
  )
}

export default Main;