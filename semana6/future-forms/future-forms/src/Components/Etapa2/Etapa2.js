import React from 'react'
import styled from 'styled-components'



const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
    margin: 2vh auto;
`


class Etapa2 extends React.Component {
    constructor(props){
        super(props)

        this.state = {

            valorInputCurso:"",
            valorInputUnidadeDeEnsino:"",

        }
    }


    onChangeInputCurso = event => {
        this.setState({valorInputCurso: event.target.value})
    }

    onChangeInputUnidadeDeEnsino = event => {
        this.setState({valorInputUnidadeDeEnsino: event.target.value})
    }


    enviarFormulario2 = () =>{
        const novoFormulario2 = {
          curso: this.state.valorInputCurso,
          unidade: this.state.valorInputUnidadeDeEnsino,
        }
        console.log(novoFormulario2)
        this.props.enviarEtapa2 (novoFormulario2)
      }

    render(){
        return(
            <Container>

                <label for="curso">Insira seu curso:</label>
                <input name="curso" 
                value={this.valorInputCurso}
                onChange={this.onChangeInputCurso}
                />

                <label for="unidade">Insira a Unidade de Ensino de seu curso:</label>
                <input name="unidade" 
                value={this.valorInputUnidadeDeEnsino}
                onChange={this.onChangeInputUnidadeDeEnsino}
                />

                <button 
                type="submit"
                onClick={this.enviarFormulario2}
                >Enviar</button>

            </Container>
        )
    }

}

export default Etapa2