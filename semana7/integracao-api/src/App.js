import React from 'react';
import styled from 'styled-components';
import Login from './Componentes/Login';
import Lista from './Componentes/Lista';
import axios from 'axios'
import TelaDetalhe from './Componentes/TelaDetalhes'

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
    mostrarLista: "2",
    nomeDetalhe: "",
    emailDetalhe:"",
    idDetalhe: "",
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
    
    if(this.state.mostrarLista === "1"){
      this.setState({
      mostrarLista: "2"
    })
    } else if (this.state.mostrarLista === "2"){
      this.setState({
        mostrarLista: "1"
      })
    } else if (this.state.mostrarLista === "3"){
      this.setState({
        mostrarLista: "1"
      })
    }

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


  onClickDetalhes = (usuario) => {
    this.setState({mostrarLista: "3"})
    axios
    .get (
      `https://us-central1-future-apis.cloudfunctions.net/api/users/${usuario}`,
      {
        headers: {
          "api-token": "joaomeira-hamilton"
        }
      }
    )
    .then((resposta) => {
      this.setState ({ 
          nomeDetalhe: resposta.data.result.name, 
          emailDetalhe: resposta.data.result.email,
          idDetalhe: resposta.data.result.id,
          mostrarDetalhe: true,
        })
        console.log(resposta.data.result.id)
    })
    .catch (() => {
      alert('Usuários não baixados!')
    })
}

  render () {
    if(this.state.mostrarLista === "1") {
    return (
      <Container>
        <Button
        onClick = {this.onClickMostrarLista}> 
        Voltar
        </Button>

        <Lista
        listaDeUsuarios = {this.state.logins}
        deletarLogin = {this.onClickDeletarLogin}
        enviarDetalhes = {this.onClickDetalhes}
        >
        </Lista>
        
      </Container>
    )
  } else if (this.state.mostrarLista === "2") {
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
    )} else if (this.state.mostrarLista === "3") {
      return (
        <Container>
        <Button
        onClick = {this.onClickMostrarLista}> 
        Ir para a página de lista
        </Button>
        <TelaDetalhe
        nomeUsuario = { this.state.nomeDetalhe }
        emailUsuario = { this.state.emailDetalhe }
        deletarLogin = {() => this.onClickdeletarLogin(this.state.idDetalhe)}
        />
        </Container>

      )
    }
  }
}

export default App;
