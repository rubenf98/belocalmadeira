const imagePath = "/images/activities/biking/";
export const text = {
    title: "biking",
    subtitle: (<>Descobre a <span>ilha</span> com emoção</>),
    booking: {
        description: {
            1: [
                "A Ilha da Madeira é um paraíso para o Mountain Biking. Aqui encontrarás trilhos fantásticos desde a montanha até ao nível do mar! O seu clima ameno e famoso torna o ciclismo na Madeira agradável durante todo o ano.",
                "A atividade inclui bicicleta hardtail e equipamento, guias experientes, transporte, seguro e licenças.",
                "RNAAT 1093"
            ]
        },
        titles: ["Detalhes", "Resumo"],
        details: {
            titles: ["NÍVEL DE SENSAÇÃO", "NÍVEL DE CONDIÇÃO FÍSICA", "DURAÇÃO TOTAL", "DISTÂNCIA", "PONTO DE ENCONTRO", "ALTURA DE RAPEL"],
            items: {
                1: ["Ciclistas com boa saúde e à vontade em bicicleta", "Pessoa ativa", "3-4 horas", "30 a 50 KM", "Funchal, Hotel Pestana CR7", "15 m"],
            },
        },
        images: {
            1: [imagePath + "08.jpg", imagePath + "10.jpg", imagePath + "06.jpg"],
        },
        form: {
            name: {
                label: "Nome *",
            },
            email: {
                label: "Email *",
            },
            phone: {
                label: "Número de telefone *",
            },
            address: {
                label: "Morada de recolha *",
            },
            participants: {
                label: "Nº de participantes *",
            },
        },
    },
    gallery: {
        subtitle: "galeria",
        title: (<>Aventuras <span>incríveis</span> que nunca irás esquecer</>),
        images: [
            ["biking/10", "biking/04", "biking/08"],
            ["biking/02", "biking/05"],
            ["biking/03", "biking/06"],
        ]
    }
}
