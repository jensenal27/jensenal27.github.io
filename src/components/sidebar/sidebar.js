import React from 'react';
import './sidebar.css';

const Sidebar = ({scrollOne, scrollTwo, scrollThree, scrollFour, aboutInView, workInView, resumeInView, contactInView}) => {
    return (
        <div className = 'sidebar'>
            <div className={aboutInView === true ? 'sidenav active' : 'sidenav'} onClick={scrollOne}><div className='sidenavhide'>About</div></div>
            <div className={workInView === true ? 'sidenav active' : 'sidenav'} onClick={scrollTwo}><div className='sidenavhide'>Work</div></div>
            <div className={resumeInView === true ? 'sidenav active' : 'sidenav'} onClick={scrollThree}><div className='sidenavhide'>Resume</div></div>
            <div className={contactInView === true ? 'sidenav active' : 'sidenav'} onClick={scrollFour}><div className='sidenavhide'>Contact</div></div>
            <div className = 'slide'></div>
        </div>
    );
}

export default Sidebar;