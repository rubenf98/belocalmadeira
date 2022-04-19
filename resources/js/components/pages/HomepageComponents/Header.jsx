import React, { useEffect, useState, useContext } from 'react'
import styled, { ThemeContext } from "styled-components";


const Container = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  flex-wrap: wrap;
  color: ${props => props.color};
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
  background: linear-gradient(180deg, #000 0%, #38383830 100%);
  opacity: 0.7;
`;

const TitleContainer = styled.div`
  width: 100%;
  
  display: block;
  position: relative;

  h1, h2 {
    width: 40%;
    margin: auto;
    color: inherit;
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
  color: inherit;

  img {
    width: 15px;
    margin-left: 10px;
  }

  p {
    margin: 0px 5px;
    line-height: 15px;
    text-transform: uppercase;

    &:nth-child(2) {
      letter-spacing: 2px;
    }
  }
`;


const ScrollDownIndicator = () => (
  <Scroll>
    <div><p>scroll</p> <p>down</p></div>
  </Scroll>
)

function Header() {
  const [positionOffset, setPositionOffset] = useState({ x: undefined, y: undefined });
  const themeContext = useContext(ThemeContext);

  useEffect(() => {
    const DOM = document.getElementById("header-container");

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
    <Container color={themeContext.inverseText} id="header-container">
      <Overlay />
      <BackgroundContainer positionOffset={positionOffset}>
        <picture>
          <source srcSet="/image/2.jpg" type="image/jpg" />
          <img src="/image/2.webp" alt="profile" loading="eager" />
        </picture>
      </BackgroundContainer>

      <TitleContainer >
        <h2>Be Local Madeira </h2>
        <h1>Get to know Madeira Island from a local’s perspective.</h1>
      </TitleContainer>

      <ScrollDownIndicator />
    </Container>
  )
}

export default Header