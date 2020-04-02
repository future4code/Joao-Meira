import React from 'react';
import styled from 'styled-components';
import axios from 'axios';



const Container = styled.div`
    width: 30 vw;
    height: 30vw;
    border: 1px solid black;
`

export default class Preço extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            atividade: "",

            infoAtividade: undefined
        }
    }


    onChangeGetActivity = (tipo) => {
        axios.get(`http://www.boredapi.com/api/activity?type=${tipo.value}`).then((response) => {
          this.setState({ activityInfo: response.data });
        });
      };
    


    render(){
        
        return(
            <Container>
                <select
                    value={this.state.atividade}
                    onChange={this.onChangeGetActivity}
                >
                    <option value = "">Nenhuma</option>
                    <option value = "education">Educacional</option>
                    <option value = "recreactional">Recreação</option>
                    <option value = "social">Social</option>
                    <option value = "diy">Faça Sozinho</option>
                    <option value = "charity">Caridade</option>
                    <option value = "cooking">Culinária</option>
                    <option value = "relaxation">Relaxamento</option>
                    <option value = "music">Música</option>
                    <option value = "busywork">Desafio!</option>
                </select>

                <p>{this.state.infoAtividade}</p>
            </Container>
        )
    }
}