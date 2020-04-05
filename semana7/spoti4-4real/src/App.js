import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Visualizar from './Componentes/Visualizar';


const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const InputContainer = styled.div`
  width: 40vw;
  height: 20vw;
  margin: auto;
  border: black solid 1px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`

const CriarPlaylist = styled.div`
  width: 20vw;
  height: 9vw;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`

const AdicionarMúsicas = styled.div`
  font-size: 1vw;
  width: 20vw;
  height: 15vw;
  margin: auto;
  border-left: black solid 1px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`

const Input = styled.input`
  box-sizing: border-box;
  width: 80%;
`

const Select = styled.select`
  box-sizing: border-box;
  width: 50%;
`


class App extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
        playlists: [],
        inputCriar: "",
        inputMúsica: "",
        inputAutor: "",
        inputUrl: "",
        inputId: "",
      }
  }


  onChangeInput = (event) => {
    this.setState ({
      [event.target.name]: event.target.value
    })
  }

  onChangeInputSelect = (event) => {
    this.setState({
      inputId: event.target.value
    })
  }

  baixarPlaylists = () => {
    axios
    .get (
      "https://us-central1-future-apis.cloudfunctions.net/spotifour/playlists",
      {
        headers: {
          "auth": "joaomeira-hamilton"
        }
      }
    )
    .then((resposta) => {
      this.setState ({ playlists: resposta.data.result.list})
    })
    .catch (() => {
      alert('Problema ao carregar Playlists!')
    })
  }

  componentDidMount() {
    this.baixarPlaylists()
  }


  onClickCriarPlaylist = () => {
    let body = 
    {
      name: this.state.inputCriar
    }

    axios
      .post (
      `https://us-central1-future-apis.cloudfunctions.net/spotifour/playlists`,
      body,
      {
        headers: { "auth": "joaomeira-hamilton" }
      }
    )
      .then(() => {
        this.baixarPlaylists();
        alert(`A playlist ${this.state.inputCriar} foi criada!`)
        this.setState ({
          inputCriar: "",
        })
      })
      .catch((erro) => {
        if(erro.message === "Request failed with status code 400"){
        alert(`Ops! Você deve ter usado um nome de playlist invalido!
                              Tente novamente!`)
        } else {
          alert("Ops! Algo inesperado aconteceu! Tente novamente!")
        }
      })
  }

  onClickAdicionarMúsica = () => {
    console.log(this.state.inputAutor)
    console.log(this.state.inputId)
    console.log(this.state.inputMúsica)
    console.log(this.state.inputUrl)
    let body = 
    {
      name: this.state.inputMúsica,
      artist: this.state.inputAutor,
      url: this.state.inputUrl
    }

    axios
      .post (
      `https://us-central1-future-apis.cloudfunctions.net/spotifour/playlists/${this.state.inputId}/songs`,
      body,
      {
        headers: { "auth": "joaomeira-hamilton" }
      }
    )
      .then(() => {
        this.baixarPlaylists();
        alert(`A música ${this.state.inputMúsica} 
        foi adicionada à playlist!`)
        this.setState ({
          inputMúsica: "",
          inputAutor: "",
          inputUrl: "",
          inputId: "",
        })
      })
      .catch((erro) => {
        if(erro.message === "Request failed with status code 400"){
        alert(`Ops! Algo que você preencheu parece não estar certo!
                              Tente novamente!`)
        } else {
          alert("Ops! Algo inesperado aconteceu! Tente novamente!")
        }
      })
  }


  render() {
      return (
    <Container>
      <InputContainer>

      <CriarPlaylist>
      <label
      htmlFor="inputCriar">Nome da sua playlist!</label>
      <Input
      required
      name="inputCriar"
      placeholder = "Nome da Playlist"
      onChange = { this.onChangeInput }
      value = {this.state.inputCriar}
      />
      <button
      onClick = { this.onClickCriarPlaylist }
      >
        Criar Playlist!
      </button>
      </CriarPlaylist>

      <AdicionarMúsicas>
      <label
      htmlFor="inputMúsica">Música para Adicionar!</label>
      <Input
      required
      name="inputMúsica"
      placeholder = "Digite aqui o nome da música"
      onChange = { this.onChangeInput }
      value = {this.state.inputMúsica}
      />

      <label
      htmlFor="inputAutor">Autor(a):</label>
      <Input
      required
      name="inputAutor"
      placeholder = "Digite aqui o nome do autor"
      onChange = { this.onChangeInput }
      value = {this.state.inputAutor}
      />

      <label
      htmlFor="inputUrl">URL da Música</label>
      <Input
      required
      name="inputUrl"
      placeholder = "Digite aqui o endereço da música"
      onChange = { this.onChangeInput }
      value = {this.state.inputUrl}
      />

      <Select
      >
        {this.state.playlists.map(playlist => (
          <option 
          key = {playlist.id}
          value={playlist.id}
          onClick = {this.onChangeInputSelect}
          >{playlist.name}</option>
        ))}
      </Select>

      <button
      onClick = { this.onClickAdicionarMúsica }
      >
        Adicionar Música!
      </button>
      </AdicionarMúsicas>

      </InputContainer>

      <Visualizar
      playlists = { this.state.playlists }
      atualizarLista = {this.baixarPlaylists}
      />

    </Container>
  );
  }

}

export default App;
