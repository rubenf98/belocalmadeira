const imagePath = "/images/activities/coasteering/";

export const text = {
    title: "coasteering",
    subtitle: (<>A sea of <span>emotions</span></>),
    booking: {
        description: {
            1: [
                "Experience Madeira’s coastline in its most authentic, wild and untouched form.",
                "Our Coasteering adventure combines ocean swimming, coastal traversing and optional cliff jumps with the exploration of dramatic volcanic formations shaped by the Atlantic over millions of years. ",
                "This experience is done in Ponta de São Lourenço, of the most beautifull landscapes of Madeira with incredible spots.",
                "Designed and led by certified local guides, this experience blends adventure, safety and natural beauty into one of the island’s most remarkable outdoor activities."
            ]
        },
        additional: {
            1: {
                titles: ["Included"],
                items: [
                    [
                        "Transfers.",
                        "Complete high-quality equipment (incl. helmet, wetsuit, neoprene socks, harness, shoes)",
                        "Free pictures + snack",
                        "Certified guides",
                        "Insurance (personal accidents and civil liability)"
                    ],

                ]
            },
        },
        titles: ['Details', "Summary"],
        details: {
            titles: ["SENSATION LEVEL", "TOTAL DURATION", "MEETING POINT", "JUMPS"],
            items: {
                1: ["Not experience required", "3-4hrs", "Funchal, Pestana CR7 Hotel", "Optional"],
            },
        },
        images: {
            1: [imagePath + "18.jpg", imagePath + "03.jpg", imagePath + "20.jpg"],
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
    }
} 