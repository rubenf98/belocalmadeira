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
import Newsletter from "./HomepageComponents/Newsletter";
import { connect } from "react-redux";

function Homepage(props) {
    const { text } = require("../../assets/" + props.language + "/homepage");

    return (
        <>
            <Header text={text.header} />

            <Canyoning text={text.canyoning} />
            <Activities text={text.activities} />
            {/* <Coasteering text={text.coasteering} /> */}
            <Services text={text.services} />
            <Faq text={text.faq} />
            <Tours text={text.activities} />

            <Newsletter text={text.activities} />

            {/* <Family text={text.family} /> */}

            {/* <Discount text={text.discount} /> */}

            <Feedback text={text.feedback} />
            <Instagram text={text.socials} />
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        language: state.application.language,
    };
};
export default connect(mapStateToProps, null)(Homepage);
