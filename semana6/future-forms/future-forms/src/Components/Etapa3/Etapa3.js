import React from 'react'
import styled from 'styled-components'



const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
    margin: 2vh auto;
`


class Etapa3 extends React.Component {
    constructor(props){
        super(props)

        this.state = {

            valorInputGraduacao:"",
            valorInputCursoComplementar:"",

        }
    }

    onClickInputCursoComplementar = event => {
        this.setState({valorInputCursoComplementar: event.target.value})
    }

    onChangeInputGraduacao = event => {
        this.setState({valorInputGraduacao: event.target.value})
    }

    enviarFormulario3 = () =>{
        const novoFormulario3 = {
          graduacao: this.state.valorInputGraduacao,
          cursoComplementar: this.state.valorInputCursoComplementar,
        }
        console.log(novoFormulario3)
        this.props.enviarEtapa3 (novoFormulario3)
      }

    render(){
        return(
            <Container>

                <label for="graduacao">Por que você não terminou um curso de graduação?</label>
                <input name="graduacao" 
                value={this.valorInputGraduacao}
                onChange={this.onChangeInputGraduacao}
                />

                <label for="complementar">Você fez algum curso complementar?</label>
                <select name="complementar" 
                value={this.state.onClickInputCursoComplementar}
                onClick={this.onClickInputCursoComplementar}
                >
                    <option value="-">-</option>
                    <option value="Curso Técnico">Curso Técnico</option>
                    <option value="Cursos de Inglês">Cursos de Inglês</option>
                    <option value="Não fiz curso complementar">Não fiz curso complementar</option>
                </select>


                <button 
                type="submit"
                onClick={this.enviarFormulario3}
                >Enviar</button>

            </Container>
        )
    }

}

export default Etapa3