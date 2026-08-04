const imagePath = "/images/activities/biking/";
export const text = {
    title: "biking",
    subtitle: (<>Descobre a <span>ilha</span> com emoção</>),
    booking: {
        description: {
            1: [
                "Aventura, natureza e trilhos de classe mundial, das montanhas até ao oceano.",
                "A Madeira é um dos principais destinos de mountain bike do mundo. A ilha combina paisagens épicas, clima perfeito durante todo o ano e uma impressionante rede de trilhos adequada para todos os níveis. Desde descidas técnicas pela floresta Laurissilva até passeios panorâmicos pela costa, a Madeira oferece variedade infinita para qualquer ciclista."
            ]
        },
        titles: ["Detalhes", "Resumo"],
        details: {
            titles: ["NÍVEL DE SENSAÇÃO", "NÍVEL DE CONDIÇÃO FÍSICA", "DURAÇÃO TOTAL", "DISTÂNCIA", "PONTO DE ENCONTRO"],
            items: {
                1: ["Ciclistas com boa saúde e à vontade em bicicleta", "Pessoa ativa", "3-4 horas", "10 a 50 KM", "Funchal, Hotel Pestana CR7"],
            },
        },
        additional: {
            1: {
                titles: ["🚵‍♂️ O que Esperar", "📍Tipos de Tours", "O que Está Incluído"],
                items: [
                    [
                        (<>Terreno Diverso <ul><li>Singletracks, trilhos florestais, secções técnicas, estradões rápidos e linhas naturais de downhill.</li></ul></>),
                        (<>Paisagens Deslumbrantes <ul><li>Vales profundos, picos dramáticos, florestas da UNESCO e miradouros com vista para o oceano.</li></ul></>),
                        (<>Clima Ideal <ul><li>Temperaturas amenas todo o ano tornam a Madeira perfeita para pedalar em qualquer altura.</li></ul></>),
                        (<>Guias Locais Especializados <ul><li>Ciclistas locais certificados que conhecem as melhores linhas, condições e segurança da ilha.</li></ul></>),
                        (<>Rotas Totalmente Personalizáveis <ul><li>Desde tours para principiantes até experiências avançadas de enduro — sempre ajustadas ao teu ritmo e nível.</li></ul></>),
                    ],
                    [
                        (<>Passeio Iniciante / Panorâmico <ul><li>Trilhos fáceis com belos miradouros.</li><li>Distância: 10–20 KM</li></ul></>),
                        (<>Experiência de Trilho Intermédio <ul><li>Um misto de fluidez, velocidade e técnica ligeira.</li><li>Distância: 20–40 KM</li></ul></>),
                        (<>Linhas Avançadas / Enduro <ul><li>Downhill natural, secções rochosas, descidas longas e adrenalina.</li><li>Distância: 30–50 KM</li></ul></>),
                        (<>Experiência E-Bike (Opcional) <ul><li>Perfeito para percorrer mais distância com menos esforço.</li></ul></>),
                    ],
                    [
                        "Bicicleta hardtail (upgrade para full-suspension disponível)",
                        "Capacete e equipamento de segurança",
                        "Guia local certificado",
                        "Transfers (Pick-up Hotel no Funchal)",
                        "Seguro e licenças oficiais",
                        "Água + paragens para fotos + briefing técnico"
                    ]
                ]
            }
        },

        images: {
            1: [imagePath + "08.jpg", imagePath + "10.jpg", imagePath + "13.jpg", imagePath + "16.jpg", imagePath + "14.jpg", imagePath + "12.jpg"],
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
                label: "Morada *",
            },
            meeting_point: {
                label: "Ponto de encontro *",
                custom_option: "A sua morada (pendente aprovação)"
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
