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
    feedback: {
        title: "Feedback",
        subtitle: (<>What are <span>people</span> saying about us?</>),
        subsubtitle: "Client’s Feedback About Me",
        viewmore: "View More",
        items: [
            { author: "Lindsey Rangel", comment: "Fabio is hands down the best guide you would ask for. We booked a hike with him and had such a phenomenal experience we asked if he was available the next day. Luckily for us he was. He made the plan for the 2nd day and I can't even put into words how fun and incredible it was." },
            { author: "Nessrine", comment: "That was the BEST way to start our journey in Madeira! So far the best activity I've done in my life while traveling. The guide Fabio was awesome and explained us many things, took crazy good pictures and videos of me and my friend while jumping in the waterfall." },
            { author: "Charlotte Price", comment: "An absolute must do when in Madeira !! The intermediate canyoning course was packed with plenty of abseils, ziplines, and slides which made for a wicked day. The equipment was all very high quality, and in combination with the teams expertise we felt incredibly safe throughout." },
            { author: "Henrike Maris", comment: "Fabio and Pedro were our guides on the canyoning tour today. They were amazing guides and the tour was fantastic! We felt really safe and the views were wonderfull! Afterwards we got a lot of very nice photographs. An amazing experience to remember!" },
            { author: "Maximilian Lambrecht", comment: "Canyoning wit Be Local Madeira was definitely one of our highlights on the island. The guides were very friendly, helpful and super patient with the beginners. The canyons on the island are spectacular and Be Local Madeira is the best company to experience them with." },
            { author: "Vanessa", comment: "Great adventure!! The guides where professional. The view was amazing and the equipment was also on point. Couldn’t wish for a better experience! At the end of the trip we were gifted a local cake. Great end of the adventure." },
            { author: "Philip Schürheck", comment: "Did an incredible Canyoning tour with the guys from belocalmadeira! Was super fun and professional at the same time. After the Canyoning, we also have visited a local restaurant spontaneously with one of the guides. All in all a great experience." },
            { author: "Diogo Ribeiro", comment: "Fábio from Be Local Madeira is very profissional and attenticious. Gave us all the confidence, safety and fun that we needed! The canyoning (Level 2, at Curral das Freiras) is very vary with a lot of rafting, walking, waterfalls and dives ! The landscape is breathtaking!" },
        ]
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