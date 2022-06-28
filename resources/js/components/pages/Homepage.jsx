import React, { useEffect } from 'react'
import About from './HomepageComponents/About';
import Activities from './HomepageComponents/Activities';
import Feedback from './HomepageComponents/Feedback';
import Header from './HomepageComponents/Header';
import Instagram from './HomepageComponents/Instagram';
import Services from './HomepageComponents/Services';

function Homepage() {
    const { text } = require('../../assets/' + localStorage.getItem('language') + "/homepage");

    return (
        < >
            <Header text={text.header} />
            <About text={text.about} />
            <Services text={text.services} />
            <Activities text={text.activities} />
            <Feedback text={text.feedback} />
            <Instagram text={text.socials} />
        </>
    )
}

export default Homepage


