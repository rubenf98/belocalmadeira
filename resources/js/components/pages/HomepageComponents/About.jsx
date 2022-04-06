import React, { useEffect, useCallback, useState, useContext } from 'react'
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

const ScrollIndicator = styled.div`
    position: absolute;
    transform: translate(-50%, 0);
    left: 50%;
    top: ${props => props.scrollPosition + "px"};
    width: 4px;
    height: 50px;
    background: ${props => props.background};
    transition: all .2s ease-in-out;
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
    const [scrollPosition, setScrollPosition] = useState(0);
    const [scrollIndicatorPosition, setScrollIndicatorPosition] = useState(0);
    const [lastUpdated, setLastUpdated] = useState(new Date().getTime() / 1000);
    const themeContext = useContext(ThemeContext);

    const handleScroll = useCallback(() => {
        var DOM = document.getElementById("homepage-about-container");

        const rect = DOM.getBoundingClientRect();
        var max = DOM.offsetHeight + rect.top + window.scrollY - screen.height / 2;
        var position = window.scrollY - (screen.height / 2);

        setScrollPosition((position < max ? ((position > 0) ? position : 0) : max));
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", () => handleScroll(), true);

        return () => {
            window.removeEventListener("scroll", () => handleScroll());
        }
    }, [handleScroll]);

    useEffect(() => {
        var newDate = new Date().getTime() / 1000;

        if (newDate - lastUpdated > .3) {
            setScrollIndicatorPosition(scrollPosition);
            setLastUpdated(newDate);
        }
    }, [scrollPosition]);

    return (
        <Container id="homepage-about-container">
            <ScrollIndicator background={themeContext.primaryHover} scrollPosition={scrollIndicatorPosition} />
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