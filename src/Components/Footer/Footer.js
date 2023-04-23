import React from 'react'
import "./footer.css";
import Github from "../../assets/github.png";
import Insta from "../../assets/instagram.png";
import Logo from "../../assets/logo.png";
import Linkedin from "../../assets/linkedin.png";
const Footer = () => {
    return (
        <div className="Footer-container">
            <hr />
            <div className="footer">
                <div className="social-links">
                    <img src={Github} alt="" />
                    <img src={Insta} alt="" />
                    <img src={Linkedin} alt="" />
                </div>
                <div className="logo-f">
                    <img src={Logo} alt="" />
                </div>
            </div>
            <div className="blur blur-f-1"></div>
            <div className="blur blur-f-2"></div>
        </div>
    )
}

export default Footer