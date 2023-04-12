import React, { lazy, Suspense } from 'react'
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
    const About = React.lazy(() => import('./HomepageComponents/About'));

    return (
        < >
            <Header text={text.header} />
            <Activities text={text.activities} />
            <Services text={text.services} />
            <Family text={text.family} />
            <Faq text={text.faq} />
            {/* <Discount text={text.discount} /> */}
            <Suspense fallback={<div></div>}>
                <About text={text.about} />
            </Suspense>

            <Feedback text={text.feedback} />
            <Instagram text={text.socials} />
        </>
    )
}

export default Homepage


