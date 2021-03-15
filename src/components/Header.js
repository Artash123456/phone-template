import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import "./components.scss";
const Header = () => {

    const [scrl, setscrl] = useState({y:null})
    useEffect(() => {
        window.addEventListener("scroll",scrollChange)
        return () => {
            window.removeEventListener("scroll", scrollChange)
        }
    }, [scrl])
        const scrollChange =(e)=>{
            setscrl({y:e.path[1].scrollY})
            if(scrl.y>=150){

                document.getElementsByClassName("header")[0].classList.add("white")
            }else  document.getElementsByClassName("header")[0].classList.remove("white")
        }
    return (
        <div className="header">
            <div className="center">
            <Link to ="/" className="logo" >React template</Link>
            <ul className="nav">
                <li>DOWNLOAD</li>
                <li>FEATURED</li>
                <li>CONTACT</li>
            </ul>
            </div>
        </div>
    )
}
export default Header;