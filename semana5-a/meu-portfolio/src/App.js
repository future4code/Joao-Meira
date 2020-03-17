import React from 'react';
import './App.css';
import CardGrande from './Componentes/CardGrande/CardGrande';
import Titulo from './Componentes/TituloSecao/Titulo';
import CardPequeno from './Componentes/CardPequeno/CardPequeno';
import ImageButton from './Componentes/ImageButton/ImageButton';


function App() {
  return (
    <div className="pai">

      <div className="alinhar">

      <Titulo titulo={"Dados Pessoais"}/>
      <CardGrande icone={require("../src/Img/profile.jpg")} nome={"João Meira"} 
      texto={"Nascido nas planíecies do interior paulista e forjado no mar de morros das Minas Gerais, estou de volta às salas de aulas, agora, porém, como aluno. Sou um Web Full-stack em formação pela incrível Future4, buscando a tecnologia como ofício!"} />
      <CardPequeno endereco={"Email: "} iconezin={require("../src/Img/gmail.png")} email= {"jhalvesmeira@gmail.com"}/>
      <CardPequeno endereco={"Endereço: "} iconezin={require("../src/Img/endereco.png")} email= {"Rua Fuad Chequer, nº 55"}/>
      <ImageButton img={require("../src/Img/baixar.png")} ident= {"Ver Mais"}/>
      <Titulo titulo={"Experiências Profissionais"}/>
      <CardGrande icone={require("../src/Img/future4.jpg")} nome={"Web Full-stack Developer"}
      texto={"Decolando como aluno da Future4!"} />
      <CardGrande icone={require("../src/Img/serra.jpeg")} nome={"Prefeitura Municipal de Serra do Salitre"}
      texto={"Procurador Geral do Município em 2018 e 2019."} />
      <Titulo titulo={"Redes Sociais"}/>
      <ImageButton img={require("../src/Img/facebookicon.png")} ident= {"Facebook"}/>
    
      </div>

    </div>
  );
}

export default App;
