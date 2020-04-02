import React from 'react';
import styled from 'styled-components';



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

const Detalhes = styled.div`
  width: 100%;
  margin-top: 1vw;
`

const Nome = styled.h3`
    font-family: serif;
`

const Email = styled.p`
    font-family: serif;
    margin: 1vw 0;
`

const BotaoDeletar = styled.span`
    cursor: pointer;
    color: red;
    font-family: serif;
    background-color: grey;
    padding: 5px 5px;
`

class TelaDetalhe extends React.Component {

  render () {
    return (
      <Container>

        <Detalhes>
            <Nome> Nome: { this.props.nomeUsuario } </Nome>
            <Email> Email: { this.props.emailUsuario } </Email>
            <BotaoDeletar
                onClick = { this.props.deletarLogin }
            >Deletar Usuário</BotaoDeletar>
        </Detalhes>

      </Container>
    );
  }

}

export default TelaDetalhe;
