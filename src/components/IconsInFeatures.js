import React from 'react'
import "./components.scss"
function IconsInFeatures(props) {
    return (
        <div className="icon">
            <i>{props.icon}</i>
<h1>{props.title}</h1>
<p>{props.paragraph}</p>
        </div>
    )
}

export default IconsInFeatures
