import React, { useEffect, useState } from 'react'
import styled, { keyframes } from "styled-components";

const BackgroundContainer = styled.div`
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  top: 0;bottom:0;left:0;right: 0;
  position: absolute;
`;

const Background = styled.div`
  width: calc(100vw + 60px);
  height: calc(100vh + 60px);
  background: url("/image/1.jpg");
  background-position: ${props => props.positionOffset.x + "px " + props.positionOffset.y + "px "};
  background-size: cover;
  background-repeat: no-repeat;
  transition: background-position .25s linear;
`;

const Overlay = styled.div`
z-index: 2;
  top: 0;bottom:0;left:0;right: 0;
  position: absolute;
  background: linear-gradient(180deg, #000 0%, transparent 100%);
  opacity: 0.5;
`;

const TitleContainer = styled.div`
  z-index: 3;
  width: 40%;
  margin: auto;
  display: block;
position: relative;
  h1, h2 {
    color: white;
    text-align: center;
  }
  h1 {
    font-size: 70px;
    line-height: 4.375rem;
  }

  h2 {
    font-size: 24px;
    letter-spacing: .03em;
    line-height: 1rem;
    
  }
`;

function Header() {
    const [mousePosition, setMousePosition] = useState({ x: undefined, y: undefined });
    const [positionOffset, setPositionOffset] = useState({ x: undefined, y: undefined });
    const [lastUpdated, setLastUpdated] = useState(new Date().getTime() / 1000);

    useEffect(() => {
        const DOM = document.getElementById("header-container");

        const setFromEvent = (e) => {
            var OldXValue = e.clientX / window.innerWidth;
            var OldYValue = e.clientY / window.innerHeight;

            setMousePosition({
                x: OldXValue < .7 || OldXValue > .3 ? (OldXValue * 60) - 60 : -30,
                y: OldYValue < .7 || OldXValue > .3 ? (OldYValue * 60) - 60 : -30
            });
        }

        DOM.addEventListener("mousemove", setFromEvent);

        return () => {
            DOM.removeEventListener("mousemove", setFromEvent);
        };

    }, []);

    useEffect(() => {
        var newDate = new Date().getTime() / 1000;

        if (newDate - lastUpdated > .25) {
            setPositionOffset(mousePosition);
            setLastUpdated(newDate);
        }
    }, [mousePosition]);
    return (
        <section id="header-container">
            <Overlay />
            <BackgroundContainer>
                <Background positionOffset={positionOffset} />
            </BackgroundContainer>
            <TitleContainer >
                <h2>Lorem ipsum dolor sit</h2>
                <h1> Lorem ipsum dolor sit amet consectetur adipisicing elit. </h1>
            </TitleContainer>
        </section>
    )
}

export default Header