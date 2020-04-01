import React from 'react';
import styled, { keyframes } from 'styled-components';



const Container = styled.div`
    width: 20vw;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    border: black 1px solid;
    padding: 1vw 1vw;
    justify-content: center;
    align-items: center;
`

const InputContainer = styled.div`
  width: 100%;
  margin-top: 1vw;
`

const Label = styled.label`
    font-family: serif;
`

const BotaoSalvar = styled.div`
  cursor: pointer;
  font-family: serif;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2d3058;
  width: 5vw;
  color: white;
  height: 2vw;
  margin-top: 1vw;
  transition: 0.9s;

  &:hover{
    background-color: grey;
    }
`

class Login extends React.Component {

    adicionarInfoLogin = () => {

        const novoLogin = {
            name: this.props.valorNome,
            email: this.props.valorEmail,
        }
        this.props.adicionarAListaLogin(novoLogin)
    }

  render () {
    return (
      <Container>

        <InputContainer>
        <Label htmlFor="name">Nome: </Label>
        <input
        required
        name = "name"
        onChange = {this.props.inputNome}
        value = {this.props.valorNome}
        />
        </InputContainer>

        <InputContainer>
        <Label htmlFor="name">E-mail: </Label>
        <input
        required
        name = "email"
        onChange = {this.props.inputEmail}
        value = {this.props.valorEmail}
        />
        </InputContainer>

        <BotaoSalvar
        onClick = {this.adicionarInfoLogin}
        > 
        <span>Salvar</span> 
        </BotaoSalvar>
      </Container>
    );
  }

}

export default Login;
