import React from 'react';
import styled from 'styled-components';
import axios from 'axios';



const Container = styled.div`
    width: 30 vw;
    height: 30vw;
`
export default class Tipo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            atividade: undefined,

            mensagemInicial: "",
        }
    }


    onChangeGetActivity = (event) => {
        axios.get(`http://www.boredapi.com/api/activity?type=${event.target.value}`)
        .then((resposta) => {
            this.setState({atividade: resposta.data})
        }).catch(() => { 
                console.log("Deu ruim")
        })
      };
    

    render(){

            return(
                <Container>
                    <select
                        value={this.state.atividade}
                        onChange={this.onChangeGetActivity}
                    >
                        <option value = "x">Nenhuma</option>
                        <option value = "education">Educacional</option>
                        <option value = "recreational">Recreação</option>
                        <option value = "social">Social</option>
                        <option value = "diy">Faça Sozinho</option>
                        <option value = "charity">Caridade</option>
                        <option value = "cooking">Culinária</option>
                        <option value = "relaxation">Relaxamento</option>
                        <option value = "music">Música</option>
                        <option value = "busywork">Desafio!</option>
                    </select>

                    {this.state.atividade && (
                        <div>
                        <p>Atividade: {this.state.atividade.activity}</p>
                        <p>Acessibilidade: {this.state.atividade.accessibility}</p>
                        <p>Tipo: {this.state.atividade.type}</p>
                        <p>Participantes: {this.state.atividade.participants}</p>
                        <p>Preço: {this.state.atividade.price}</p>
                        </div>

                    )}
                </Container>

            )
        }
}