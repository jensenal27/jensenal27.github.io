import React, {useState, useEffect} from 'react';
import './header.css';
import { FiSun } from "react-icons/fi";
import { FiMoon } from "react-icons/fi";

const Header = ({scrollOne, scrollTwo, scrollThree, menu, toggleMenu, aboutInView, workInView, contactInView, toggleTheme, theme}) => {

    const [direction, setDirection] = useState(0);
    const [prevDirection, setPrevDirection] = useState(0);
    
    let doc = document.documentElement;
    let w = window;

    let prevScroll = w.scrollY || doc.scrollTop;
    let curScroll;
    
    useEffect(() => {

        let checkScroll = function() {
        
            curScroll = w.scrollY || doc.scrollTop;
            if (curScroll < 120 && prevScroll < 120) {
                setDirection(0);
            }
            else if (curScroll > prevScroll) { 
              //scrolled up
              setDirection(2);
            }
            else if (curScroll < prevScroll) { 
              //scrolled down
              setDirection(1);
            }
        
            if (direction !== prevDirection) {
              toggleHeader(direction, curScroll);
            }
            
            prevScroll = curScroll;
          };

          let toggleHeader = function(direction, curScroll) {
            if (direction === 2 && curScroll > 100) { 
              setPrevDirection(direction);
            }
            else if (direction === 1) {
              setPrevDirection(direction);
            }
          };

          window.addEventListener('scroll', checkScroll);

    }, [direction])

    return (

        <div className = 'header' id ='header' style = {direction === 2 && theme === 'light' ? {transform: 'translatey(-100px)', borderBottom: '2px solid #d2dae2'} 
                                                        : direction === 2 && theme === 'dark' ? {transform: 'translatey(-100px)', borderBottom: '2px solid #1e272e'}
                                                        : direction === 1 && theme === 'light' ? {transform: 'translatey(0)', borderBottom: '2px solid black'}
                                                        : direction === 1 && theme === 'dark' ? {transform: 'translatey(0)', borderBottom: '2px solid white'}
                                                        : direction === 0 && theme === 'light' ? {transform: 'translatey(0)', borderBottom: '2px solid #d2dae2'}
                                                        : {transform: 'translatey(0)', borderBottom: '2px solid #1e272e'}}>
            <div className = 'headerwrap' data-aos='fade-up' data-aos-delay='200'>
                <div className={aboutInView === true ? 'nav activeone' : 'nav'} onClick={scrollOne}>About</div>
                <div className={workInView === true ? 'nav active' : 'nav'} onClick={scrollTwo}>Work</div>
                <div className={contactInView === true ? 'nav active' : 'nav'} onClick={scrollThree}>Contact</div>
                <div className='nav'><a href='/AJensenResume.pdf' target='__blank' className = 'downbutton'>Resume</a></div>
                {( theme === 'light' ?
                    <div className = 'themetoggle' onClick={toggleTheme}><FiMoon/></div> :
                    <div className = 'themetoggle' onClick={toggleTheme}><FiSun/></div>
                )}
                <div className = 'menu' onClick={toggleMenu}>
                  <div className = 'menu-line'></div>
                  <div className = 'menu-line'></div>
                  <div className = 'menu-line'></div>
                </div>
            </div>
        </div>
    );
}

export default Header;