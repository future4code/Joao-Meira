import React from 'react';
import styled from 'styled-components';
import Tipo from './Tipo';
import Participantes from './Participantes';
import Preço from './Preço';
import Acessibilidade from './Acessibilidade';


const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`


const Select = styled.select`
    width: 8vw;
`

const Atividade = styled.div`
    width: 30vw;
    height: 30vw;`

class Buscar extends React.Component {
    constructor(props){
        super(props);

        this.state ={
            característicaSelecionada: "",
        }

    }


  render () {

        let característica;

        switch (this.state.característicaSelecionada){
            case "type":
                característica = <Tipo/>;
            break;
            case "participants":
                característica = <Participantes/>;
            break;
            case "price":
                característica = <Preço/>;
            break;
            case "accessibility":
                característica = <Acessibilidade/>
        }

  return (
    <Container>

        <Select
        value = {this.state.característicaSelecionada}
        onChange = {event => 
        this.setState ({característicaSelecionada: event.target.value})
        }
        >
            <option value = "">Nenhuma</option>
            <option value = "type">Tipo de Atividade</option>
            <option value = "participants">Número de Participantes</option>
            <option value = "price">Preço</option>
            <option value = "accessibility">Acessibilidade da Atividade</option>
        </Select>

        <Atividade>
            <p>{característica}</p>
        </Atividade>
        
    </Container>
  );
  }

}

export default Buscar;
