import React from 'react';
import './work.css';
import {FiExternalLink} from 'react-icons/fi';
import {FiGithub} from 'react-icons/fi';

const Work = ({inView}) => {

    return (
        <div className = 'work'>
            <div className = 'workwrap'>
            <div className = 'examplepagetitle' data-aos='fade-up'>
                Projects
            </div>
                <div className = 'example' data-aos='fade-right'>
                    <div className='exampleimage' id='imageone'></div>
                    <a href='https://jensenal27.github.io/event-calendar/' target='__blank' className='imageoverlay'>
                        <div className='overlaycontent'><FiExternalLink/><br/>Click to View Demo</div>
                    </a>
                    <a href='https://jensenal27.github.io/event-calendar/' target='__blank' className='exampletitle'>Event Calendar</a>
                    <div className = 'exampleinfo'>Developed for Booz Allen Hamilton's Innovation Center. Built with React and deployed to a Microsoft SharePoint page. Live data is provided by SharePoint REST service. Designed to be viewed at fullscreen on a touchscreen monitor (16:9).</div>
                    <div className = 'examplesubinfo'>
                        <span>React</span>
                        <span>SharePoint API</span>
                    </div>
                    <div className ='exampleicons'>
                        <a href='https://github.com/jensenal27/event-calendar/tree/master' target='__blank' className='gitbutton'><FiGithub/></a>
                        <a href='https://jensenal27.github.io/event-calendar/' target='__blank' className='demobutton'><FiExternalLink/></a>
                    </div>
                </div>
                <div className='example' data-aos='fade-left'>
                    <div className='exampleimage' id='imagetwo'></div>
                    <a href='https://jensenal27.github.io/mentor-wall/' target='__blank' className='imageoverlay'>
                        <div className='overlaycontent'><FiExternalLink/><br/>Click to View Demo</div>
                    </a>
                    <a href='https://jensenal27.github.io/mentor-wall/' target='__blank' className = 'exampletitle'>Mentor Wall</a>
                    <div className = 'exampleinfo'>Developed for Booz Allen Hamilton's Innovation Center. Built with React and deployed to a Microsoft SharePoint page. Live data is provided by SharePoint REST service. Designed to be viewed at fullscreen on a touchscreen monitor (16:9).</div>
                    <div className = 'examplesubinfo'>
                        <span>React</span>
                        <span>SharePoint API</span>
                    </div>
                    <div className ='exampleicons'>
                        <a href='https://github.com/jensenal27/mentor-wall/tree/master' target='__blank' className='gitbutton'><FiGithub/></a>
                        <a href='https://jensenal27.github.io/mentor-wall/' target='__blank' className='demobutton'><FiExternalLink/></a>
                    </div>
                </div>
                <div className='example' data-aos='fade-right'>
                    <div className='exampleimage' id='imagefive'></div>
                    <a href='https://jensenal27.github.io/metrics-dashboard/' target='__blank' className='imageoverlay'>
                        <div className='overlaycontent'><FiExternalLink/><br/>Click to View Demo</div>
                    </a>
                    <a href='https://jensenal27.github.io/metrics-dashboard/' target='__blank' className = 'exampletitle'>Metrics Dashboard</a>
                    <div className = 'exampleinfo'>Dashboard with detailed breakdown of meeting and event metrics developed for Booz Allen Hamilton's Innovation Center.</div>
                    <div className = 'examplesubinfo'>
                        <span>React</span>
                        <span>D3.js</span>
                    </div>
                    <div className ='exampleicons'>
                        <a href='https://github.com/jensenal27/metrics-dashboard/tree/master' target='__blank' className='gitbutton'><FiGithub/></a>
                        <a href='https://jensenal27.github.io/metrics-dashboard/' target='__blank' className='demobutton'><FiExternalLink/></a>
                    </div>
                </div>
                <div className='example' data-aos='fade-left'>
                    <div className='exampleimage' id='imagethree'></div>
                    <a href='/videos/eventspacemap.mp4' target='__blank' className='imageoverlay'>
                        <div className='overlaycontent'><FiExternalLink/><br/>Click to View Demo</div>
                    </a>
                    <a href='/videos/eventspacemap.mp4' target='__blank' className = 'exampletitle'>Event Space Map</a>
                    <div className = 'exampleinfo'>V2 of an event space map originally developed for the kick off of DC Startup Week 2019 at Booz Allen Hamilton's Innovation Center. Designed to be viewed at fullscreen on a touchscreen monitor rotated 90 degrees (9:16).</div>
                    <div className = 'examplesubinfo'>
                        <span>React</span>
                        <span>EMS API</span>
                    </div>
                    <div className ='exampleicons'>
                        <a href='https://github.com/jensenal27/event-space-map' target='__blank' className='gitbutton'><FiGithub/></a>
                        <a href='/videos/eventspacemap.mp4' target='__blank' className='demobutton'><FiExternalLink/></a>
                    </div>
                </div>
                <div className='example' data-aos='fade-right'>
                    <div className='exampleimage' id='imagefour'></div>
                    <a href='https://github.com/jensenal27/jensenal27.github.io' target='__blank' className='imageoverlay'>
                        <div className='overlaycontent'><FiExternalLink/><br/>Click to View Git Repo</div>
                    </a>
                    <a href='https://github.com/jensenal27/jensenal27.github.io' target='__blank' className = 'exampletitle'>Portfolio Site</a>
                    <div className = 'exampleinfo'>Front end is built with React. Backend is a Node server using Express and Mailgun API for the contact form.</div>
                    <div className = 'examplesubinfo'>
                        <span>React</span>
                        <span>Express</span>
                        <span>Node.js</span>
                    </div>
                    <div className ='exampleicons'>
                        <a href='https://github.com/jensenal27/jensenal27.github.io' target='__blank' className='gitbutton'><FiGithub/></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Work;