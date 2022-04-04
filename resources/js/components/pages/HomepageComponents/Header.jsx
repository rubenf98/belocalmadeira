import React, { useEffect, useState } from 'react'
import styled, { keyframes } from "styled-components";

const arrowAnimationContainer = keyframes`
  0% {
    transform:rotate(0deg);
  }


  
  100% {
    transform:rotate(360deg);
  }
`;


const Container = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  flex-wrap: wrap;
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
  z-index: -2;
  
  picture {
    width: 100vw;
    height: 100vh;
    display: block;
    object-fit: cover;
    transition: transform .3s linear;
    scale: 1.05;
    transform: ${props => "rotateX(" + Math.floor(props.positionOffset.x) + "deg) rotateY(" + Math.floor(props.positionOffset.y) + "deg)"};
    
    img {
      width: 100%;
      height: 100%;
    }
  }
`;

const Overlay = styled.div`
  z-index: -1;
  top: 0;bottom:0;left:0;right: 0;
  position: absolute;
  background: rgb(0,0,0);
  background: linear-gradient(180deg, #000 0%, #0000004e 100%);
  opacity: 0.7;
`;

const TitleContainer = styled.div`
  width: 100%;
  
  display: block;
  position: relative;

  h1, h2 {
    width: 40%;
    margin: auto;
    color: white;
    text-align: center;
  }
  h1 {
    font-size: 70px;
    line-height: 4.375rem;
    font-family: 'Playfair Display', serif;
  }

  h2 {
    font-size: 24px;
    text-transform: uppercase;
    margin-bottom: 30px;
  }
`;

const Scroll = styled.div`
  margin: auto;
  position: absolute;
  left: 50%;
  bottom: 10px;
  transform: translate(-50%, 0);
  display: flex;
  color: white;

  img {
    width: 15px;
    margin-left: 10px;
  }

  p {
    margin: 0px 5px;
    line-height: 15px;
    text-transform: uppercase;

    &:first-child() {
      letter-spacing: -3px;
    }
  }
`;

const ScrollAnimation = styled.div`
  margin: auto;
  position: absolute;
  z-index: 999999999;
  bottom: -150px;
  transform: translate(-50%, 0);
  border: 1px dashed white;
  width: 300px;
  height: 300px;
  border-radius: 300px;
  animation: ${arrowAnimationContainer} 100s linear infinite;

`;

const ScrollDownIndicator = () => (
  <Scroll>
    <div><p>scroll</p> <p>down</p></div>
    <img src="/icon/down-arrow.svg" />
  </Scroll>
)

function Header() {
  const [positionOffset, setPositionOffset] = useState({ x: undefined, y: undefined });

  useEffect(() => {
    const DOM = document.getElementById("header2-container");

    const setFromEvent = (e) => {
      var yOffset = e.pageY - (window.innerHeight / 2);
      var xOffset = e.pageX - (window.innerWidth / 2);

      var maxXOffset = window.innerWidth / 2;
      var maxYOffset = window.innerHeight / 2;

      setPositionOffset({
        x: (((xOffset - (-maxXOffset)) * 10) / (maxXOffset * 2)) - 5,
        y: (((yOffset - (-maxYOffset)) * 10) / (maxYOffset * 2)) - 5
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
        <picture>
          <source srcSet="/image/2.jpg" type="image/jpg" />
          <img src="/image/2.webp" alt="profile" loading="eager" />
        </picture>
      </BackgroundContainer>

      <TitleContainer >
        <h2>Outdoor Activities </h2>
        <h1>Get to know Madeira Island from a local’s perspective.</h1>
      </TitleContainer>

      <ScrollDownIndicator />
      <ScrollAnimation />
    </Container>
  )
}

export default Header