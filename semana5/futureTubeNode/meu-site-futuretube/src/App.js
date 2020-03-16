import React from 'react';
import './App.css';

function App() {
  return (
<div className="future-tube">

      <div className="head">
              <img id="future" src={require ( "../src/img/future4icon.png" )}/>
              <header>FutureTube</header>
              <form id="search">
                  <input  type="search" placeholder="Buscar..."></input>
              </form>

      </div>

      <div id="alinhar">

          <nav>
              <div>
                  <a href="https://meira-jh.github.io/primeiro-publicado/">Início</a>
              </div>
              <div>
                  <a href="">Em alta!</a>
              </div>
              <div>
                  <a href="">Favoritos</a>
              </div>
              <div>
                  <a href="">Histórico</a>
              </div>
              <div>
                  <a href="">Minha Conta</a>
              </div>
          </nav>


          <div id="video-container">

            <div>
             <div id="item1">
                  <a href="teladetalhe.html"> <img className="item" src={require ( "../src/img/video 1.jpg" )}/></a>
                  <a className="titulo" href="teladetalhe.html"><u>Cliffs of Tomorrow</u></a>
              </div>

              <div id="item2">
                  <a href="teladetalhe2.html"> <img className="item" src={require ( "../src/img/video 2.jpg" ) }/></a>
                  <a className="titulo" href="teladetalhe2.html"><u>Futurythrocytes</u></a>
              </div>
            </div>
             
            <div>
            <div id="item3">
                  <a href="content1.html"> <img className="item" src={require ( "../src/img/video 3.jpg" ) }/></a>
                  <a className="titulo" href="content1.html"><u>Planets to Come</u></a>
              </div>

              <div id="item4">
                  <a href="content1.html"> <img className="item" src={require ( "../src/img/video 4.jpg" ) }/></a>
                  <a className="titulo" href="content1.html"><u>White Shores of Destiny</u></a>
              </div>
            </div>
              

            <div>
            <div id="item5">
                  <a href="content1.html"> <img className="item" src={require ( "../src/img/video 5.jpg" ) }/></a>
                  <a className="titulo" href="content1.html"><u>FFF - Fogs From the Future</u></a>
              </div>

              <div id="item6">
                  <a href="content1.html"> <img className="item" src={require ( "../src/img/video 6.jpg" ) }/></a>
                  <a className="titulo" href="content1.html"><u>Standing Ground</u></a>
              </div>
            </div>
             

             <div>
             <div id="item7">
                  <a href="content1.html"> <img className="item" src={require ( "../src/img/video 7.jpg" ) }/></a>
                  <a className="titulo" href="content1.html"><u>Nebulosa Futurae</u></a>
              </div>

              <div id="item8">
                  <a href="content1.html"> <img className="item" src={require ( "../src/img/video 8.jpg" ) }/></a>
                  <a className="titulo" href="content1.html"><u>Aiming for the Stars</u></a>
              </div>
             </div>
              

          </div>

      </div>


      <footer>
          <div>Os videos do futuro têm um <u>ideal maior</u> Visite-nos na <a href="www.future4.com.br"> Future4</a> e descubra!</div>
      </footer>

</div>
  );
}

export default App