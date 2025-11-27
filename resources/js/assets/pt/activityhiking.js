const imagePath = "/images/activities/hiking/";

export const text = {
    level_dictionary: {
        1: "Iniciante",
        2: "Intermédio",
        3: "Avançado",
    },
    booking: {
        titles: ["Detalhes", "Resumo"],

        images: {
            8: [imagePath + "saolourenco_02.jpg", imagePath + "saolourenco_03.jpg"],
            6: [imagePath + "25fontes_02.jpg", imagePath + "25fontes_03.jpg"],
            7: [imagePath + "picos_02.jpg", imagePath + "picos_03.jpg"],
        },
        description: {
            8: [
                "Este trilho de 3 km (+ 3 km de regresso) leva-te a descobrir a ponta oriental da ilha, com vistas panorâmicas sobre o lado norte e sul.",
                "O PR8 - Vereda da Ponta de São Lourenço é um percurso de dificuldade moderada, com duração estimada de 2h30, que percorre a península com o mesmo nome.",
            ],
            6: [
                "A Levada das 25 Fontes oferece-te a oportunidade de descobrir uma paisagem natural deslumbrante, criada pelas águas que descem do Paul da Serra e que aqui emergem através de 25 nascentes.",
                "Situada no coração da densa floresta que envolve o Rabaçal, a Levada das 25 Fontes ganhou merecidamente a reputação de ser uma das melhores levadas da Madeira.",
            ],
            7: [
                "O PR1 Vereda do Areeiro é um trilho que liga três locais icónicos da Madeira — os picos mais altos da ilha.",
                "Começa no Pico do Areeiro (1818 m), atravessa o Pico das Torres (1851 m) e termina no Pico Ruivo (1862 m). A Vereda do Areeiro é um percurso de 7 km, de dificuldade moderada, com duração aproximada de 3h30, que atravessa parte do Maciço Montanhoso Central (uma área integrada na Rede Natura 2000).",
                "Ao longo do percurso, que se inicia no miradouro do Pico do Areeiro, passarás por túneis escavados em tufo vulcânico — outrora abrigo para pastores e gado — e por encostas íngremes com vistas de cortar a respiração.",
            ],
        },

        details: {
            titles: ["DIFICULDADE", "DISTÂNCIA", "DURAÇÃO TOTAL", "INÍCIO/FIM", "ALTITUDE MÁX./MÍN.", "PONTO DE ENCONTRO"],
            items: {
                8: ["Moderada", "3 km (6 km ida e volta)", "2h30", "Baía d'Abra / Casa do Sardinha", "126 m / 23 m", "Funchal, Hotel Pestana CR7"],
                6: ["Moderada", "4,3 km (8,6 km ida e volta)", "3h", "Rabaçal (E.R. 105) / 25 Fontes", "1288 m / 964 m", "Funchal, Hotel Pestana CR7"],
                7: ["Moderada", "6,1 km (VW) | 7 km (VE)", "3h30", "Miradouro do Pico do Areeiro / Pico Ruivo", "1857 m / 1491 m", "Funchal, Hotel Pestana CR7"],
            },
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
            [
                "hiking/01",
                "hiking/04",
                "hiking/07",
                "hiking/10",
                "hiking/18",
            ],
            [
                "hiking/02",
                "hiking/03",
                "hiking/08",
                "hiking/11",
                "hiking/17",
            ],
            [
                "hiking/05",
                "hiking/06",
                "hiking/09",
                "hiking/12",
                "hiking/15",
            ],
        ],
    },
}
