export const text = {
    close: "close",
    pages: [
        {
            title: "Book your Madeira Island experience right here!",
            warning: "All private activities are 175€ per person.",
            family: "All reservations with 4 or more participants will apply a 10% family discount on checkout.",
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
                coupon: {
                    placeholder: "Promo Code"
                },
            },
        },
        {
            title: "Select the date for your activity"
        },
        {
            title: "Fill the details of everyone on the activity",
            subtitle: "Participant",
            form: {
                person: {
                    name: {
                        placeholder: "Name",
                    },
                    bday: {
                        placeholder: "Birthday"
                    },
                    gender: {
                        placeholder: "Gender",
                        options: [
                            "male", "female"
                        ],
                    },
                    height: {
                        placeholder: "Height"
                    },
                    weight: {
                        placeholder: "Weight"
                    },
                    shoe: {
                        placeholder: "Show size"
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
                recipient: "Recipient name",
                private: "Private experience",
                privateAnswer: ['No', 'Yes'],
                date: "Date of activity",
                created_at: "Reserved at",
                participant: "Participant",
                participants: "Number of participants",
                price: "Price"
            },
        },
        {
            title: "Are you booking for yourself or are you gifting someone a be local voucher?",
            options: ["I'm booking for myself", "I'm gifting someone else"]
        },
        {
            title: "Explore our activities and gift your Madeira Island experience right here!",
            family: "All reservations with 4 or more participants will apply a 10% family discount on checkout.",
            warning: "We will contact you after the reservation regarding the date of the activity",
            form: {
                name: {
                    placeholder: "Your name *"
                },
                email: {
                    placeholder: "Your email *"
                },
                phone: {
                    placeholder: "Your phone number *"
                },
                indicative: {
                    placeholder: "+351"
                },
                address: {
                    placeholder: "Recipient name *"
                },
                activity: {
                    placeholder: "Activity *"
                },
                participants: {
                    placeholder: "Number of participants *",
                },
            },
        },
    ],
    submit: "CHECKOUT",
    success: {
        message: "Your reservation has started!",
        description: "Thank you for joining us, please confirm on your email the reservation"
    },
    error: {
        message: "Something unexpected happened",
    },
    popconfirm: {
        yes: "OK",
        no: "Cancel",
        message: "Are you sure you want to cancel? You have unsaved changes that will be lost."
    },
    controls: {
        next: "next",
        submit: "submit"
    }
} 