import React, { useEffect, useCallback, useState } from 'react'
import styled from "styled-components";
import { maxWidth } from '../../../helper';

const Container = styled.section`
 background: #f6f6f6;
 position: relative;
`;
const Separator = styled.div`
    height: 200px;
    width: 50%;
    border-right: 1px solid lightgray;
`;
const ScrollIndicator = styled.div`
    position: absolute;
    transform: translate(-50%, 0);
    left: 50%;
    top: ${props => props.scrollPosition + "px"};
    width: 5px;
    height: 50px;
    background: green;
`;


const Section = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    box-sizing: border-box;
    width: 60%;
    max-width: ${maxWidth};
    margin: auto;
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
        color: #777;
    }
`;

function About() {
    const [scrollPosition, setScrollPosition] = useState(0)
    const handleScroll = useCallback(() => {
        var DOM = document.getElementById("homepage-about-container");

        const rect = DOM.getBoundingClientRect();


        var max = DOM.offsetHeight + rect.top + window.scrollY - screen.height;
        console.log(max);
        var position = window.scrollY - (screen.height / 2);
        setScrollPosition((position < max ? ((position > 0) ? position : 0) : max));
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", () => handleScroll(), true);

        return () => {
            window.removeEventListener("scroll", () => handleScroll());
        }
    }, [handleScroll]);

    return (
        <Container id="homepage-about-container">
            <ScrollIndicator scrollPosition={scrollPosition} />
            <Separator />
            <Section>
                <ImageContainer>
                    <img className='separator' src="/image/about/1.JPG" alt="" />
                </ImageContainer>
                <InfoContainer>
                    <h2>start your journey TODAY</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci rem voluptatibus maxime fugit. Tenetur voluptatum quas, aut minus consequuntur est itaque dignissimos. Molestias neque voluptatibus sequi modi velit unde tempore.</p>
                </InfoContainer>
            </Section>
            <Separator />
            <Section>
                <ImageContainer reverseOrder>
                    <img className='separator' src="/image/about/1.JPG" alt="" />
                </ImageContainer>
                <InfoContainer reverseOrder>
                    <h2>start your journey TODAY</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci rem voluptatibus maxime fugit. Tenetur voluptatum quas, aut minus consequuntur est itaque dignissimos. Molestias neque voluptatibus sequi modi velit unde tempore.</p>
                </InfoContainer>
            </Section>
            <Separator />
        </Container>
    )
}

export default About