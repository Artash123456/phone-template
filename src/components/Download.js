import React from 'react'
import Features from './Features'
import "./components.scss"
function Download() {
    return (<>
        <div className="download">
            <h1>Discover what all the<br/> buzz is about!</h1>
            <p>Our app is available on any mobile device! Download now to get started!
            </p>
            <div
            className="download-apps">
                <img />
                <img />
            </div>
        </div>
        <Features/>
        </>
    )
}

export default Download
