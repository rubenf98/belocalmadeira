import React from 'react'
import { Link } from 'react-router-dom';
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
const LinkImg = styled.img`
    position: absolute;
    bottom: -25px;
    right: -30px;
    height: 35px;
    width: auto;
    
`;

export const text = {
    header: {
        title: "Be Local Madeira",
        subtitle: "Get to know Madeira Island from a local's perspective",
        button: "Book now",
        carousel: ["canyoning", "coasteering", "jeeps", "hiking", "biking"]
    },
    about: {
        videoError: "Your browser does not support the video tag.",
        titles: ["Who is be local", "The best professionals for the task", "Your experience starts now"],
        description: [
            "We are a local company that promotes adventure and experiences with nature in Madeira Island through.",
            "We have dedicated and certified professionals in Canyoning, Coasteering, Biking and Hiking. This way you will be accompanied at all times.",
            "We offer a range of mind-blowing experiences that will allow you to enjoy unique moments in fascinating places. Join us and you will live moments that you will remember forever!"
        ],
    },
    services: {
        title: "What we have to offer",
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
    multiday: {
        title: (<>Madeira <span>Multi-Day</span> Adventure Packages</>),
        paragraphs: [
            "Embark on an unforgettable adventure with our flexible multi-day packages! You can explore the island’s most breathtaking canyoning routes, scenic hiking trails, and authentic local culture at your own pace. Adventure, discovery, and indulgence are all yours to enjoy, exactly how you want.",
            "Our packages are designed as flexible frameworks, giving you the freedom to create your perfect adventure. Every activity, schedule, and itinerary can be adjusted or fully customised to match your style.",
        ],
        buttons: [
            "Check more",
            "+351 935 124 260"
        ]
    },
    coasteering: {
        title: "Coasteering - A Sea of Emotions",
        paragraphs: [
            "Coasteering is an emerging activity in Madeira Island. This activity consists in following a path along the coast line, swimming, climbing, walking and jumping into the water.",
            "This activity is done in Ponta de São Lourenço, of the most beautifull landscapes of Madeira with incredible spots.",
            "From here it goes to the eastern tip of the Island, exploring the impressively coast on different ways: swimming, climbing, walking, jumping into the water.",
            "The tour is accompanied by experienced guides, the necessary equipment is provided."
        ],
        buttons: [
            "Book now",
            "+351 935 124 260"
        ]
    },
    activities: {
        title: (<>Explore the best Outdoor <span>Experiences</span> in Madeira Island </>),
        button: "view more",
        items: [
            { title: 'Explore with excitement', subtitle: "canyoning", description: "The island of Madeira is now considered one of the best places for Canyoning on the World. On breathtaking tours through the crystal clear waters of Madeira's numerous rivers, you can explore the pristine and unspoilt interior of the island." },
            { title: 'A sea of emotions', subtitle: "coasteering", description: "Walking, swimming, climbing, rappelling and jumping into water: all this in a single activity, coasteering in Madeira which, amid lots of adventure and adrenalin, will show you the natural wonders of the island." },
            { title: 'Explore Madeira in a way that is truly yours', subtitle: "jeep", description: "Discover the Island of Madeira in the most authentic and exclusive way – aboard a private 4x4 Jeep, guided by passionate local experts who will reveal to you the island’s hidden treasures, breathtaking landscapes, and cultural heritage." },
            { title: 'The best hiking experiences in Madeira Island', subtitle: "hiking", description: "In our Madeira walking tours we organize everything including transfers. You enjoy the daily hiking tours to the fullest. We will take you to places that no GPS device knows and that are not to be found in your guidebook" },
            { title: 'Meet the island with excitement', subtitle: "biking", description: "Madeira Island is a paradise for Mountain Biking. Here you can  find fantastic trails from mountain to sea level! Its famous mild  weather makes biking in Madeira enjoyable all year round." }
        ]
    },
    discount: {
        title: "Reservation opportunity",
        paragraph: "Unmissable discounts on all activities booked online",
        button: "Book now"
    },
    family: {
        paragraph: "Take advantage of our family pack for all bookings of more than 4 participants and create unforgettable memories for everyone",
        button: "Book now"
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
                    <LinkImg src='/image/homepage/instagram_arrow.svg' />
                </LinkContainer>
            </>),
    },
    faq: {
        terms: (<>Do you have further questions? Check our
            <Link to="/terms"> terms and conditions</Link></>),
        title: "Frequently asked questions",
        subtitle: "Here are the questions most people ask regarding Be Local. If none of these interest you, contact us for additional information",
        questions: [
            {
                question: "What is included in the tours?",
                answer: [
                    (<ul>
                        <li>Full Experience</li>
                        <li>Safety Insurance (According to Portuguese legislation).</li>
                        <li>Free Photos and Videos of the Activity</li>
                        <li>All the gear (Certified Technical Gear: Neoprene suit; Canyoning Shoes; Neoprene socks; Helmet; Harness and lifejacket if necessary).</li>
                        <li>Certificate Guides</li>
                        <li>Snack (Chocolate)</li>
                        <li>Transfer from/to Hotel Funchal (other areas on request, an extra charge may apply)</li>
                        <li>In case you don’t need a pickup, you can get a 10% Discount. (We send the coordinates from the place to go directly to the meeting point.)</li>
                    </ul>),
                    "If you need help or need further information, please feel free to contact us on WhatsApp.",
                    "Reservations department: WhatsApp: (+ 351) 935124260"
                ]
            },
            {
                question: "What is the minimum and maximum age to participate in a Canyoning or Coasteering activity?",
                answer: [
                    "For Canyoning or Coasteering activities, the minimum age is 7 years. The maximum age is 75 years.",
                ]
            },
            {
                question: "What if I don't feel comfortable jumping?",
                answer: [
                    "Jumps are not mandatory and we always have alternatives (we can put a rope down to rappel or sometimes we have an alternative path along the watercourse where we can see others jumping without having to do so."
                ]
            },
            {
                question: "What happens in case of bad weather?",
                answer: [
                    "In case of bad weather, the activity may be canceled or scheduled for another specific date. Regarding the cancellation due to weather, it is always decided and evaluated by our team."
                ]
            },
            {
                question: "How can I cancel an activity?",
                answer: [
                    "In order to cancel an activity, prior notice must be given, either by email or telephone. To be refunded, cancellation must be made within 24 hours."
                ]
            },
        ],
    }
} 