import React, { useEffect } from 'react'
import About from './HomepageComponents/About';
import Activities from './HomepageComponents/Activities';
import Discount from './HomepageComponents/Discount';
import Family from './HomepageComponents/Family';
import Faq from './HomepageComponents/Faq';
import Feedback from './HomepageComponents/Feedback';
import Header from './HomepageComponents/Header';
import Instagram from './HomepageComponents/Instagram';
import Services from './HomepageComponents/Services';

function Homepage() {
    const { text } = require('../../assets/' + localStorage.getItem('language') + "/homepage");

    return (
        < >
            <Header text={text.header} />
            <Activities text={text.activities} />
            <Services text={text.services} />
            <Family text={text.family} />
            <Faq text={text.faq} />
            {/* <Discount text={text.discount} /> */}
            <About text={text.about} />
            <Feedback text={text.feedback} />
            <Instagram text={text.socials} />
        </>
    )
}

export default Homepage


