import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

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
        subtitle: "Conhece a Ilha da Madeira através da perspetiva de um local",
        button: "Reservar agora",
        carousel: ["canyoning", "coasteering", "jeeps", "hiking", "biking"]
    },
    about: {
        videoError: "O teu navegador não suporta a tag de vídeo.",
        titles: ["Quem é a Be Local", "Os melhores profissionais para a tarefa", "A tua experiência começa agora"],
        description: [
            "Somos uma empresa local que promove aventuras e experiências na natureza na Ilha da Madeira.",
            "Temos profissionais dedicados e certificados em Canyoning, Coasteering, BTT e Caminhadas. Assim, estarás acompanhado em todos os momentos.",
            "Oferecemos uma variedade de experiências emocionantes que te permitirão desfrutar de momentos únicos em locais fascinantes. Junta-te a nós e vive momentos que recordarás para sempre!"
        ],
    },
    services: {
        title: "O que temos para oferecer",
        items: [
            {
                title: "Experiências inesquecíveis",
                description: "Criar a tua experiência é totalmente colaborativo e os nossos guias estão contigo em cada passo"
            },
            {
                title: "Equipamento de alta qualidade",
                description: "A segurança é extremamente importante para nós, por isso garantimos equipamento de segurança de alta qualidade para todas as atividades"
            },
            {
                title: "Transporte",
                description: "Tratamos dos serviços de transporte para que possas desfrutar da experiência ao máximo"
            },
            {
                title: "Fotos e vídeos da atividade",
                description: "Nada melhor do que rever os momentos incríveis que viveste connosco e recordá-los para sempre"
            },
            {
                title: "Guias certificados",
                description: "Os nossos guias são certificados para cada atividade que oferecemos, proporcionando a aventura incrível que procuras."
            },
        ]
    },
    multiday: {
        title: (<>Madeira <span>Pacotes de Aventura</span> Multi-Dia</>),
        paragraphs: [
            "Embarque numa aventura inesquecível com os nossos pacotes flexíveis de vários dias! Explore as rotas de canyoning mais deslumbrantes da ilha, trilhos panorâmicos e a autêntica cultura local ao seu próprio ritmo. A aventura, a descoberta e o prazer estão todos à sua espera, exatamente como deseja.",
            "Os nossos pacotes foram concebidos como estruturas flexíveis, dando-lhe a liberdade de criar a sua aventura perfeita. Cada atividade, horário e itinerário pode ser ajustado ou totalmente personalizado para se adequar ao seu estilo.",
        ],
        buttons: [
            "Saber mais",
            "+351 935 124 260"
        ]
    },

    coasteering: {
        title: "Coasteering - Um Mar de Emoções",
        paragraphs: [
            "O Coasteering é uma atividade emergente na Ilha da Madeira. Consiste em seguir um percurso ao longo da linha costeira, nadando, escalando, caminhando e saltando para a água.",
            "Esta atividade é realizada na Ponta de São Lourenço, uma das mais belas paisagens da Madeira, com locais incríveis.",
            "Daqui segue-se para a ponta oriental da Ilha, explorando a impressionante costa de diferentes formas: nadando, escalando, caminhando e saltando para a água.",
            "O percurso é acompanhado por guias experientes e todo o equipamento necessário é fornecido."
        ],
        buttons: [
            "Reservar agora",
            "+351 935 124 260"
        ]
    },
    activities: {
        title: (<>Explora as melhores <span>experiências</span> ao ar livre na Ilha da Madeira </>),
        button: "ver mais",
        items: [
            { title: 'Explora com emoção', subtitle: "canyoning", description: "A Ilha da Madeira é atualmente considerada um dos melhores locais do mundo para a prática de Canyoning. Em percursos deslumbrantes pelas águas cristalinas dos inúmeros rios madeirenses, poderás explorar o interior puro e intocado da ilha." },
            { title: 'Um mar de emoções', subtitle: "coasteering", description: "Caminhar, nadar, escalar, fazer rappel e saltar para a água: tudo isto numa única atividade — o coasteering na Madeira, que, entre muita aventura e adrenalina, te mostrará as maravilhas naturais da ilha." },
            { title: 'Explora a Madeira à tua maneira', subtitle: "jeep", description: "Descobre a Ilha da Madeira da forma mais autêntica e exclusiva — a bordo de um jipe privado 4x4, guiado por especialistas locais apaixonados que te irão revelar os tesouros escondidos, as paisagens de cortar a respiração e o património cultural da ilha." },
            { title: 'As melhores caminhadas na Ilha da Madeira', subtitle: "hiking", description: "Nas nossas caminhadas organizadas, tratamos de tudo, incluindo os transportes. Tu apenas desfrutas ao máximo de cada trilho. Levamos-te a lugares que nenhum GPS conhece e que não encontras em nenhum guia turístico." },
            { title: 'Descobre a ilha com emoção', subtitle: "biking", description: "A Ilha da Madeira é um paraíso para o BTT. Aqui encontras trilhos fantásticos desde a montanha até ao nível do mar! O seu clima ameno torna o ciclismo agradável durante todo o ano." }
        ]
    },
    discount: {
        title: "Oportunidade de reserva",
        paragraph: "Descontos imperdíveis em todas as atividades reservadas online",
        button: "Reservar agora"
    },
    family: {
        paragraph: "Aproveita o nosso pacote familiar para todas as reservas com mais de 4 participantes e cria memórias inesquecíveis para todos",
        button: "Reservar agora"
    },
    feedback: {
        title: "Testemunhos",
        subtitle: (<>O que as <span>pessoas</span> dizem sobre nós?</>),
        subsubtitle: "Opiniões dos nossos clientes",
        viewmore: "Ver mais",
        items: [
            { author: "Lindsey Rangel", comment: "O Fábio é, sem dúvida, o melhor guia que poderíamos ter pedido. Reservámos uma caminhada com ele e a experiência foi tão fantástica que pedimos para repetir no dia seguinte. Felizmente, ele estava disponível. O plano que fez foi incrível e nem consigo descrever o quão divertido e inesquecível foi." },
            { author: "Nessrine", comment: "Foi a MELHOR forma de começar a nossa viagem à Madeira! A melhor atividade que já fiz na vida durante as minhas viagens. O guia Fábio foi incrível, explicou-nos imensas coisas, tirou fotos e vídeos espetaculares de mim e da minha amiga a saltar na cascata." },
            { author: "Charlotte Price", comment: "Uma experiência obrigatória na Madeira!! O percurso de canyoning intermédio estava cheio de descidas, tirolesas e escorregas — um dia fantástico. O equipamento era de alta qualidade e, com a experiência da equipa, sentimo-nos totalmente seguras." },
            { author: "Henrike Maris", comment: "O Fábio e o Pedro foram os nossos guias na tour de canyoning hoje. Foram incríveis e o percurso foi fantástico! Sentimo-nos muito seguras e as vistas eram maravilhosas! No final recebemos fotografias espetaculares. Uma experiência inesquecível!" },
            { author: "Maximilian Lambrecht", comment: "Fazer canyoning com a Be Local Madeira foi, sem dúvida, um dos destaques da viagem. Os guias foram super simpáticos, prestáveis e pacientes com os principiantes. Os desfiladeiros da ilha são espetaculares e a Be Local Madeira é a melhor empresa para os explorar." },
            { author: "Vanessa", comment: "Grande aventura!! Os guias foram profissionais, a vista era incrível e o equipamento excelente. Não podia ter pedido melhor experiência! No final ainda recebemos um bolo regional. Excelente forma de terminar a aventura." },
            { author: "Philip Schürheck", comment: "Fiz uma tour de Canyoning incrível com a equipa da Be Local Madeira! Foi super divertido e profissional ao mesmo tempo. Depois da atividade ainda fomos, espontaneamente, com um dos guias a um restaurante local. Experiência fantástica!" },
            { author: "Diogo Ribeiro", comment: "O Fábio da Be Local Madeira é muito profissional e atencioso. Deu-nos toda a confiança, segurança e diversão que precisávamos! O canyoning (Nível 2, no Curral das Freiras) é muito variado, com muito rapel, caminhada, cascatas e saltos! A paisagem é deslumbrante!" },
        ]
    },
    socials: {
        title: "redes sociais",
        subtitle: (
            <>segue-nos no
                <LinkContainer href="https://www.instagram.com/belocalmadeira/" target="_blank">
                    <span>Instagram</span>
                    <LinkImg src='/image/homepage/instagram_arrow.svg' />
                </LinkContainer>
            </>),
    },
    faq: {
        terms: (<>Tens mais perguntas? Consulta os nossos
            <Link to="/terms"> termos e condições</Link></>),
        title: "Perguntas frequentes",
        subtitle: "Aqui estão as perguntas mais comuns sobre a Be Local. Se nenhuma delas responde à tua dúvida, contacta-nos para mais informações.",
        questions: [
            {
                question: "O que está incluído nas tours?",
                answer: [
                    (<ul>
                        <li>Experiência completa</li>
                        <li>Seguro de acidentes pessoais (de acordo com a legislação portuguesa).</li>
                        <li>Fotos e vídeos gratuitos da atividade</li>
                        <li>Todo o equipamento (equipamento técnico certificado: fato de neoprene; sapatos de canyoning; meias de neoprene; capacete; arnês e colete salva-vidas, se necessário).</li>
                        <li>Guias certificados</li>
                        <li>Lanche (chocolate)</li>
                        <li>Transporte de/para o hotel no Funchal (outras áreas mediante pedido e possível custo adicional)</li>
                        <li>Se não necessitares de transporte, podes obter 10% de desconto (enviamos as coordenadas para ires diretamente ao ponto de encontro).</li>
                    </ul>),
                    "Se precisares de ajuda ou mais informações, não hesites em contactar-nos pelo WhatsApp.",
                    "Departamento de reservas: WhatsApp: (+351) 935 124 260"
                ]
            },
            {
                question: "Qual é a idade mínima e máxima para participar numa atividade de Canyoning ou Coasteering?",
                answer: [
                    "Para atividades de Canyoning ou Coasteering, a idade mínima é 7 anos e a máxima é 75 anos.",
                ]
            },
            {
                question: "E se não me sentir confortável em saltar?",
                answer: [
                    "Os saltos não são obrigatórios e temos sempre alternativas (podemos colocar uma corda para descer em rappel ou, por vezes, há um trilho alternativo junto à ribeira onde se pode assistir aos saltos sem ter de os fazer)."
                ]
            },
            {
                question: "O que acontece em caso de mau tempo?",
                answer: [
                    "Em caso de mau tempo, a atividade pode ser cancelada ou reagendada para outra data. A decisão e avaliação sobre o cancelamento são sempre feitas pela nossa equipa."
                ]
            },
            {
                question: "Como posso cancelar uma atividade?",
                answer: [
                    "Para cancelar uma atividade, é necessário aviso prévio, por email ou telefone. Para obter reembolso, o cancelamento deve ser feito com pelo menos 24 horas de antecedência."
                ]
            },
        ],
    }
}
