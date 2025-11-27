const imagePath = "/images/activities/biking/";

export const text = {
    title: "biking",
    subtitle: (<>Meet the <span>island</span> with excitement</>),
    booking: {
        description: {
            1: [
                "Madeira Island is a paradise for Mountain Biking. Here you can find fantastic trails from mountain to sea level! Its famous mild weather makes biking in Madeira enjoyable all year round.",
                "The activity includes hardtail bike and equipment, experienced guides, transport, insurance, and licenses.",
                "RNAAT 1093"
            ]
        },
        titles: ['Details', "Summary"],
        details: {
            titles: ["SENSATION LEVEL", "FITNESS LEVEL", "TOTAL DURATION", "DISTANCE", "MEETING POINT", "ABSEILING HEIGHT"],
            items: {
                1: ["Riders in good health with comfortable bike skills", "Active person", "3-4hrs", "30 to 50 KM", "Funchal, Pestana CR7 Hotel", "15m"],
            },
        },
        images: {
            1: [imagePath + "08.jpg", imagePath + "10.jpg", imagePath + "06.jpg"],
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