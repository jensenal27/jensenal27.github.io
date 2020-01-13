import React from 'react';
import './footer.css';
import {FaGithub} from 'react-icons/fa';
import {FaLinkedinIn} from 'react-icons/fa';

const Footer = ({showOnLanding, aboutInView}) => {

    if (showOnLanding === true){
        return (
            <div className = 'footer' id={aboutInView === false ? 'visible' : ''}>
                <div className='footernav'>
                    <a href='https://www.linkedin.com/in/anders-jensen-443295165' target='__blank'><FaLinkedinIn/></a>
                </div>
                <div className='footernav'>
                    <a href='https://github.com/jensenal27' target='__blank'><FaGithub/></a>
                </div>
            </div>
        );
    } else {return null;}
}

export default Footer;