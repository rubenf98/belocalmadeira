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
    newsletter: {
        title: "Junte-se às nossas newsletters",
        paragraph: "Subscreva a nossa newsletter com promoções, dicas e muito mais para aproveitar a Ilha da Madeira da melhor forma possível.",
        emailPlaceholder: "Insira o seu email",
        phonePlaceholder: "Insira o seu número de telefone",
        feedback: "Obrigado pela subscrição!",
        feedbackInstruction: "Subscreveu com sucesso a nossa newsletter.",
        error: "Ocorreu um erro ao subscrever.",
        errorInstruction: "Ocorreu um erro ao processar a sua subscrição. Por favor, tente novamente mais tarde."
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
                    <LinkImg src='/icon/instagram_arrow.svg' />
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
                question: "O que está incluído nos tours?",
                answer: [
                    (<ul>
                        <li>Experiência Completa</li>
                        <li>Seguro de Acidentes Pessoais (de acordo com a legislação portuguesa)</li>
                        <li>Fotos & Vídeos gratuitos da atividade</li>
                        <li>Todo o Equipamento Técnico Incluído:</li>
                        <ul>
                            <li>Fato neoprene</li>
                            <li>Sapatilhas de canyoning</li>
                            <li>Meias de neoprene</li>
                            <li>Capacete</li>
                            <li>Arnês</li>
                            <li>Coletes de flutuação (se necessário)</li>
                        </ul>
                        <li>Guias Certificados & Experientes</li>
                        <li>Transfer de/para Funchal</li>
                        <ul>
                            <li>Outras zonas disponíveis mediante pedido (pode aplicar-se custo adicional)</li>
                        </ul>
                        <li>10% de desconto caso não precise de pick-up</li>
                        <ul>
                            <li>Enviamos as coordenadas GPS do ponto de encontro.</li>
                        </ul>
                    </ul>),
                    "Para mais informações ou apoio, a nossa equipa está disponível para ajudar a qualquer momento.",
                    (<div>Departamento de Reservas: <br />WhatsApp: <a href="https://api.whatsapp.com/send?l=en&phone=351935124260"
                        target="_blank">(+ 351) 935 124 260</a> </div>)
                ]
            },
            {
                question: "Qual é a idade mínima e máxima para participar numa atividade de Canyoning ou Coasteering?",
                answer: [
                    "As nossas atividades foram pensadas para serem acessíveis, divertidas e seguras para participantes de várias idades.",
                    "Para Canyoning e Coasteering, a idade mínima é de 7 anos. As crianças devem estar acompanhadas por um dos pais ou tutor legal e sentir-se confortáveis na água.",
                    "A idade máxima recomendada é 65 anos, uma vez que estas atividades envolvem esforço físico, terreno irregular e obstáculos aquáticos. No entanto, a participação depende sempre da condição física, mobilidade e saúde de cada pessoa.",
                    "Antes de confirmar a reserva, recomendamos que os participantes:",
                    (<ul>
                        <li>Tenham boa condição física geral e sejam capazes de realizar atividade física moderada</li>
                        <li>Não tenham restrições médicas que possam comprometer a segurança</li>
                        <li>Informem a nossa equipa sobre qualquer condição de saúde relevante antecipadamente</li>
                    </ul>),
                    "Os nossos guias são profissionais certificados e avaliam cada situação individualmente para garantir o mais alto nível de segurança e conforto.",
                    "Se tiver dúvidas sobre idade adequada ou condição física específica, estamos disponíveis para dar aconselhamento personalizado.",
                    "Para mais informações ou apoio, a nossa equipa está disponível a qualquer momento.",
                    (<div>Departamento de Reservas: <br />WhatsApp: <a href="https://api.whatsapp.com/send?l=en&phone=351935124260"
                        target="_blank">(+ 351) 935 124 260</a> </div>)
                ]
            },
            {
                question: "E se eu não me sentir confortável a saltar?",
                answer: [
                    "Os saltos não são obrigatórios e existem sempre alternativas — podemos colocar uma corda para descer em rappel ou, nalguns casos, existe um caminho alternativo junto ao curso de água onde poderá ver os outros saltarem sem ter de o fazer."
                ]
            },
            {
                question: "O que acontece em caso de mau tempo?",
                answer: [
                    "A segurança é a nossa prioridade máxima. Por isso, todas as atividades ao ar livre dependem das condições meteorológicas e ambientais.",
                    "Em caso de mau tempo, os nossos guias certificados avaliam a situação e decidem se a atividade pode decorrer em segurança. Se não for possível, uma das seguintes soluções será oferecida:",
                    (<ul>
                        <li>Reagendar a atividade para outra data e horário disponíveis</li>
                        <li>Alterar a atividade para um local ou experiência alternativa mais segura</li>
                        <li>Cancelar a atividade caso não exista uma opção segura</li>
                    </ul>),
                    "Todas as decisões relacionadas com o clima são tomadas no próprio dia, com base na avaliação em tempo real dos níveis de água, vento, chuva, condições do mar e critérios gerais de segurança.",
                    "Se a atividade for cancelada devido ao tempo e não for possível reagendar, será efetuado reembolso total.",
                    "A sua segurança e qualidade da experiência estarão sempre em primeiro lugar."
                ]
            },
            {
                question: "Como posso cancelar uma atividade?",
                answer: [
                    "Para cancelar uma atividade, deverá informar-nos previamente por email ou telefone.",
                    (<ul>
                        <li>Cancelamentos feitos com pelo menos 24h de antecedência são elegíveis para reembolso total.</li>
                        <li>Cancelamentos dentro das 24h anteriores à atividade, ou não comparência, não têm direito a reembolso.</li>
                        <li>Alterações à reserva (data, número de participantes ou detalhes de pick-up) estão sujeitas a disponibilidade e devem ser solicitadas antecipadamente.</li>
                    </ul>),
                    "Recomendamos que todos os pedidos de cancelamento ou alteração sejam feitos o mais cedo possível para garantir o seu processamento adequado."
                ]
            },
        ]

    }
}
