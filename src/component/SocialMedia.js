import React from "react";
import git from "../images/github.svg";
import facebook from "../images/facebook.svg";
import instagram from "../images/instagram.svg";
import './style/SocialMedia.css';
import  'react-router-dom'


function SocialMedia() {
    const faceBook = () => {
        window.location.href = 'https://www.facebook.com/marco.olef.5'
    }
    const instaGram = () => {
        window.location.href = 'https://www.instagram.com/ele.phant4/?next=%2F'
    }
    const gitH = () => {
        window.location.href = 'https://github.com/marcoOlef'
    }
    return (
        <div className="icon">
            <img src={git} alt="" onClick={gitH} />
            <img src={facebook} alt="" onClick={faceBook} />
            <img src={instagram} alt="" onClick={instaGram}/>
        </div>
    )
}

export default SocialMedia;