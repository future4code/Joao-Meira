import React from 'react'
import PropTypes from 'prop-types'
import './CardGrande.css'


function CardGrande (props){
    return(
        <div className="card-grande">
            <p className="nome"> {props.nome} </p>
            <div>
                <img className="icone" src= { props.icone }/>
                <p> {props.texto} </p>
                
            </div>
        </div>
    )
}

/*
CardGrande.propTypes = {
    nome: PropTypes.string.isRequired
    icone: PropTypes.string.isRequired
    texto: PropTypes.string.isRequired
}
*/
export default CardGrande