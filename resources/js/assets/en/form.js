export const text = {
    close: "close",
    pages: [
        {
            title: "Explore our activities and book your Madeira Island experience right here!",
            warning: "Private canyoning, hiking, biking, and coasteering prices are 120€.",
            discount: "All reservations made online will apply a 10% discount on checkout.",
            family: "All reservations with 4 or more participants will apply a 15% family discount on checkout.",
            form: {
                name: {
                    placeholder: "Name *"
                },
                email: {
                    placeholder: "Email *"
                },
                phone: {
                    placeholder: "Phone Number *"
                },
                indicative: {
                    placeholder: "+351"
                },
                address: {
                    placeholder: "Pickup Address *"
                },
                activity: {
                    placeholder: "Activity *"
                },
                private: {
                    placeholder: "Private experience",
                },
                participants: {
                    placeholder: "Number of participants *",
                },
            },
        },
        {
            title: "Select the date for your activity from the available options on the calendar"
        },
        {
            title: "Fill the details of everyone that will participate on the activity",
            subtitle: "Participant",
            form: {
                person: {
                    bday: {
                        placeholder: "Aniversário"
                    },
                    gender: {
                        placeholder: "Sexo",
                        options: [
                            "male", "female"
                        ],
                    },
                    height: {
                        placeholder: "Altura"
                    },
                    weight: {
                        placeholder: "Peso"
                    },
                    shoe: {
                        placeholder: "Tamanho sapato"
                    },
                },
            },
        },
        {
            title: "Reservation details",
            participantsTitle: "Participants details",
            details: {
                activity: "Activity",
                name: "Reservation name",
                email: "Email",
                phone: "Phone number",
                address: "Pickup address",
                private: "Private experience",
                privateAnswer: ['No', 'Yes'],
                date: "Date of activity",
                created_at: "Reserved at",
                participant: "Participant",
                participants: "Number of participants",
                price: "Price"
            },
        }
    ],
    submit: "CHECKOUT",
    success: {
        message: "Your reservation has started!",
        description: "Thank you for joining us, please confirm on your email the reservation"
    },
    error: {
        message: "Something unexpected happened",
    }
} 