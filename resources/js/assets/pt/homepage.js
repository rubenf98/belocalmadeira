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
        titles: ["start your journey TODAY", "start your journey TODAY"],
        description: [
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci rem voluptatibus maxime fugit. Tenetur voluptatum quas, aut minus consequuntur est itaque dignissimos. Molestias neque voluptatibus sequi modi velit unde tempore.",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci rem voluptatibus maxime fugit. Tenetur voluptatum quas, aut minus consequuntur est itaque dignissimos. Molestias neque voluptatibus sequi modi velit unde tempore."
        ],
    },
    services: {
        title: "serviços",
        subtitle: (<>O que temos para te <span>oferecer</span></>),
        items: [
            {
                title: "Unforgettable experiences",
                description: "Creating your trip is entirely collaborative and our Travel Researchers are here for every step."
            },
            {
                title: "Unforgettable experiences",
                description: "Creating your trip is entirely collaborative and our Travel Researchers are here for every step."
            },
            {
                title: "Unforgettable experiences",
                description: "Creating your trip is entirely collaborative and our Travel Researchers are here for every step."
            },
            {
                title: "Unforgettable experiences",
                description: "Creating your trip is entirely collaborative and our Travel Researchers are here for every step."
            },
            {
                title: "Unforgettable experiences",
                description: "Creating your trip is entirely collaborative and our Travel Researchers are here for every step."
            }
        ]
    },
    activities: {
        title: "atividades",
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