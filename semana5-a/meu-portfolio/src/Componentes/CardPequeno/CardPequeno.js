import React from 'react'
import PropTypes from 'prop-types'
import './CardPequeno.css'


function CardPequeno (props){
    return(
        <div className="card-pequeno">
            <img className="iconezin" src= {props.iconezin}/>
            <p> {props.endereco} </p><span> {props.email} </span>
        </div>
    )
}

/*
CardPequeno.propTypes = {
    iconezin: PropTypes.string.isRequired
    email: PropTypes.string.isRequired
}
*/
export default CardPequeno