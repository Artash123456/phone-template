import React from 'react'
import Phone from './Phone'
import IconsInFeatures from './IconsInFeatures'
import Contact from './Contact'
import "./components.scss"

//icons 
import {BsPhone, BsUnlock} from "react-icons/bs"
import {GiPhotoCamera, GiPresent} from "react-icons/gi"
function Featured() {
    return (
        <>
        <div className="features">
            <h1>Unlimited Features, Unlimited Fun</h1>
            <p>Check out what you can do with this app theme!</p>
            <span/>
            <div className="features-foot">
                <Phone/>
                <div className="features-icons">
                       <IconsInFeatures 
                       title="Device Mockups" 
                       paragraph="Ready to use HTML/CSS device mockups, no Photoshop required!" 
                       icon = {<BsPhone/> }
                       />
                       <IconsInFeatures 
                       title="Flexible Use"
                       paragraph="Put an image, video, animation, or anything else in the screen!"
                       icon={<GiPhotoCamera/>}
                       /> 
                       <IconsInFeatures
                       title="Free to Use"
                       paragraph="As always, this theme is free to download and use for any purpose!"
                       icon={<GiPresent/>}
                       /> 
                       <IconsInFeatures
                       title="Open Source"
                       paragraph="Since this theme is MIT licensed, you can use it commercially!"
                       icon={<BsUnlock/>}
                       /> 
                </div>
            </div>
        </div>
<Contact/>
        </>
    )
}

export default Featured
