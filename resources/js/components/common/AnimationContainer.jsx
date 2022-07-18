import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';

function AnimationContainer({ children, animateIn, duration = 1, delay = 0, offset = 300 }) {
    return (
        <ScrollAnimation offset={offset} animateOnce duration={duration} animateIn={animateIn} delay={delay}>
            {children}
        </ScrollAnimation>
    )
}

export default AnimationContainer