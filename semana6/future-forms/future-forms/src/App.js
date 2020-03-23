import React from 'react';
import './App.css';
import styled from 'styled-components'
import Etapa1 from './Components/Etapa1/Etapa1';
import Etapa2 from './Components/Etapa2/Etapa2';


const Container = styled.div`
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


      }
    }

    enviarEtapa1 = (novoFormulario) =>{

      this.setState ({formulario: novoFormulario, etapa1Concluida: true})
      console.log(this.state.formulario)
    }


    enviarEtapa2 = (novoFormulario2) =>{

      let todosOsFormularios = [novoFormulario2, ...this.state.formulario]
      console.log(todosOsFormularios)

      this.setState ({formulario: todosOsFormularios, etapa2Concluida: true})
      //this.setState ({formulario: novoFormulario2, etapa2Concluida: true})
      console.log(this.state.formulario)
    }



  render () {
  
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
      } else {
        return(
          <p>próxima etapa!</p>
        )
      }

  }

}

export default App;
