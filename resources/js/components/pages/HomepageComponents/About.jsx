import React, { useContext } from 'react'
import styled, { ThemeContext } from "styled-components";
import { dimensions, maxWidth } from '../../../helper';

const Container = styled.section`
    position: relative;
`;

const Separator = styled.div`
    height: 200px;
    width: 50%;
    border-right: 1px solid lightgray;

    @media (max-width: ${dimensions.md}) {
        border: 0px;
    }
`;


const Section = styled.div`
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    width: 100%;
    max-width: ${maxWidth};
    margin: auto;
    align-items: center;
    flex-wrap: wrap;
`;

const ImageContainer = styled.div`
    width: 50%;
    order: ${props => props.reverseOrder ? 2 : 1};
    position: relative;

    @media (max-width: ${dimensions.md}) {
        width: 100%;
        border: 0px;
        order: 2;
    }

    video {
        max-height: 600px;
        border-left: 1px solid lightgray;
    }

    .full-width-video {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-right: 1px solid lightgray;
    }
`;

const InfoContainer = styled.div`
    width: 50%;
    padding: 0px 50px;
    box-sizing: border-box;
    order: ${props => props.reverseOrder ? 1 : 2};

    @media (max-width: ${dimensions.md}) {
        width: 100%;
        border: 0px;
        order: 1;
        padding: 0px;

        h2, p {
            text-align: center;
        }
    }

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

const Overlay = styled.div`
  z-index: 5;
  top: 0;bottom:0;left:0;right: 0;
  position: absolute;
  background: rgb(0,0,0);
  background: linear-gradient(180deg, #000 0%, #38383830 100%);
  opacity: 0.2;
`;


function About() {
    const themeContext = useContext(ThemeContext);

    return (
        <Container id="homepage-about-container">
            <Separator />
            <Section>
                <ImageContainer>
                    <Overlay />
                    <video className="full-width-video separator" loop autoPlay controls={false}>
                        <source src="/image/homepage/about.webm" type="video/webm" />
                        Your browser does not support the video tag.
                    </video>
                </ImageContainer>
                <InfoContainer lightText={themeContext.lightText}>
                    <h2>start your journey TODAY</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci rem voluptatibus maxime fugit. Tenetur voluptatum quas, aut minus consequuntur est itaque dignissimos. Molestias neque voluptatibus sequi modi velit unde tempore.</p>
                </InfoContainer>
            </Section>
            <Separator />
            <Section>
                <ImageContainer reverseOrder>
                    <video muted loop autoPlay className='separator' controls={false}>
                        <source src="/image/homepage/about2.webm" type="video/webm" />
                        Your browser does not support the video tag.
                    </video>
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