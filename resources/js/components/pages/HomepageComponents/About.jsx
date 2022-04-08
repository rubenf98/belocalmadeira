import React, { useContext } from 'react'
import styled, { ThemeContext } from "styled-components";
import { maxWidth } from '../../../helper';

const Container = styled.section`
    position: relative;
    z-index: -2;
`;

const Separator = styled.div`
    height: 200px;
    width: 50%;
    border-right: 1px solid lightgray;
`;


const Section = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    box-sizing: border-box;
    width: 60%;
    max-width: ${maxWidth};
    margin: auto;
    align-items: center;
`;

const ImageContainer = styled.div`
    width: 50%;
    border-right: 1px solid lightgray;
    order: ${props => props.reverseOrder ? 2 : 1};

    img {
        width: 100%;
    }
`;

const InfoContainer = styled.div`
    width: 50%;
    padding: 0px 50px;
    box-sizing: border-box;
    order: ${props => props.reverseOrder ? 1 : 2};

    h2 {
        font-size: 50px;
        font-weight: bold;
        text-transform: uppercase;
    }

    p {
        font-size: 22px;
        color: ${props => props.lightText};
    }
`;

function About() {
    const themeContext = useContext(ThemeContext);


    return (
        <Container id="homepage-about-container">
            <Separator />
            <Section>
                <ImageContainer>
                    <img className='separator' src="/image/about/1.jpg" alt="" />
                </ImageContainer>
                <InfoContainer lightText={themeContext.lightText}>
                    <h2>start your journey TODAY</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci rem voluptatibus maxime fugit. Tenetur voluptatum quas, aut minus consequuntur est itaque dignissimos. Molestias neque voluptatibus sequi modi velit unde tempore.</p>
                </InfoContainer>
            </Section>
            <Separator />
            <Section>
                <ImageContainer reverseOrder>
                    <img className='separator' src="/image/about/1.jpg" alt="" />
                </ImageContainer>
                <InfoContainer lightText={themeContext.lightText} reverseOrder>
                    <h2>start your journey TODAY</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci rem voluptatibus maxime fugit. Tenetur voluptatum quas, aut minus consequuntur est itaque dignissimos. Molestias neque voluptatibus sequi modi velit unde tempore.</p>
                </InfoContainer>
            </Section>
            <Separator />
        </Container>
    )
}

export default About