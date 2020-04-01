import React from 'react';
import styled from 'styled-components';
import Login from './Componentes/Login';
import Lista from './Componentes/Lista';
import axios from 'axios'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px 5px;
`

const Button = styled.button`
  width: 10vw;
  margin-bottom: 1vw;
`

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      logins: [
      ],
    name: "",
    email: "",
    mostrarLista: false,
    };

  }

  baixarUsuarios = () => {
    axios
      .get (
        "https://us-central1-future-apis.cloudfunctions.net/api/users",
        {
          headers: {
            "api-token": "joaomeira-hamilton"
          }
        }
      )
      .then((resposta) => {
        this.setState ({ logins: resposta.data.result})
      })
      .catch (() => {
        alert('Usuários não baixados!')
      })
  }


  componentDidMount () {
    this.baixarUsuarios()
  }

  adicionarAosLogins = (novoLogin) => {

    let body = {
      name: novoLogin.name,
      email: novoLogin.email
    };

    this.setState({
      name: "",
      email: "",
    })

    axios
      .post(
        "https://us-central1-future-apis.cloudfunctions.net/api/users",
        body,
        {
          headers: {
            "api-token": "joaomeira-hamilton"
          }
        }
      )
      .then(() => {
        this.baixarUsuarios();
        alert("Deu Certo!")
      })
      .catch(() => {
        alert ("Ops! Tente novamente!")
      });
  };

  onClickMostrarLista = () => {    
    this.setState({
      mostrarLista: !this.state.mostrarLista
    })
  }

  onChangeInput = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }


  onClickDeletarLogin = (usuarioParaDeletar) => {
    if (window.confirm('Tem certeza de que deseja deletar?')) {
      axios
      .delete(
        `https://us-central1-future-apis.cloudfunctions.net/api/users/${usuarioParaDeletar}`,
        {
          headers: {
            "api-token": "joaomeira-hamilton"
          }
        }
      )
      .then(() => {
        this.baixarUsuarios();
        alert("Deu Certo!")
      })
      .catch(() => {
        alert ("Ops! Tente novamente!")
      });
    }
  };

  render () {
    if(this.state.mostrarLista) {
    return (
      <Container>
        <Button
        onClick = {this.onClickMostrarLista}> 
        Voltar
        </Button>

        <Lista
        listaDeUsuarios = {this.state.logins}
        deletarLogin = {this.onClickDeletarLogin}
        >
        </Lista>
        
      </Container>
    )
  } else {
    return (
      <Container>
        <Button
        onClick = {this.onClickMostrarLista}> 
        Ir para a página de lista
        </Button>
        
        <Login
        inputNome = {this.onChangeInput}
        inputEmail = {this.onChangeInput}
        valorNome = {this.state.name}
        valorEmail = {this.state.email}
        adicionarAListaLogin = {this.adicionarAosLogins}
        />

      </Container>
    )}
  }
}

export default App;
