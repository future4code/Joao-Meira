import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const Container = styled.div`
  text-align: center;
  font-size: 1vw;
  width: 30vw;
  height: 15vw;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`


const Input = styled.input`
  box-sizing: border-box;
  width: 85%;
`

const Select = styled.select`
  box-sizing: border-box;
  width: 50%;
`
const BotaoAdicionar = styled.div`
  border-radius: 10px;
  border: 1px solid grey;
  color: blue;
  padding: 5px 3px;
  background-color: #f4f4f4;
  cursor: pointer;
  transition: 1s, linear;

  &:hover{
    background-color: #ffbaba;
  }
`

export default class BuscarMúsica extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            music: [],
            buscar: true,
            playlistId:"",
        }
    }

    onChangeInputSelect = (event) => {
        this.setState({
          playlistId: event.target.value
        })
      }


    onClickBuscarMúsica = (id) => {
        axios
        .get (
          `https://api.spotify.com/v1/tracks/${id}`,
          {
            headers: {
                "Authorization": "Bearer BQA6G9VNdyIznkMDEgqU9inT8_w3RTdH1FcH8QKfL8eAUeZEvRP7tEzlQncHEswr51j0u3HjoWcDKxxaH_UrxzE9sBDYXkiSug3RANHh8AONbxqQ3h4SDAy8WlMU9qOsm0z3poHc6D4Kka38O5C23g8g_bTMiUkCBtUg6Doty4c96IT1oLgI8M-LLfJb_YL0-22jDxodMicyxIlI4KDLvGVFjMOhUErTBFCRm_4U4FcJwIZF05FUvht89Lg4Uuh5Wis7-P3UHw",
            }
          }
        )
        .then((resposta) => {
          this.setState ({ music: resposta.data.album, buscar: false})
          console.log(this.state.music)
        })
        .catch ((erro) => {
            console.log(erro)
          alert('Ops, tivemos um problema ao buscar sua música!')
        })
      }

      onClickAdicionarMúsica = () => {
        let body = 
        {
          name: this.state.music.name,
          artist: this.state.music.artists[0].name,
          url: this.state.music.href,
        }
    
        axios
          .post (
          `https://us-central1-future-apis.cloudfunctions.net/spotifour/playlists/${this.state.playlistId}/songs`,
          body,
          {
            headers: { "auth": "joaomeira-hamilton" }
          }
        )
          .then(() => {
            alert(`A música ${this.state.music.name} foi adicionada à playlist!`)
            this.setState ({
                playlistId: "",
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

        if (this.state.buscar){
            return(
                <Container>
                    <label htmlFor="buscarInput"> Busque no Spotify as músicas que você gosta! </label>
                    <Input
                    required
                    placeholder = "Cole aqui o URI da sua música!"
                    name = "buscarInput"
                    onChange = {this.props.onChange}
                    value = {this.props.value}
                    />
                    <button
                    onClick = {() => this.onClickBuscarMúsica (this.props.value)}
                    > Buscar Música! </button>
                </Container>
            )} else {
                return(
                <Container>
                    <p>Nome da Música: {this.state.music.name}</p>
                    <Select
                    required
                    >
                        <option>-</option>
                        {this.props.playlists.map(playlist => (
                        <option 
                        key = {playlist.id}
                        value={playlist.id}
                        onClick = {this.onChangeInputSelect}
                        >{playlist.name}</option>
                        ))}
                    </Select>
                    Escolha a playlist para adicionar:
                    <BotaoAdicionar
                    onClick = {this.onClickAdicionarMúsica}
                    >Deseja adicionar à playlist?
                    </BotaoAdicionar>
                </Container>
                )
            }
        }
}