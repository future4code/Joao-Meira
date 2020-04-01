import React from 'react';
import styled from 'styled-components';
import TelaDetalhe from './TelaDetalhes';

const Container = styled.div`
    width: 16vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    padding: 1vw 1vw;
`

const ItemLista = styled.li`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 1vw 0;
    border-bottom: black 1px solid;
    font-family: serif;
`

const BotaoDeletar = styled.span`
    cursor: pointer;
    color: red;
    font-family: serif;
`
const H = styled.h2`
    font-family: serif;
`

class Lista extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            name: "",
            email: "",
            mostrarDetalhe: false,
        }
    }

    onClickDetalhes = (userName, userEmail) => {
        this.setState ({name: userName, email: userEmail, mostrarDetalhe: true})
    }

  render () {
    if(this.state.mostrarDetalhe) {
        return (
            <TelaDetalhe
            nomeUsuario = { this.state.name }
            emaiUsuario = { this.state.email }
            />
        )
    }else {
            return (
            <Container>
                <H>Usuários Cadastrados</H>
                    {this.props.listaDeUsuarios.map(usuario =>(
                            <ItemLista
                            key={usuario.id}
                            >
                            <span 
                            onClick={() => this.onClickDetalhes(usuario.name, usuario.email)}
                            >
                                {usuario.name}
                            </span>
                            <BotaoDeletar
                            onClick = {() => this.props.deletarLogin(usuario.id)}
                            >X</BotaoDeletar>
                            </ItemLista>
                        ))}                
            </Container>
          );
    }

  }
}

export default Lista;
