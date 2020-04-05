import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const Container = styled.div`
  width: 20vw;
  height: auto;
  margin: auto;
  padding-top: 1vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  align-self: flex-start;
`

const BotaoDeletar = styled.span`
  border-radius: 10px;
  border: 1px solid grey;
  color: #ed4b70;
  padding: 5px 3px;
  background-color: #f4f4f4;
  cursor: pointer;
  transition: 1s, linear;

  &:hover{
    background-color: #ffbaba;
  }
`


export default class Detalhes extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            detalhes: [],
        }
    }


    baixarDetalhes = () => {
        axios
        .get (
          `https://us-central1-future-apis.cloudfunctions.net/spotifour/playlists/${this.props.id}/songs`,
          {
            headers: {
              "auth": "joaomeira-hamilton"
            }
          }
        )
        .then((resposta) => {
          this.setState ({ detalhes: resposta.data.result})
          console.log(this.state.detalhes)
        })
        .catch (() => {
          alert('Problema ao carregar Playlists!')
        })
      }

      deletarPlaylist = (id) => {
        axios
        .delete (
          `https://us-central1-future-apis.cloudfunctions.net/spotifour/playlists/${id}`,
          {
            headers: {"auth": "joaomeira-hamilton"}
          }
        )
        .then(() => {
          this.props.atualizar()
          alert('Playlist deletada!')
        })
        .catch (() => {
          alert ('Ops! Não conseguimos deletar!')
        })
      }


    render() {
        return(
            <Container>
                <h2>Playlist: {this.props.nome} </h2> 
                <BotaoDeletar
                onClick = {() => this.deletarPlaylist (this.props.id)}
                >Deletar esta Playlist</BotaoDeletar>
                <h3>Músicas</h3>
                <ul>
                    {this.props.detalhesMusicas.map(musica => (
                        <li
                        key = {musica.id}
                        >
                        <p>{musica.name}, do artista <strong>{musica.artist}</strong></p>
                        <audio controls src={musica.url}/></li>
                    ))}
                </ul>
                <button
                onClick = {this.props.onClickVoltar}
                >Voltar para lista de Playlists</button>
            </Container>
        )}
}