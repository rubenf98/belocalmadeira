import React from 'react'
import styled from 'styled-components'

const LinkContainer = styled.a`
display: inline;
position: relative;
margin-left: 15px;
color: black;

&:hover {
    color: black;
}
`;
const Link = styled.img`
    position: absolute;
    bottom: -25px;
    right: -30px;
    height: 35px;
    width: auto;
    
`;

export const text = {
    header: {
        title: "Be Local Madeira",
        subtitle: "Get to know Madeira Island from a local’s perspective."
    },
    about: {
        videoError: "Your browser does not support the video tag.",
        titles: ["who is be local", "welcome to the be local adventure"],
        description: [
            "We are a local company that promotes adventure and experiences with nature in Madeira Island through.",
            "We offer a range of mind-blowing experiences that will allow you to enjoy unique moments in fascinating places.",
            "We have dedicated and certified professionals in Canyoning, Coasteering, Biking and Hiking. This way you will be accompanied at all times.",
            "Join us and you will live moments that you will remember forever!"
        ],
    },
    services: {
        title: "services",
        subtitle: (<>What we have to <span>offer</span></>),
        items: [
            {
                title: "Unforgettable experiences",
                description: "Creating your experience is entirely collaborative and our guides are here for every step"
            },
            {
                title: "High quality equipment",
                description: "Security is highly important for us, so we ensure high quality safety equipment for all activities"
            },
            {
                title: "Transportation",
                description: "We take care of transportation services so that you may enjoy the experience to the fullest"
            },
            {
                title: "Photos and videos of the activity",
                description: "What better that look back at the amazing moments you had with us and remember them forever"
            },
            {
                title: "Certified Guides",
                description: "Our guides are certified for every activity we offer, providing the amazing adventure you seek."
            },
        ]
    },
    activities: {
        title: "Activities",
        subtitle: (<>Get a glimpse of what you can <span>experience</span></>),
        items: ['canyoning', "biking", "coasteering", "hiking"]
    },
    socials: {
        title: "socials",
        subtitle: (
            <>follow us on
                <LinkContainer href="https://www.instagram.com/belocalmadeira/" target="_blank">
                    <span>Instagram</span>
                    <Link src='/image/homepage/instagram_arrow.svg' />
                </LinkContainer>
            </>),
    },
} 