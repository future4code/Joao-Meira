import React from 'react';
import './App.css';
import styled from 'styled-components'
import Etapa1 from './Components/Etapa1/Etapa1';
import Etapa2 from './Components/Etapa2/Etapa2';
import Etapa3 from './Components/Etapa3/Etapa3';


const Container = styled.div`
`

const Final = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
    margin: 2vh auto;
    align-items: center;
`

class App extends React.Component {
    constructor(props){
      super(props)

      this.state = {

        formulario: {
          nome:"",
          idade:"",
          email:"",
          escolaridade:"",
      },

      etapa1Concluida: false,
      etapa2Concluida: false,
      etapa3Concluida: false,



      }
    }

    enviarEtapa1 = (novoFormulario) =>{

      this.setState ({formulario: novoFormulario, etapa1Concluida: true})
    }


    enviarEtapa2 = (novoFormulario2) =>{

      let todosOsFormularios = [novoFormulario2, ...this.state.formulario]
      this.setState ({formulario: todosOsFormularios, etapa2Concluida: true})
    }

    enviarEtapa3 = (novoFormulario3) =>{

      let todosOsFormularios = [novoFormulario3, ...this.state.formulario]
      this.setState ({formulario: todosOsFormularios, etapa3Concluida: true})
    }

  render () {
    console.log(this.state.formulario)

    if (this.state.etapa1Concluida === false){

      return(
        <Container>
          <Etapa1
          enviarEtapa1={this.enviarEtapa1}
          />
        </Container>

        )
     }
    else if (this.state.etapa1Concluida === true && this.state.etapa2Concluida === false){
      return(
        <Container>
          <Etapa2
          enviarEtapa2={this.enviarEtapa2}
          />
        </Container>

        )
    } 
    else if (this.state.etapa2Concluida === true && this.state.etapa3Concluida === false) {
      return(
        <Container>
          <Etapa3
          enviarEtapa3={this.enviarEtapa3}
          />
        </Container>        
        )
      }
    else if (this.state.etapa1Concluida && this.state.etapa3Concluida) {
      return(
              <Container>
        <Final>
          <h2>O FORMULÁRIO ACABOU</h2>
          <p>Muito obrigado por participar! Entraremos em contato!</p>
        </Final>
      </Container>
      )
    }
  }
}

export default App;
