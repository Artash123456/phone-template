import React from 'react'
import "./components.scss"
function Button(props) {
    return (
        <button className="btn">{props.text}</button>
    )
}

export default Button
