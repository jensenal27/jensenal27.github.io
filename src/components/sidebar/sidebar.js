import React from 'react';
import './sidebar.css';
import { FiSun } from "react-icons/fi";
import { FiMoon } from "react-icons/fi";

const Sidebar = ({scrollOne, scrollTwo, scrollThree, menu, toggleMenu, theme, toggleTheme}) => {

    return (
        <div className = {menu === false ? 'sidebar' : 'sidebar-open'} style = {menu === false ? {width: '0px'} : {width: 'min(66vw, 400px)'}}>
            <div className = 'menu-close' onClick={toggleMenu}>
                  <div className = 'menu-close-line' style={{transform: 'rotate(90deg) translatey(-40px)'}}></div>
                  <div className = 'menu-close-line'></div>
                </div>
            <div className = 'sidenav-wrap'>
                <div className = 'sidenav' onClick={scrollOne}>About</div>
                <div className = 'sidenav' onClick={scrollTwo}>Work</div>
                <div className = 'sidenav' onClick={scrollThree}>Contact</div>
                <div className = 'sidenav'><a href='/AJensenResume.pdf' target='__blank' className = 'downbutton'>Resume</a></div>
                {( theme === 'light' ?
                    <div className = 'themetoggle' onClick={toggleTheme}><FiMoon/></div> :
                    <div className = 'themetoggle' onClick={toggleTheme}><FiSun/></div>
                )}
            </div>
        </div>
    );
}

export default Sidebar;