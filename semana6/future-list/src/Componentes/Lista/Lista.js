import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1vw auto;
    width: 30%;
    align-items: center;
`

const Input = styled.div`
    margin: 1vw;
`

const Tarefas = styled.div`
`

export default class Lista extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            tarefaInput: "",
        }
        console.log(this.state.value)
    }

        onChangeInputTarefa = event => {
            this.setState({tarefaInput: event.target.value})
        }

        adicionaTarefa = () =>{
            const tarefasParaLista = [this.state.tarefaInput]
            //const listaDeTarefas = tarefasParaLista.map(parafazer => <li>parafazer.tarefa</li>)
            tarefasParaLista.map((paraFazer) => <li>{paraFazer.tarefa}</li>)
        }  


        componentDidMount() {
            
            const dadosInput = localStorage.getItem("tarefa");
            
            if(dadosInput){
                const dadosTarefa = JSON.parse(dadosInput)

                this.setState({
                    tarefaInput: dadosTarefa.tarefa
                })
            }
        }

        componentDidUpdate() {
            const tarefaParaSalvar = {
                tarefa: this.state.tarefaInput,
            }

            const tarefaString = JSON.stringify(tarefaParaSalvar);

            localStorage.setItem("tarefa", tarefaString)
        }

        render(){

            return(
                <Container>
                    <h1>Lista de Tarefas</h1>
                    <Input>
                        <input
                        name="filtro"
                        value={this.state.tarefaInput}
                        onChange={this.onChangeInputTarefa}
                        ></input>
                        <button onClick={this.adicionaTarefa}> Adicionar </button>
                    </Input>

                    <label for="filtro">Filtro: </label>
                    <select 

                    >
                        <option value="Nenhum">Nenhum</option>
                        <option value="Pendente">Pendente</option>
                        <option value="Completa">Completa</option>
                    </select>
                    <Tarefas>
                        <ul>
                        </ul>
                    </Tarefas>

                </Container>
            )
        }
}