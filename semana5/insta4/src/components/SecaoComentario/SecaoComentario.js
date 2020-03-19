import React, {Component} from 'react'
import './SecaoComentario.css'

export class SecaoComentario extends Component {
	constructor(props) {
		super(props)

		this.state = {
			draftComentario: ""
		}
	}

	onChangeComentario = (event) => {
		const digitadoPeloUsuario = event.target.value
		this.setState({
			draftComentario: digitadoPeloUsuario
		})

		console.log(digitadoPeloUsuario)

	}

	render() {
		return <div className={'comment-container'}>
			<input
				className={'input-comentario'}
				placeholder={'Comentário'}
				value={this.state.draftComentario}
				onChange={this.onChangeComentario}
			/>
			<button onClick={this.props.aoEnviar}>Enviar</button>
		</div>
	}
}

