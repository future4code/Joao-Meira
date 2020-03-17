import React from 'react'
import PropTypes from 'prop-types'
import './Titulo.css'


function Titulo (props){
    return(
        <div >
            <p className="titulo"> {props.titulo} </p>
        </div>
    )
}

/*
Titulo.propTypes = {
    titulo: PropTypes.string.isRequired
}
*/
export default Titulo