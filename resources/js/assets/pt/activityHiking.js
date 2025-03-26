export const text = {
    title: "caminhada",
    subtitle: (<>Conheça a <span>ilha</span> com entusiasmo</>),
    information: [
        "Surpreenda-se a cada passo com o cenário exuberante deste arquipélago.",
        "Nos nossos passeios a pé pela Madeira organizamos tudo, incluindo os transfers. Aproveite ao máximo os passeios diários de caminhada.",
        "Levaremos você a lugares que nenhum aparelho de GPS conhece e que não estão no seu guia"
    ],
    levels: {
        titles: ['Detalhes', "Resumo"],
        title: "activities",
        subtitle: (<>As nossas <span>caminhadas</span> na Ilha da Madeira</>),
        items: [
            { index: 7, visible: 1, price: "60€", title: "", subtitle: "PR 8 - Ponta de São Lourenço", paragraphs: ["Esta trilha de 3 km (+ 3 km de volta) levará você a descobrir a ponta leste da ilha, com vistas panorâmicas dos lados norte e sul."], from: 60, images: ["saolourenco_01", "saolourenco_02", "saolourenco_03"] },
            { index: 5, visible: 1, price: "60€", title: "", subtitle: "PR 6 - Levada das 25 Fontes", paragraphs: ["A Levada das 25 Fontes dá-lhe a oportunidade de descobrir a magnífica paisagem natural criada pelas águas que descem do Paul da Serra."], from: 60, images: ["25fontes_01", "25fontes_02", "25fontes_03"] },
            { index: 6, visible: 1, price: "60€", title: "", subtitle: "PR 1 - Vereda do Areeiro", paragraphs: ["PR1 Vereda do Areeiro é um percurso que liga três pontos emblemáticos da Madeira, os picos mais altos da ilha."], from: 60, images: ["picos_01", "picos_02", "picos_03"] },
        ],
        descriptions: [
            "PR 8 - Vereda da Ponta de São Lourenço é um percurso de dificuldade moderada, com uma duração estimada de 2:30 horas, que percorre a península com o mesmo nome.",
            "A Levada das 25 Fontes permite-lhe descobrir uma envolvente natural soberba, criada pelas águas que descem do Paul da Serra e que aqui emergem graças a 25 nascentes de água.",
            "Tem início no Pico do Areeiro (1818 m), atravessa o Pico das Torres (1851 m) e termina no Pico Ruivo (1862 m). A Vereda do Areeiro é um percurso de 7 km de dificuldade moderada e tem uma duração de 3:30 horas, percorrendo parte do Maciço Montanhoso Central (área integrada na Rede Natura 2000).",
        ],
        summary: [
            [],
            ["Situada no coração da densa selva que rodeia o Rabacal, a Levada das 25 Fontes mereceu merecidamente a sua reputação como a melhor caminhada de Levada da Madeira."],
            ["Ao longo do percurso, que começa no miradouro do Pico do Areeiro, passará por túneis escavados nos tufos vulcânicos - que costumavam abrigar gado e pastores - e encostas íngremes."],
        ],
        details: {
            titles: ["DIFICULDADE", "DISTÂNCIA", "DURAÇÃO", "INÍCIO/FIM", "MAX./MIN. ALTITUDE", "PONTO DE ENCONTRO"],
            items: [
                ["Moderada", "3km (6km ida e volta)", "2:30hrs", "Baía d'Abra / Casa do Sardinha", "126 m / 23 m", "Funchal, Pestana CR7 Hotel"],
                ["Moderada", "4.3km (8.6km ida e volta)", "3hrs", "Rabaçal (E.R. 105) / 25 Fontes", "1288 m / 964 m", "Funchal, Pestana CR7 Hotel"],
                ["Moderada", "6.1 km (VW) | 7km (VE)", "3:30hrs", "Pico do Areeiro Viewpoint / Pico Ruivo", "1857 m / 1491 m", "Funchal, Pestana CR7 Hotel"],
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
    section: "Todas as informações necessárias relativas às Caminhadas",
    includes: [
        "Snack",
        "Guias certificados",
        "Fotos e vídeos da atividade",
        "Seguro (acidentes pessoais e responsabilidade civil)"
    ],
    activities: {
        title: "Rotas",
        items: [
            "Ponta de São Lourenço",
            "Pico do Areeiro – Pico Ruivo",
            "Levada das 25 Fontes",
        ],
    },
    gallery: {
        subtitle: "galeria",
        title: (<><span>Aventuras</span> fantásticas que não irás esquecer</>),
    },
    form: {
        name: {
            label: "Nome *"
        },
        email: {
            label: "Email *"
        },
        phone: {
            label: "Número telemóvel *"
        },
        address: {
            label: "Morada de recolha *"
        },
        participants: {
            label: "Nº de participantes *",
        },
    },
} 