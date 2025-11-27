const imagePath = "/images/activities/coasteering/";

export const text = {
    title: "coasteering",
    subtitle: (<>Um mar de <span>emoções</span></>),
    booking: {
        description: {
            1: [
                "Viva a costa da Madeira na sua forma mais autêntica, selvagem e intocada.",
                "A nossa aventura de Coasteering combina natação no oceano, progressão ao longo da costa e saltos opcionais, explorando formações vulcânicas dramáticas esculpidas pelo Atlântico ao longo de milhões de anos.",
                "Esta experiência decorre na Ponta de São Lourenço, uma das paisagens mais belas da Madeira, repleta de locais verdadeiramente impressionantes.",
                "Desenhada e guiada por profissionais locais certificados, esta atividade combina aventura, segurança e beleza natural numa das experiências ao ar livre mais memoráveis da ilha."
            ]
        },
        additional: {
            1: {
                titles: ["Incluído"],
                items: [
                    [
                        "Transfers.",
                        "Equipamento completo de alta qualidade (incl. capacete, fato isotérmico, meias de neoprene, arnês, sapatilhas)",
                        "Fotografias gratuitas + snack",
                        "Guias certificados",
                        "Seguro (acidentes pessoais e responsabilidade civil)"
                    ],
                ]
            },
        },
        titles: ['Detalhes', "Resumo"],
        details: {
            titles: ["NÍVEL DE SENSAÇÃO", "DURAÇÃO TOTAL", "PONTO DE ENCONTRO", "SALTOS"],
            items: {
                1: ["Não é necessária experiência", "3-4h", "Funchal, Hotel Pestana CR7", "Opcionais"],
            },
        },
        images: {
            1: [imagePath + "18.jpg", imagePath + "03.jpg", imagePath + "20.jpg"],
        },
        form: {
            name: {
                label: "Nome *",
            },
            email: {
                label: "Email *"
            },
            phone: {
                label: "Telemóvel *"
            },
            address: {
                label: "Morada para Pickup *"
            },
            participants: {
                label: "Nº de participantes *",
            },
        },
    },
    gallery: {
        subtitle: "galeria",
        title: (<>Aventuras <span>incríveis</span> que nunca irá esquecer</>),
    }
}
