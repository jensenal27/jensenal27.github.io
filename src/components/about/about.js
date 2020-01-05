import React from 'react';
import {useTransition, config, animated} from 'react-spring';
import './about.css';
import {FaGithubSquare} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';

const About = ({inView}) => {

    const transitionLeft = useTransition(inView, null, {
        config: config.gentle,
        from: { opacity: 0, transform: 'translatey(-100px)' },
        enter: { opacity: 1, transform: 'translatey(0px)' },
        leave: { opacity: 0, transform: 'translatey(-100px)' }
    })

    const transitionRight = useTransition(inView, null, {
        config: config.gentle,
        from: { opacity: 0, transform: 'translatey(100px)' },
        enter: { opacity: 1, transform: 'translatey(0px)' },
        leave: { opacity: 0, transform: 'translatey(100px)' }
    })

    const transitionMid = useTransition(inView, null, {
        config: config.gentle,
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 }
    })

    return (
        <div className = 'aboutwrap'>
            {transitionLeft.map(({item, key, props}) => 
            item && <animated.div key={key} style={props} className = 'abouttitle'>ANDERS</animated.div>)}
            {transitionRight.map(({item, key, props}) => 
            item && <animated.div key={key} style={props} className = 'aboutsubtitle'>JENSEN</animated.div>)}
            {transitionMid.map(({item, key, props}) => 
            item && <animated.div key={key} style={props} className = 'aboutfooter'>
                <a href='https://www.linkedin.com/in/anders-jensen-443295165' target='__blank'><FaLinkedin/></a>
                <a href='https://github.com/jensenal27' target='__blank'><FaGithubSquare/></a>
            </animated.div>)}
        </div>
    );
}

export default About;