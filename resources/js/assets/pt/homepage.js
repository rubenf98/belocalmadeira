import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const LinkContainer = styled.a`
    display: inline;
    position: relative;
    margin-left: 15px;
    color: black;

    &:hover {
        color: black;
    }
`;

const LinkImg = styled.img`
    position: absolute;
    bottom: -25px;
    right: -30px;
    height: 35px;
    width: auto;
    
`;

export const text = {
    header: {
        title: "Be Local Madeira",
        subtitle: "Conhece a Ilha da Madeira na perspetiva de um local."
    },
    about: {
        videoError: "O teu browser não suporta a tag de vídeo",
        titles: ["Quem é a be local", "Os melhores profisisonais para a tarefa", "A sua experiência começa agora"],
        description: [
            "Somos uma empresa local que promove aventura e experiências com a natureza na Ilha da Madeira.",
            "Temos profissionais dedicados e certificados em Canyoning, Coasteering, passeios de bicicleta e caminhadas. Desta forma irá ser acompanhado em todos os momentos.",
            "Oferecemos uma panóplia de experiências alucinantes que te irão permitir desfrutar de momentos únicos por locais fascinantes. Junte-se a nós e irá viver momentos que recordará para sempre!"
        ],
    },
    family: {
        paragraph: "Aproveita o nosso pack família para todas as reservas superiores a 4 paticipantes e cria memórias inesquecíveis para todos",
        button: "Reservar agora"
    },
    discount: {
        title: "Oportunidade de reserva",
        paragraph: "Descontos imperdíveis em todas as atividades reservadas online",
        button: "Reservar agora"
    },
    services: {
        title: "serviços",
        subtitle: (<>O que temos para te <span>oferecer</span></>),
        items: [
            {
                title: "Experiências inesquecíveis",
                description: "Criar sua experiência é totalmente colaborativo e os nossos guias estão aqui para cada etapa"
            },
            {
                title: "Equipamento de alta qualidade",
                description: "A segurança é muito importante para nós, por isso garantimos equipamentos de segurança de alta qualidade para todas as atividades"
            },
            {
                title: "Transporte",
                description: "Cuidamos dos serviços de transporte para que apenas tenha que se divertir ao máximo"
            },
            {
                title: "Fotos e vídeos da atividade",
                description: "Recorde os momentos incríveis que teve connosco e fique com recordações fantásticas da sua experiência"
            },
            {
                title: "Guias certificados",
                description: "Os nossos guias são certificados em todas as atividades que oferecemos, proporcionando a incrível aventura que procura."
            }
        ]
    },
    canyoning: {
        title: "Canyoning - Explore com excitação",
        paragraphs: [
            "A Ilha da Madeira é hoje considerada um dos melhores locais para Canyoning do Mundo.",
            "Em passeios de cortar a respiração pelas águas cristalinas dos inúmeros rios da Madeira, poderá explorar o interior intocado e intocado da ilha.",
            "O desafio consiste em atravessar ribeiros de montanha, abundantes ao longo dos trilhos de canyoning na Madeira, ultrapassando os vários obstáculos encontrados durante a descida.",
            "Não é necessária experiência prévia.",
            "RNAAT 1093"
        ],
        buttons: [
            "Reservar",
            "+351 935 124 260"
        ]
    },
    coasteering: {
        title: "Coasteering - Um Mar de Emoções",
        paragraphs: [
            "Coasteering é uma atividade emergente na Ilha da Madeira. Esta atividade consiste em seguir um caminho ao longo da linha da costa, nadar, escalar, caminhar e saltar para a água.",
            "Esta atividade é feita na Ponta de São Lourenço, uma das mais belas paisagens da Madeira com recantos incríveis.",
            "Daqui segue para a ponta oriental da Ilha, explorando a costa impressionante de diferentes formas: nadar, escalar, caminhar, saltar para a água.",
            "O passeio é acompanhado por guias experientes, sendo fornecido o equipamento necessário."
        ],
        buttons: [
            "Reservar",
            "+351 935 124 260"
        ]
    },
    feedback: {
        title: "Feedback",
        subtitle: (<>O que estão as <span>pessoas</span> a dizer sobre nós?</>),
        subsubtitle: "Feedback dos Nossos Clientes",
        viewmore: "Ver Mais",
        items: [
            { author: "Lindsey Rangel", comment: "Fabio é de longe o melhor guia que você poderia pedir. Reservamos uma caminhada e tivemos uma experiência tão fenomenal que perguntamos se ele estava disponível no dia seguinte. Felizmente para nós, ele estava. Ele fez o plano para o 2º dia e não consigo nem colocar em palavras o quão divertido e incrível foi." },
            { author: "Nessrine", comment: "Essa foi a MELHOR maneira de começar a nossa viagem à Madeira! Até agora a melhor atividade que fiz na minha vida enquanto viajava. O guia Fabio foi incrível e nos explicou muitas coisas, tirou excelentes fotos e vídeos meus e do meu amigo na atividade." },
            { author: "Charlotte Price", comment: "Uma experiência essencial enquanto estiver na Madeira !! O curso de canyoning intermediário estava repleto de rapel, zipline e slides que fizeram um dia incrível. O equipamento era todo de alta qualidade, e em combinação com a experiência das equipas, sentimo-nos incrivelmente seguros." },
            { author: "Henrike Maris", comment: "Fabio e Pedro foram os nossos guias no passeio de canyoning. Eles foram guias incríveis e o passeio foi fantástico! Sentimo-nos muito seguros e as vistas eram maravilhosas! belas fotografias. Uma experiência incrível para recordar!" },
            { author: "Maximilian Lambrecht", comment: "Canyoning com a Be Local Madeira foi definitivamente um dos nossos destaques na ilha. Os guias foram muito simpáticos, prestativos e super pacientes com os iniciantes. Os canyons da ilha são espetaculares e Be Local A Madeira é a melhor companhia para os experimentar." },
            { author: "Vanessa", comment: "Grande aventura!! Os guias eram profissionais. A vista era incrível e o equipamento também estava no ponto. Não poderia desejar uma experiência melhor! No final da viagem, fomos presenteados com um bolo local. Ótimo final de aventura." },
            { author: "Philip Schürheck", comment: "Fizemos um passeio de Canyoning incrível com o belocalmadeira! Foi super divertido e profissional ao mesmo tempo. Depois do Canyoning, também visitamos um restaurante local espontaneamente com um dos guias. Enfim, uma ótima experiência." },
            { author: "Diogo Ribeiro", comment: "Fábio do Be Local Madeira é muito profissional e atencioso. Nos deu toda a confiança, segurança e diversão que precisávamos! O canyoning (Nível 2, no Curral das Freiras) é muito variado com muito rafting, caminhadas, cascatas e mergulhos! A paisagem é de tirar o fôlego!" },
        ]
    },
    activities: {
        title: "Atividades",
        subtitle: (<>Explora as melhores <span>experiências</span> ao ar livre na Ilha da Madeira.</>),
        button: "Reservar transfer",
        items: ['canyoning', "bicicleta", "coasteering", "caminhada"]
    },
    socials: {
        title: "sociais",
        subtitle: (
            <>segue-nos no
                <LinkContainer href="https://www.instagram.com/belocalmadeira/" target="_blank">
                    <span>Instagram</span>
                    <LinkImg src='/image/homepage/instagram_arrow.svg' />
                </LinkContainer>
            </>),
    },
    faq: {
        terms: (<>Tem outras questões? Consulte os nossos
            <Link to="/terms"> termos e condições</Link></>),
        title: "Perguntas frequentes",
        subtitle: "Estas são as dúvidas que a maioria das pessoas têm relativamente à Be Local. Caso nenhuma lhe interesse, contacte-nos para informação adicional.",
        questions: [
            {
                question: "O que está incluído nos tours?",
                answer: [
                    (<ul>
                        <li>Experiência completa</li>
                        <li>Seguro de Segurança (De acordo com a legislação portuguesa).</li>
                        <li>Fotos e vídeos gratuitos da atividade</li>
                        <li>Todo o equipamento (Equipamento Técnico Certificado: Fato de Neoprene; Sapatos de Canyoning; Meias de Neoprene; Capacete; Arnês e colete salva-vidas se necessário).</li>
                        <li>Guias certificados</li>
                        <li>Snack (Chocolate)</li>
                        <li>Transfer de/para o Hotel Funchal (outras zonas mediante pedido, poderá ser aplicado um custo adicional)</li>
                        <li>Caso não precise de transporte, pode obter um desconto de 10%. (Enviamos as coordenadas do local para ir diretamente ao ponto de encontro.)</li>
                    </ul>),
                    "Se precisar de ajuda ou de mais informações, sinta-se à vontade para entrar em contato conosco pelo WhatsApp.",
                    "Departamento de reservas: WhatsApp: (+351) 935124260"
                ]
            },
            {
                question: "Qual é a idade mínima e a máxima para participar numa atividade de Canyoning ou Coasteering?",
                answer: [
                    "Para as atividades de Canyoning ou Coasteering, a idade mínima é de 7 anos. A idade máxima é de 75 anos.",
                ]
            },
            {
                question: "E se eu não me sentir confortável para saltar?",
                answer: [
                    "Os saltos não são obrigatórios e temos sempre alternativas (podemos colocar uma corda para descer em rapel ou então por vezes temos um caminho alternativo ao longo do curso de água onde podemos ver os outros a saltar sem ter de o fazer."
                ]
            },
            {
                question: "O que acontece em caso de mau tempo?",
                answer: [
                    "Em caso de mau tempo, a atividade poderá ser cancelada ou agendada para outra data em concreto. Relativamente ao cancelamento por questões meteorológicas é sempre decidido e avaliado pela nossa equipa."
                ]
            },
            {
                question: "Como posso cancelar uma atividade?",
                answer: [
                    "Para o cancelamento de uma atividade é necessário que exista um aviso prévio, quer por e-mail ou telefone. Para ser reembolsado, o cancelamento deve ser feito em um período superior a 24 horas."
                ]
            },
        ],
    }
} 