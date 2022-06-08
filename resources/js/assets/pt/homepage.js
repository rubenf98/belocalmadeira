import React from 'react'
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

const Link = styled.img`
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
        titles: ["quem é a be local madeira", "bem vindo à aventura be local"],
        description: [
            "Somos uma empresa local que promove aventura e experiências com a natureza na Ilha da Madeira. Fornecemos atividades cheias de aventura, tanto em ambientes aquático como terrestres.",
            "Oferecemos uma panóplia de experiências alucinantes que te irão permitir desfrutar de momentos únicos por locais fascinantes.",
            "Temos profissionais dedicados e certificados em Canyoning, Coasteering, passeios de bicicleta e caminhadas. Desta forma irá ser acompanhado em todos os momentos.",
            "Junte-se a nós e irá viver momentos que recordará para sempre!"
        ],
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
    activities: {
        title: "Atividades",
        subtitle: (<>Recebe uma amostra do que podes <span>experienciar</span></>),
        items: ['canyoning', "bicicleta", "coasteering", "caminhada"]
    },
    socials: {
        title: "sociais",
        subtitle: (
            <>segue-nos no
                <LinkContainer href="https://www.instagram.com/belocalmadeira/" target="_blank">
                    <span>Instagram</span>
                    <Link src='/image/homepage/instagram_arrow.svg' />
                </LinkContainer>
            </>),
    },
} 