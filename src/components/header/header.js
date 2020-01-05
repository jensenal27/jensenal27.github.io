import React from 'react';
import './header.css';

const Header = ({scrollOne, scrollTwo, scrollThree, scrollFour, aboutInView, workInView, resumeInView, contactInView}) => {

    return (
        <div className = 'header'>
            <div className='navlogo' id={aboutInView === true ? 'hidden' : ''}>ANDERS JENSEN</div>
            <div className = 'navwrap'>
            <div className={aboutInView === true ? 'nav activeone' : 'nav'} onClick={scrollOne}>ABOUT</div>
            <div className={workInView === true ? 'nav active' : 'nav'} onClick={scrollTwo}>WORK</div>
            <div className={resumeInView === true ? 'nav active' : 'nav'} onClick={scrollThree}>RESUME</div>
            <div className={contactInView === true ? 'nav active' : 'nav'} onClick={scrollFour}>CONTACT</div>
            </div>
            
        </div>
    );
}

export default Header;