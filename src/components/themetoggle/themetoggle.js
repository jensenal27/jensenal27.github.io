import React from 'react';
import './themetoggle.css';
import {FiSun} from 'react-icons/fi';
import {FiMoon} from 'react-icons/fi';

const ThemeToggle = ({toggleTheme, theme}) => {

    return ( theme === 'light' ?
        <div className = 'themetoggle' onClick={toggleTheme}><FiMoon/></div> :
        <div className = 'themetoggle' onClick={toggleTheme}><FiSun/></div>
    );
}

export default ThemeToggle;