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


    render() {
        return(
            <Container>
                <h2>Playlist: {this.props.nome} </h2>
                <h3>Músicas</h3>
                <ul>
                    {this.props.detalhesMusicas.map(musica => (
                        <li
                        key = {musica.id}
                        >{musica.name} do artista {musica.artist}</li>
                    ))}
                </ul>
                <button
                onClick = {this.props.onClickVoltar}
                >Voltar para lista de Playlists</button>
            </Container>
        )}
}