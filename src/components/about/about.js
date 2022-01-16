import React from 'react';
import './about.css';

const About = ({scrollTwo}) => {

    return (
        <div className = 'about'>
            <div className = 'aboutwrap'>
                <div className = 'about_intro' data-aos='fade-up' data-aos-delay='400'>
                    Hi, my name is
                </div>
                <div className = 'about_title' data-aos='fade-up' data-aos-delay='500'>
                    Anders Jensen
                </div>
                <div className = 'about_subtitle' data-aos='fade-up' data-aos-delay='600'>
                    I build web applications with React and Angular.
                </div>
                <div className = 'about_info' data-aos='fade-up' data-aos-delay='700'>
                    I'm a web developer and programmer based in Washington, DC.
                </div>
                <a href='mailto:jensenal27@gmail.com' className = 'about_button' data-aos='fade-up' data-aos-delay='800'>Contact Me</a>
            </div>
            <div className = 'aboutarrow' onClick={scrollTwo} data-aos='fade-in' data-aos-delay='1000'>
                <div className = 'arrowlabel'>Recent Work</div>
                <div className = 'arrowimage'></div>
            </div>
            
        </div>
    );
}

export default About;