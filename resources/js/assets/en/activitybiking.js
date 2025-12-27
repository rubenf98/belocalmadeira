const imagePath = "/images/activities/biking/";

export const text = {
    title: "biking",
    subtitle: (<>Meet the <span>island</span> with excitement</>),
    booking: {
        description: {
            1: [
                "Adventure, nature, and world-class trails from the mountains to the ocean.",
                "Madeira is one of the top mountain biking destinations in the world. The island combines epic landscapes, perfect year-round weather, and an impressive network of trails suitable for all levels. From technical descents through the Laurissilva forest to panoramic coastal rides, Madeira offers endless variety for every rider.",
            ]
        },
        titles: ['Details', "Summary"],
        details: {
            titles: ["SENSATION LEVEL", "FITNESS LEVEL", "TOTAL DURATION", "DISTANCE", "MEETING POINT"],
            items: {
                1: ["Riders in good health with comfortable bike skills", "Active person", "3-4hrs", "10 to 50 KM", "Funchal, Pestana CR7 Hotel"],
            },
        },
        additional: {
            1: {
                titles: ["🚵‍♂️ What to Expect", "📍Types of Tours", "What's Included"],
                items: [
                    [
                        (<>Diverse Terrain <ul><li>Singletracks, forest trails, technical sections, fast fire roads, and natural downhill lines.</li></ul></>),
                        (<>Breathtaking Scenery <ul><li>Deep valleys, dramatic peaks, UNESCO forests, and ocean viewpoints.</li></ul></>),
                        (<>Ideal Weather <ul><li>Mild temperatures all year make Madeira perfect for riding anytime.</li></ul></>),
                        (<>Local Expert Guides <ul><li>Certified local riders who know the island’s best lines, conditions, and safety.</li></ul></>),
                        (<>Fully Customisable Routes <ul><li>From beginner-friendly tours to advanced enduro experiences — always tailored to your pace and skill.</li></ul></>),
                    ],
                    [
                        (<>Beginner / Scenic Ride <ul><li>Easy trails with beautiful viewpoints.</li><li>Distance: 10-20 KM</li></ul></>),
                        (<>Intermediate Trail Experience <ul><li>A mix of flow, speed, and light technical riding.</li><li>Distance: 20-40 KM</li></ul></>),
                        (<>Advanced / Enduro Lines <ul><li>Natural downhill, rocky sections, long descents, and adrenaline.</li><li>Distance: 30-50 KM</li></ul></>),
                        (<>E-Bike Experience (Optional) <ul><li>Perfect for covering more distance with less effort.</li></ul></>),
                    ],
                    [
                        "Hardtail bike (upgrade to full-suspension available)",
                        "Helmet and safety gear",
                        "Certified local guide",
                        "Transfers (Pick-up Funchal Hotel)",
                        "Insurance & official licenses",
                        "Water + photo stops + technical briefing",
                    ]

                ]
            },
        },
        images: {
            1: [imagePath + "08.jpg", imagePath + "10.jpg", imagePath + "13.jpg", imagePath + "16.jpg", imagePath + "14.jpg", imagePath + "12.jpg"],
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
    },
    gallery: {
        subtitle: "gallery",
        title: (<>Amazing <span>adventures</span> that you'll never forget</>),
        images: [
            ["biking/10", "biking/04", "biking/08"],
            ["biking/02", "biking/05"],
            ["biking/03", "biking/06"],
        ]
    }
} 