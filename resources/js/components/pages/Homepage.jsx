import React from "react";
import Activities from "./HomepageComponents/Activities";
import Faq from "./HomepageComponents/Faq";
import Feedback from "./HomepageComponents/Feedback";
import Header from "./HomepageComponents/Header";
import Instagram from "./HomepageComponents/Instagram";
import Services from "./HomepageComponents/Services";
import Tours from "./HomepageComponents/Tours";
import Canyoning from "./HomepageComponents/Canyoning";
import Coasteering from "./HomepageComponents/Coasteering";

function Homepage() {
    const { text } = require("../../assets/" +
        localStorage.getItem("language") +
        "/homepage");

    return (
        <>
            <Header text={text.header} />
            <Activities text={text.activities} />
            <Canyoning text={text.canyoning} />
            <Coasteering text={text.coasteering} />
            <Services text={text.services} />
            <Faq text={text.faq} />
            <Tours text={text.activities} />

            {/* <Family text={text.family} /> */}

            {/* <Discount text={text.discount} /> */}

            <Feedback text={text.feedback} />
            <Instagram text={text.socials} />
        </>
    );
}

export default Homepage;
