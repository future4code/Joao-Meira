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

const ListaTarefas = styled.ul`
`

const Tarefas = styled.li`
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

export default class Lista extends React.Component{
    constructor(props){
        super(props)

        this.state = {

            tarefas:
            [
            {
            id: "", 
            texto: "", 
            completa: false,
            }
            ],

            tarefaInput: "",

            filtro:"",
        }
    }

        onChangeInputTarefa = (event) => {
            this.setState({tarefaInput: event.target.value})
        };


        adicionaTarefa = () =>{
            const novaTarefa = {
                id: Date.now(),
                texto: this.state.tarefaInput,
                completa: false,
            }
            const listaDeTarefas = [...this.state.tarefas, novaTarefa]
            this.setState({tarefas: listaDeTarefas, tarefaInput: ""})
        };


        selecionarTarefa = (id) => {
            const listaComTarefaCompleta = this.state.tarefas.map((elemento) =>{
                
                if (elemento.id === id){
                    elemento.completa = !elemento.completa;
                    return elemento;
                }
                else {
                    return elemento;
                }
            })
            this.setState({tarefas: listaComTarefaCompleta})
            };


        onChangeFiltro = (event) => {
            this.setState({filtro: event.target.value})
        };


        componentDidMount() {
            
            const dadosInput = localStorage.getItem("tarefa");
            
            if(dadosInput){
                const dadosTarefa = JSON.parse(dadosInput)

                this.setState({
                    tarefaInput: dadosTarefa.tarefa
                })
            }
        };

        componentDidUpdate() {
            const tarefaParaSalvar = {
                tarefa: this.state.tarefaInput,
            }

            const tarefaString = JSON.stringify(tarefaParaSalvar);

            localStorage.setItem("tarefa", tarefaString)
        };

        render(){

            const listaFiltrada = this.state.tarefas.filter(tarefa => {
              switch (this.state.filtro) {
                case 'Pendente':
                  return !tarefa.completa
                case 'Completa':
                  return tarefa.completa
                default:
                  return true
              }
            })

            return(
                <Container>
                    <h1>Lista de Tarefas</h1>
                    <Input>
                        <input
                        name="filtro"
                        value={this.state.tarefaInput}
                        onChange={this.onChangeInputTarefa}
                        placeholder="Escreva sua tarefa aqui!"
                        autoFocus
                        ></input>
                        <button onClick={this.adicionaTarefa}> Adicionar </button>
                    </Input>

                    <label for="filtro">Filtro: </label>
                    <select 
                    value={this.state.filter}
                    onChange={this.onChangeFiltro}
                    >
                        <option value="Nenhum">Nenhum</option>
                        <option value="Pendente">Pendente</option>
                        <option value="Completa">Completa</option>
                    </select>

                    <ListaTarefas>
                        {listaFiltrada.map(tarefa => {
                            if(tarefa.id){
                                return(
                                    <Tarefas
                                       completa={tarefa.completa}
                                       onClick={() => this.selecionarTarefa(tarefa.id)}
                                    >
                                        {tarefa.texto}
                                    </Tarefas>
                                )
                            } else {return}

                        })}

                    </ListaTarefas>


                </Container>
            )
        }
}