import React from 'react'
import PropTypes from 'prop-types'
import './ImageButton.css'


function ImageButton (props){
    return(
        <button className="img-button">
            <img className="img" src= {props.img}/>
            <p> {props.ident} </p>
        </button>
    )
}

/*
ImageButton.propTypes = {
    img: PropTypes.string.isRequired
    ident: PropTypes.string.isRequired
}
*/

export default ImageButton