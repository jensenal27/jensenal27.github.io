import React, {useState} from 'react';
import {useTransition, config, animated} from 'react-spring';
import './resume.css';
import {IoLogoHtml5} from 'react-icons/io';
import {IoLogoCss3} from 'react-icons/io';
import {IoLogoJavascript} from 'react-icons/io';
import {FaReact} from 'react-icons/fa';
import {IoLogoNodejs} from 'react-icons/io';
import {FaGithub} from 'react-icons/fa';
import {FaEllipsisH} from 'react-icons/fa';
import {FaGithubSquare} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';

const Resume = ({inView}) => {

    const [active, setActive] = useState(0);

    const onJobClick = (x) => {
        if (active !== x) {
            setActive(x);
        } else {
            setActive(0);
        }
    }

    const transitionLeft = useTransition(inView, null, {
        config: config.gentle,
        from: { opacity: 0, transform: 'translatex(-100px)' },
        enter: { opacity: 1, transform: 'translatex(0px)' },
        leave: { opacity: 0, transform: 'translatex(-100px)' }
    })
    const transitionMid = useTransition(inView, null, {
        config: config.gentle,
        from: { opacity: 0, transform: 'translatey(-100px)' },
        enter: { opacity: 1, transform: 'translatey(0px)' },
        leave: { opacity: 0, transform: 'translatey(-100px)' }
    })
    const transitionRight = useTransition(inView, null, {
        config: config.gentle,
        from: { opacity: 0, transform: 'translatex(100px)' },
        enter: { opacity: 1, transform: 'translatex(0px)' },
        leave: { opacity: 0, transform: 'translatex(100px)' }
    })

    const onDownload = () => {
        window.open('http://localhost:3000/download');
    }

    return (
        <div className = 'resumewrap'>
            {transitionMid.map(({item, key, props}) => 
            item && <animated.div key={key} style={props} className = 'resumeheader'>
                <div className='resumeheadericons'>
                    <div className = 'downbutton' onClick={onDownload}>Download</div>
                </div>
            </animated.div>)}
            {transitionLeft.map(({item, key, props}) => 
            item && <animated.div key={key} style={props} className = 'resumefirst'>
                <div className = 'resumeleft'>
                    <div className = 'resumelinks'>
                        <a href='https://www.linkedin.com/in/anders-jensen-443295165' target='__blank'><FaLinkedin/></a>
                        <a href='https://github.com/jensenal27' target='__blank'><FaGithubSquare/></a>
                    </div>
                    <div className = 'resumebreak'></div>
                    <div className = 'resumesummary'>
                        <div className = 'resumetitle'>Summary of Experience</div>
                        <div className = 'resumeinfo'>Experienced Administrative Associate with a demonstrated history of working in the management consulting industry. Skilled in Research, Customer Service, Microsoft Office, and Administrative Assistance. Strong administrative professional with a Bachelor of Arts focused in English Language and Literature from Old Dominion University.</div>
                    </div>
                    <div className = 'resumeskillsection'>
                        <div className = 'resumetitle'>Skills</div>
                        <div className = 'resumeskills'>
                            <IoLogoHtml5/>
                            <IoLogoCss3/>
                            <IoLogoJavascript/>
                            <FaReact/>
                            <IoLogoNodejs/>
                            <FaGithub/>
                        </div>
                    </div>
                    <div className = 'resumeeducation'>
                        <div className = 'resumetitle'>Education</div>
                        <div className = 'resumesubtitle'>Old Dominion University</div>
                        <div className = 'resumeinfo'>Bachelor of Arts in English Literature (2016)</div>
                    </div>
                </div>
            </animated.div>)}
            
            {transitionRight.map(({item, key, props}) => 
            item && <animated.div key={key} style={props} className = 'resumesecond'>
                <div className = {`resumeblock ${active === 1 ? 'active' : null}`} onClick={() => onJobClick(1)}>
                    <div className = 'resumeicon'><FaEllipsisH/></div>
                    <div className = 'resumetitle'>Workplace Experience Assistant Manager</div>
                    <div className = 'resumesubtitle'>Booz Allen Hamilton, (January 2019-Present)</div>
                    <div className = 'resumeinfo'>+ Act as liaison to CBRE facilities leadership representing Booz Allen Hamilton's first innovation office: The Innovation Center<br/>+ Assist with launch of visitor check in and metrics system through third party vendor<br/>+ Manage quality control by maintaining 100K budget and managing vendor relationships<br/>+ Design, modify, develop, write, and implement software systems to facilitate employee and guest interaction with technology throughout the space</div>
                </div>
                <div className = {`resumeblock ${active === 2 ? 'active' : null}`} onClick={() => onJobClick(2)}>
                    <div className = 'resumeicon'><FaEllipsisH/></div>
                    <div className = 'resumetitle'>Innovation Center Concierge</div>
                    <div className = 'resumesubtitle'>Booz Allen Hamilton, (January 2018-Present)</div>
                    <div className = 'resumeinfo'>+ Manage on-site access responsibilites, telecommunication, and organization of physical space including scheduling orders, stocking, and keeping inventory of food and office supplies<br/>+ Complete weekly metrics and create and update PowerPoint dashboard on high level information for leadership<br/>+ Update digital signage with daily events and meetings<br/>+ Create a 3-week outlook in Excel for internal website, send reminders and serve as on-site support, register visitors and issue site badges according to firm policy</div>
                </div>
                <div className = {`resumeblock ${active === 3 ? 'active' : null}`} onClick={() => onJobClick(3)}>
                    <div className = 'resumeicon'><FaEllipsisH/></div>
                    <div className = 'resumetitle'>Conference Center Logistics Coordinator</div>
                    <div className = 'resumesubtitle'>Booz Allen Hamilton, (July 2016 - December 2017)</div>
                    <div className = 'resumeinfo'>+ Execute meeting and event logistics and planning in three Conference Center locations<br/>+ Accountable for all meetings and event logistic responsibilities including: audio visual, facilities, and security coordination<br/>+ Analyze and present meeting and event data to leadership<br/>+ Assist with the implementation of new firmwide tool used for booking meeting and event space and workspace<br/>+ Lead information sessions on-site and via teleconference for internal staff during launch</div>
                </div>
            </animated.div>)}
            <div className='resumefooter'></div>
        </div>
    );
}

export default Resume;