import React from 'react';
import './header.css';

const Header = ({showOnLanding, scrollOne, scrollTwo, scrollThree, scrollFour, aboutInView, workInView, resumeInView, contactInView}) => {

    if (showOnLanding === true){
        return (
            <div className = 'header'>
                <div className='navlogo' id={aboutInView === false ? 'visible' : ''}>Anders Jensen</div>
                <div className = 'navwrap'>
                <div className={aboutInView === true ? 'nav activeone' : 'nav'} onClick={scrollOne}>About</div>
                <div className={workInView === true ? 'nav active' : 'nav'} onClick={scrollTwo}>Work</div>
                <div className={resumeInView === true ? 'nav active' : 'nav'} onClick={scrollThree}>Resume</div>
                <div className={contactInView === true ? 'nav active' : 'nav'} onClick={scrollFour}>Contact</div>
                </div>
                
            </div>
        );
    } else {return null;}
}

export default Header;