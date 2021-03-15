import React from 'react'
import Button from './Button'
import Download from './Download'
import Phone from './Phone'
function Start() {
    return (
        <>
        <div className="start">
         <div className="aom">
            <div className="left-text">
                <h1>New Age is an app landing page that will help you beautifully showcase your new mobile app, or anything else!</h1>
                <Button text = "Start now for free"/>
            </div>
            <Phone/>
            </div>
        </div>
        <Download/>
        </>
    )
}

export default Start
