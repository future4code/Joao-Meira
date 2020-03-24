import React from 'react'
import styled from 'styled-components'



const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
    margin: 2vh auto;
`


class Etapa1 extends React.Component {
    constructor(props){
        super(props)

        this.state = {

            valorInputNome:"",
            valorInputIdade:"",
            valorInputEmail:"",
            valorInputEscolaridade:"",
        }
    }



    onChangeInputNome = event => {
        this.setState({valorInputNome: event.target.value})
    }

    onChangeInputIdade = event => {
        this.setState({valorInputIdade: event.target.value})
    }

    onChangeInputEmail = event => {
        this.setState({valorInputEmail: event.target.value})
    }

    onClickInputEscolaridade = event => {
        this.setState({valorInputEscolaridade: event.target.value})
    }


    enviarFormulario1 = () =>{

        const novoFormulario = [{
          nome: this.state.valorInputNome,
          idade: this.state.valorInputIdade,
          email: this.state.valorInputEmail,
          escolaridade: this.state.valorInputEscolaridade,
        }]
        console.log(novoFormulario)
        this.props.enviarEtapa1 (novoFormulario)
      }


    render(){
        return(
            <Container>

                <label for="nome">Insira seu nome completo:</label>
                <input name="nome" 
                value={this.state.valorInputNome}
                onChange={this.onChangeInputNome}
                required/>

                <label for="idade">Insira sua idade (em anos):</label>
                <input name="idade" 
                value={this.state.valorInputIdade}
                onChange={this.onChangeInputIdade}
                required/>

                <label for="email">Insira seu email:</label>
                <input name="email" 
                value={this.state.valorInputEmail}
                onChange={this.onChangeInputEmail}
                required/>

                <label for="escolaridade">Qual sua escolaridade?</label>
                <select name="escolaridade" 
                value={this.state.valorInputEscolaridade}
                onClick={this.onClickInputEscolaridade}
                required>
                    <option value="-">-</option>
                    <option value="Ensino Médio Incompleto">Ensino Médio Incompleto</option>
                    <option value="Ensino Médio Completo">Ensino Médio Completo</option>
                    <option value="Ensino Superior Incompleto">Ensino Superior Incompleto</option>
                    <option value="Ensino Superior Completo">Ensino Superior Completo</option>
                </select>

                <button 
                type="submit"
                onClick={this.enviarFormulario1}
                >Enviar</button>

            </Container>
        )
    }

}

export default Etapa1