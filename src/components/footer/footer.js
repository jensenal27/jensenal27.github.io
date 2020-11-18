import React from 'react';
import './footer.css';
import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";

const Footer = () => {
    return (
        <div className = 'footer' data-aos='fade-in' data-aos-delay='1000'>
            <div className='footernav'>
                <a href='https://www.linkedin.com/in/anders-jensen-443295165' target='__blank'><FiLinkedin/></a>
            </div>
            <div className='footernav'>
                <a href='https://github.com/jensenal27' target='__blank'><FiGithub/></a>
            </div>
        </div>
    );
}

export default Footer;