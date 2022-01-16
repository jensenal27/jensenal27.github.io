import React, {useState, useEffect} from 'react';
import {useInView} from "react-intersection-observer";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './style.css';
import Header from './components/header/header';
import Sidebar from './components/sidebar/sidebar';
import Footer from './components/footer/footer';
import About from './components/about/about';
import Work from './components/work/work';
import Contact from './components/contact/contact';

const Portfolio = () => {

    const section = document.getElementsByClassName('section');

    const [theme, setTheme] = useState('dark');
    const [menu, setMenu] = useState(false);

    const toggleMenu = () => {
      menu === false ? setMenu(true) : setMenu(false);
    }

    const hideMenu = () => {
        setMenu(false);
    }
    
    const [refAbout, aboutInView] = useInView({threshold: .8});
    const [refWork, workInView] = useInView({threshold: .1});
    const [refContact, contactInView] = useInView({threshold: .8});

    const scrollOne = () => {
        section[0].scrollIntoView();
        hideMenu();
    }
    const scrollTwo = () => {
        section[1].scrollIntoView();
        hideMenu();
    }
    const scrollThree = () => {
        section[2].scrollIntoView();
        hideMenu();
    }

    const toggleTheme = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light');
    }

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className = {theme === 'light' ? 'container' : 'container_dark'}>
            <Footer/>
            <Header
            theme={theme} toggleTheme={toggleTheme} menu={menu} toggleMenu={toggleMenu}
            scrollOne={scrollOne} scrollTwo={scrollTwo} scrollThree={scrollThree}
            aboutInView={aboutInView} workInView={workInView} contactInView={contactInView}/>
            <Sidebar theme={theme} toggleTheme={toggleTheme} menu={menu} toggleMenu={toggleMenu}
            scrollOne={scrollOne} scrollTwo={scrollTwo} scrollThree={scrollThree}/>
            <div className = 'section' id='one' ref={refAbout} onClick={hideMenu}>
                <About inView={aboutInView} scrollTwo={scrollTwo}/>
            </div>
            <div className = 'section' id='two' ref={refWork} onClick={hideMenu}>
                <Work inView={workInView}/>
            </div>
            <div className = 'section' id='four' ref={refContact} onClick={hideMenu}>
                <Contact inView={contactInView}/>
            </div>
        </div>
    );
}

export default Portfolio;