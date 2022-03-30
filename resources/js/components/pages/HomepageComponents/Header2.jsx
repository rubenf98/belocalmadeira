import React, { useEffect, useState } from 'react'
import styled, { keyframes } from "styled-components";


const Container = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

`;

const BackgroundContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: inline-block;
  perspective: 100vw;
  overflow: hidden;
  scale: 1.05;
  top: 0;bottom:0;left:0;right: 0;
  position: absolute;
  img {
    width: 100vw;
    height: 100vh;
    display: block;
    object-fit: cover;
    transition: transform .3s linear;
    scale: 1.05;
    transform: ${props => "rotateX(" + Math.floor(props.positionOffset.x) + "deg) rotateY(" + Math.floor(props.positionOffset.y) + "deg)"};
  }
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
    font-family: "Wulkan Display Medium",serif;
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
  const [positionOffset, setPositionOffset] = useState({ x: undefined, y: undefined });

  useEffect(() => {
    const DOM = document.getElementById("header2-container");

    const setFromEvent = (e) => {
      var yOffset = e.pageY - (window.innerHeight / 2);
      var xOffset = e.pageX - (window.innerWidth / 2);
      var oldWMax = window.innerWidth / 2;
      var oldHMax = window.innerHeight / 2;

      var newYOffset = (((yOffset - (-oldHMax)) * 10) / (oldHMax * 2)) - 5;
      var newXOffset = (((xOffset - (-oldWMax)) * 10) / (oldWMax * 2)) - 5;

      setPositionOffset({
        x: newXOffset,
        y: newYOffset
      });
    }

    DOM.addEventListener("mousemove", setFromEvent);

    return () => {
      DOM.removeEventListener("mousemove", setFromEvent);
    };

  }, []);


  return (
    <Container id="header2-container">
      <Overlay />
      <BackgroundContainer positionOffset={positionOffset}>
        <img src="/image/2.jpg" alt="" />
      </BackgroundContainer>

      <TitleContainer >
        <h2>Lorem ipsum dolor sit</h2>
        <h1> Lorem ipsum dolor sit amet consectetur adipisicing elit. </h1>
      </TitleContainer>
    </Container>
  )
}

export default Header