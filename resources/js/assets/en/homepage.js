import { error } from 'laravel-mix/src/Log';
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
    newsletter: {
        title: "Join our newsletters",
        paragraph: "Subscribe our newsletter with promotions, tips and much more for you to enjoy Madeira Island in the best way possible.",
        emailPlaceholder: "Enter your email",
        phonePlaceholder: "Enter your phone number",
        feedback: "Thank you for subscribing!",
        feedbackInstruction: "You have successfully subscribed to our newsletter.",
        error: "There was an error subscribing.",
        errorInstruction: "An error occurred while processing your subscription. Please try again later."
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
                    <LinkImg src='/icon/instagram_arrow.svg' />
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
                        <li>Safety Insurance (according to Portuguese legislation)</li>
                        <li>Free Photos & Videos of the activity</li>
                        <li>All Technical Gear Included:</li>
                        <ul>
                            <li>Neoprene suit</li>
                            <li>Canyoning shoes</li>
                            <li>Neoprene socks</li>
                            <li>Helmet</li>
                            <li>Harness</li>
                            <li>Life Jacket (if required)</li>
                        </ul>
                        <li>Certified & Experienced Guides</li>
                        <li>Transfer from/to Funchal</li>
                        <ul>
                            <li>Other areas available upon request (extra charge may apply)</li>
                        </ul>
                        <li>10% Discount if you don’t need pickup</li>
                        <ul>
                            <li>We send the GPS coordinates for the meeting point.</li>
                        </ul>
                    </ul>),
                    "For additional information or assistance, our team is available to support you at any time.",
                    (<div>Reservations department: <br />WhatsApp: <a href="https://api.whatsapp.com/send?l=en&phone=351935124260"
                        target="_blank">(+ 351) 935 124 260</a> </div>)
                ]
            },
            {
                question: "What is the minimum and maximum age to participate in a Canyoning or Coasteering activity?",
                answer: [
                    "Our activities are designed to be accessible, enjoyable, and safe for participants of various ages.",
                    "For both Canyoning and Coasteering, the minimum age requirement is 7 years old. Children must be accompanied by a parent or legal guardian and should be comfortable in the water.",
                    "The maximum recommended age is 65 years old, as these activities involve physical effort, uneven terrain, and water obstacles. However, participation also depends on each individual’s physical condition, mobility, and health status.",
                    "Before confirming a booking, we always recommend that participants:",
                    (<ul>
                        <li>Are in good general health and capable of moderate physical activity</li>
                        <li>Have no medical restrictions that could compromise safety</li>
                        <li>Inform our team of any relevant health conditions beforehand</li>
                    </ul>),
                    "Our guides are certified professionals and will assess each situation individually to ensure the highest level of safety and comfort.",
                    "If you have any doubts regarding age suitability or specific physical conditions, our team is available to assist you with personalised guidance.",
                    "For additional information or assistance, our team is available to support you at any time.",
                    (<div>Reservations department: <br />WhatsApp: <a href="https://api.whatsapp.com/send?l=en&phone=351935124260"
                        target="_blank">(+ 351) 935 124 260</a> </div>)
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
                    "Safety is our top priority. For this reason, all outdoor activities depend on weather and environmental conditions.",
                    "In the event of adverse weather, our certified guides will assess the situation and decide whether the activity can proceed safely. If conditions are not suitable, one of the following solutions will be offered:",
                    (<ul>
                        <li>Reschedule the activity for another available date and time</li>
                        <li>Change the activity to a safer location or alternative experience</li>
                        <li>Cancel the activity if no safe option is possible</li>
                    </ul>),
                    "All decisions related to weather are made on the same day, based on real-time evaluations of water levels, wind, rain, sea conditions, and general safety criteria.",
                    "If the activity is canceled due to weather and rescheduling is not possible, you will be fully refunded.",
                    "Your safety and experience quality will always come first."
                ]
            },
            {
                question: "How can I cancel an activity?",
                answer: [
                    "To cancel an activity, you must provide prior notice through email or telephone.",
                    (<ul>
                        <li>Cancellations made at least 24 hours before the scheduled start time are eligible for a full refund.</li>
                        <li>Cancellations made within 24 hours of the activity, or failure to attend, are not eligible for a refund.</li>
                        <li>Any modification of the booking (date, number of participants or pick-up details) is also subject to availability and must be requested in advance.</li>
                    </ul>),
                    "We recommend that all cancellation or modification requests be submitted as early as possible to ensure proper processing."
                ]
            },
        ],
    }
} 