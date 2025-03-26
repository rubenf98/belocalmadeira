export const text = {
    title: "hiking",
    subtitle: (<>Meet the <span>island</span> with excitement</>),
    information: [
        "Surprise yourself at every step with the exuberant scenery of this archipelago.",
        "In our Madeira walking tours we organize everything including transfers. You enjoy the daily hiking tours to the fullest. ",
        "We will take you to places that no GPS device knows and that are not to be found in your guidebook"
    ],
    section: "All necessary information regarding hiking",
    includes: [
        "Snack",
        "Certified Guides",
        "Photos and videos of the activity",
        "Insurance (personal accidents and civil liability)"
    ],

    levels: {
        titles: ['Details', "Summary"],
        title: "activities",
        subtitle: (<>Our hiking <span>experiences</span> in Madeira Island</>),
        items: [
            { index: 7, visible: 1, price: "60€", title: "", subtitle: "PR 8 - Ponta de São Lourenço", paragraphs: ["This 3 km trail (+ 3 km return) will take you to discover the eastern tip of the island, with panoramic views over the north and south sides."], from: 60, images: ["saolourenco_01", "saolourenco_02", "saolourenco_03"] },
            { index: 5, visible: 1, price: "60€", title: "", subtitle: "PR 6 - Levada das 25 Fontes", paragraphs: ["Levada das 25 Fontes gives you the chance to discover the superb natural surroundings, created by the waters that come down from Paul da Serra."], from: 60, images: ["25fontes_01", "25fontes_02", "25fontes_03"] },
            { index: 6, visible: 1, price: "60€", title: "", subtitle: "PR 1 - Vereda do Areeiro", paragraphs: ["PR1 Vereda do Areeiro is a trail connecting three iconic spots in Madeira, the highest peaks of the island."], from: 60, images: ["picos_01", "picos_02", "picos_03"] },
        ],
        descriptions: [
            "PR 8 - Vereda da Ponta de São Lourenço is a trail of moderate difficulty, with an estimated duration of 2:30 hours, which goes along the peninsula with the same name.",
            "Levada das 25 Fontes gives you the chance to discover the superb natural surroundings, created by the waters that come down from Paul da Serra and which emerge here thanks to 25 water springs.",
            "It begins at Pico do Areeiro(1818 m), crosses Pico das Torres(1851 m) and ends at Pico Ruivo(1862 m).Vereda do Areeiro is a 7 km trail of moderate difficulty and takes 3: 30 hours, covering part of the Central Mountain Massif(an area integrated in the Natura 2000 Network).",
        ],
        summary: [
            [],
            ["Situated in the heart of the dense jungle that surrounds Rabacal, the Levada das 25 Fontes has righteously earned its reputation as Madeira’s best Levada walk."],
            ["Along the trail, which begins at the Pico do Areeiro viewpoint, you will pass through tunnels dug out of the volcanic tufts - which used to shelter cattle and shepherds - and steep slopes."],
        ],
        details: {
            titles: ["DIFFICULTY", "DISTANCE", "TOTAL DURATION", "START/END", "MAX./MIN. ALTITUDE", "MEETING POINT"],
            items: [
                ["Moderate", "3km (6km round trip)", "2:30hrs", "Baía d'Abra / Casa do Sardinha", "126 m / 23 m", "Funchal, Pestana CR7 Hotel"],
                ["Moderate", "4.3km (8.6km round trip)", "3hrs", "Rabaçal (E.R. 105) / 25 Fontes", "1288 m / 964 m", "Funchal, Pestana CR7 Hotel"],
                ["Moderate", "6.1 km (VW) | 7km (VE)", "3:30hrs", "Pico do Areeiro Viewpoint / Pico Ruivo", "1857 m / 1491 m", "Funchal, Pestana CR7 Hotel"],
            ],
        },
        itinerary: [
            ["09:00 - Meeting Point", "Gear up and briefing", "Approximation: 10 - 20 mins", "Route: 3 - 4 hours", "Jumps: Optional", "Rappel: Several rappels (4x)", "Highest waterfall: Up to 10/12 meters", "Waterslides (2x)", "Return (5 - 25 mins)", "14:00 - End"],
            ["09:00 - Meeting Point", "Gear up and briefing", "Approximation: 10 - 20 mins", "Route: 3 - 4 hours", "Jumps: Optional", "Rappel: Several rappels (4x)", "Highest waterfall: Up to 10/12 meters", "Waterslides (2x)", "Return (5 - 25 mins)", "14:00 - End"],
            ["09:00 - Meeting Point", "Gear up and briefing", "Approximation: 10 - 20 mins", "Route: 3 - 4 hours", "Jumps: Optional", "Rappel: Several rappels (6x)", "Highest waterfall: Up to 20 meters", "Return (5 - 25 mins)", "14:00 - End"],
            ["09:00 - Meeting Point", "Gear up and briefing", "Approximation: 10 - 20 mins", "Route: 3 - 4 hours", "Jumps: Optional", "Rappel: Several rappels (6x)", "Highest waterfall: Up to 20 meters", "Return (5 - 25 mins)", "14:00 - End"],
            ["08:30 - Meeting Point", "Gear up and briefing", "Approximation: 10 mins", "Route: 3 - 4 hours", "Jumps: Optional", "Rappel: Several rappels (10x)", "Highest waterfall: Up to 55 meters", "Return (10 - 15 mins)", "14:00 - End"],
        ],
        fields: [
            "Location", "Total duration", "Time in the canyon", "Abseiling height", "Jump height (optional)"
        ]
    },
    activities: {
        title: "Routes",
        items: [
            "Ponta de São Lourenço",
            "Pico do Areeiro – Pico Ruivo",
            "Levada das 25 Fontes",
        ],
    },
    gallery: {
        subtitle: "gallery",
        title: (<>Amazing <span>adventures</span> that you'll never forget</>),
    },
    form: {
        name: {
            label: "Name *",

        },
        email: {
            label: "Email *"
        },
        phone: {
            label: "Phone Number *"
        },
        address: {
            label: "Pickup Address *"
        },
        participants: {
            label: "Nº of participants *",
        },
    },
} 