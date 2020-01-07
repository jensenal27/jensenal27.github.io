import React from 'react';
import {useTransition, config, animated} from 'react-spring';
import './work.css';
import {FaEye} from 'react-icons/fa';
import {FaEyeSlash} from 'react-icons/fa';
import {FaGithub} from 'react-icons/fa';

const Work = ({inView}) => {

    const transitionLeft = useTransition(inView, null, {
        config: config.gentle,
        from: { opacity: 0, transform: 'translatex(-100px)' },
        enter: { opacity: 1, transform: 'translatex(0px)' },
        leave: { opacity: 0, transform: 'translatex(-100px)' }
    })
    // const transitionMid = useTransition(animateWork, null, {
    //     config: config.gentle,
    //     from: { opacity: 0 },
    //     enter: { opacity: 1 },
    //     leave: { opacity: 0 }
    // })
    const transitionRight = useTransition(inView, null, {
        config: config.gentle,
        from: { opacity: 0, transform: 'translatex(100px)' },
        enter: { opacity: 1, transform: 'translatex(0px)' },
        leave: { opacity: 0, transform: 'translatex(100px)' }
    })

    return (
        <div className = 'wrap'>
            {transitionLeft.map(({item, key, props}) => 
            item && <animated.div key={key} style={props} className = 'exampleleftwrap'>
                <div className = 'example'>
                    <div className='exampleimage' id='imageone'></div>
                    <div className = 'exampletitle'>Event Calendar</div>
                    <div className = 'exampleinfo'>Developed for Booz Allen Hamilton's Innovation Center. Built in React and deployed to a Microsoft SharePoint page. Live data is provided by SharePoint REST service. Designed to be viewed at fullscreen on a touchscreen monitor (16:9).</div>
                    <div className ='exampleicons'>
                        <a href='https://jensenal27.github.io/event-calendar/' target='__blank' className='demobutton'><FaEye/></a>
                        <a href='https://github.com/jensenal27/event-calendar/tree/master' target='__blank' className='gitbutton'><FaGithub/></a>
                    </div>
                </div>
                <div className='example'>
                    <div className='exampleimage' id='imagetwo'></div>
                    <div className = 'exampletitle'>Mentor Wall</div>
                    <div className = 'exampleinfo'>Developed for Booz Allen Hamilton's Innovation Center. Built in React and deployed to a Microsoft SharePoint page. Live data is provided by SharePoint REST service. Designed to be viewed at fullscreen on a touchscreen monitor (16:9).</div>
                    <div className ='exampleicons'>
                        <a href='https://jensenal27.github.io/mentor-wall/' target='__blank' className='demobutton'><FaEye/></a>
                        <a href='https://github.com/jensenal27/mentor-wall/tree/master' target='__blank' className='gitbutton'><FaGithub/></a>
                    </div>
                </div>
            </animated.div>)}
            {transitionRight.map(({item, key, props}) => 
            item && <animated.div key={key} style={props} className = 'examplerightwrap'>
                <div className='example'>
                    <div className='exampleimage' id='imagethree'></div>
                    <div className = 'exampletitle'>Kiosk Event Map</div>
                    <div className = 'exampleinfo'>Developed for the kick off of DC Startup Week 2019 at Booz Allen Hamilton's Innovation Center. Designed to be viewed at fullscreen on a touchscreen monitor rotated 90 degrees (9:16).</div>
                    <div className ='exampleicons'>
                        <a href='Javascript:;' className='demobutton'><FaEyeSlash/></a>
                        <a href='Javascript:;' className='gitbutton'><FaGithub/></a>
                    </div>
                </div>
                <div className='example'>
                    <div className='exampleimage' id='imagefour'></div>
                    <div className = 'exampletitle'>Portfolio Site</div>
                    <div className = 'exampleinfo'>Front end is built with React. Backend is a Node server using Express and Nodemailer for the contact form.</div>
                    <div className ='exampleicons'>
                        <a href='Javascript:;' className='demobutton'><FaEyeSlash/></a>
                        <a href='https://github.com/jensenal27/jensenal27.github.io' target='__blank' className='gitbutton'><FaGithub/></a>
                    </div>
                </div>
            </animated.div>)}
        </div>
    );
}

export default Work;