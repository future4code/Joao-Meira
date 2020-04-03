import React from 'react'
import styled from 'styled-components'
import Detalhes from './Detalhes';
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
  overflow: scroll;
`

export default class Visualizar extends React.Component {
    constructor(props){
        super(props);

        this.state={
            renderizarLista: false,
            renderizarDetalhe: false,
            detalhes: [],
            nomeDaPlaylist: "",
        }
    }

    visualizarPlaylists = () =>{
        this.setState({renderizarLista: true})        
    }

    onClickVoltar = () => {
        this.setState({renderizarDetalhe: false})
    }

    mostrarDetalhe = (id, nome) => {
        console.log(id)

        axios
        .get (
          `https://us-central1-future-apis.cloudfunctions.net/spotifour/playlists/${id}/songs`,
          {
            headers: {
              "auth": "joaomeira-hamilton"
            }
          }
        )
        .then((resposta) => {
          this.setState ({ detalhes: resposta.data.result, renderizarDetalhe: true, nomeDaPlaylist: nome})
          console.log(this.state.detalhes)
        })
        .catch (() => {
          alert('Problema ao carregar Playlists!')
        })
    }

    render() {
        if(this.state.renderizarLista === true && this.state.renderizarDetalhe === false) {
            return(
            <Container>
                <button
                onClick={this.visualizarPlaylists}
                >Clique aqui para visualizar todas as Playlists!</button>

                <div>
                    <ol>
                        {this.props.playlists.map(playlist => (
                        <li 
                        key={playlist.id}
                        onClick={() => this.mostrarDetalhe(playlist.id, playlist.name)}
                        >
                            <p>{playlist.name}</p>
                        </li>
                        ))}
                    </ol>
                </div>
            </Container>
        ) 
        } else if (this.state.renderizarLista === false && this.state.renderizarDetalhe === false) {
            return(
            <Container>
                <button
                onClick={this.visualizarPlaylists}
                >Clique aqui para visualizar todas as Playlists!</button>
            </Container>
        )  
        } else {
            return(
            <Detalhes
            renderizarDetalhe = { this.state.renderizarDetalhe }
            detalhesMusicas = { this.state.detalhes.musics }
            nome = { this.state.nomeDaPlaylist }
            onClickVoltar = {this.onClickVoltar}
            />
            )

        }

    }
}