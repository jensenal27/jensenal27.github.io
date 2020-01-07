import React, {useState, useEffect} from 'react';
import {useInView} from "react-intersection-observer";
import './style.css';
import Header from './components/header/header';
import Sidebar from './components/sidebar/sidebar';
import ThemeToggle from './components/themetoggle/themetoggle';
import About from './components/about/about';
import Work from './components/work/work';
import Resume from './components/resume/resume';
import Contact from './components/contact/contact';

const Portfolio = () => {

    const section = document.getElementsByClassName('section');
    const slider = document.getElementsByClassName('slide');

    const [theme, setTheme] = useState('light');
    const [showHeader, setShowHeader] = useState(false);
    
    const [refAbout, aboutInView] = useInView({threshold: .8});
    const [refWork, workInView] = useInView({threshold: .8});
    const [refResume, resumeInView] = useInView({threshold: .8});
    const [refContact, contactInView] = useInView({threshold: .8});

    const animSliderOne = () => {
        if (workInView === true) {
            slider[0].id = 'slide21';
        } else if (resumeInView === true) {
            slider[0].id = 'slide31';
        } else if (contactInView === true) {
            slider[0].id = 'slide41';
        }
    }
    const animSliderTwo = () => {
        if (aboutInView === true) {
            slider[0].id = 'slide12';
        } else if (resumeInView === true) {
            slider[0].id = 'slide32';
        } else if (contactInView === true) {
            slider[0].id = 'slide42';
        }
    }
    const animSliderThree = () => {
        if (aboutInView === true) {
            slider[0].id = 'slide13';
        } else if (workInView === true) {
            slider[0].id = 'slide23';
        } else if (contactInView === true) {
            slider[0].id = 'slide43';
        }
    }
    const animSliderFour = () => {
        if (aboutInView === true) {
            slider[0].id = 'slide14';
        } else if (workInView === true) {
            slider[0].id = 'slide24';
        } else if (resumeInView === true) {
            slider[0].id = 'slide34';
        }
    }

    const scrollOne = () => {
        animSliderOne();
        section[0].scrollIntoView();
    }
    const scrollTwo = () => {
        animSliderTwo();
        section[1].scrollIntoView();
    }
    const scrollThree = () => {
        animSliderThree();
        section[2].scrollIntoView();
    }
    const scrollFour = () => {
        animSliderFour();
        section[3].scrollIntoView();
    }

    const toggleTheme = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light');
    }

    useEffect(() => {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }, []);

    useEffect(() => {
        setShowHeader(true);
    }, []);

    return (
        <div className = {theme === 'light' ? 'container' : 'container_dark'}>
            <ThemeToggle theme={theme} toggleTheme={toggleTheme}/>
            <Header
            showHeader={showHeader}
            scrollOne={scrollOne} scrollTwo={scrollTwo} scrollThree={scrollThree} scrollFour={scrollFour}
            aboutInView={aboutInView} workInView={workInView} resumeInView={resumeInView} contactInView={contactInView}/>
            <Sidebar 
            scrollOne={scrollOne} scrollTwo={scrollTwo} scrollThree={scrollThree} scrollFour={scrollFour}
            aboutInView={aboutInView} workInView={workInView} resumeInView={resumeInView} contactInView={contactInView}/>
            <div className = 'section' id='one' ref={refAbout}>
                <About inView={aboutInView}/>
            </div>
            <div className = 'section' id='two' ref={refWork}>
                <Work inView={workInView}/>
            </div>
            <div className = 'section' id='three' ref={refResume}>
                <Resume inView={resumeInView}/>
            </div>
            <div className = 'section' id='four' ref={refContact}>
                <Contact inView={contactInView}/>
            </div>
        </div>
    );
}

export default Portfolio;