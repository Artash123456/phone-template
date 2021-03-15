import React from 'react'
import Button from './Button'
import Footer from './Footer'
import {AiFillHeart, AiFillTwitterCircle} from "react-icons/ai"
import {FaFacebook, FaGooglePlus} from "react-icons/fa"
function Contact() {
    return (
        <>
        <div className="contact">
            <div className="head-picture">
                <div>
                <h1>Stop waiting.<br/>
                    Start building.</h1>
                <Button text="LET`S GET STARTED"/>
                </div>
            </div>
            <div className="foot-apps">
                <h1>We <AiFillHeart color="red"/> new friends!</h1>
                <div >
                    <AiFillTwitterCircle color="#0d95e8"/>
                    <FaFacebook color="#344e86"/>
                    <FaGooglePlus color="#d73925"/>
                </div>

            </div>
        </div>
        <Footer/>
        </>
    )
}

export default Contact
