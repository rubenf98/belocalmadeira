import React, { useEffect, useState, useContext } from 'react'
import styled, { ThemeContext } from "styled-components";
import { dimensions } from '../../../helper';


const Container = styled.section`
  width: 100%;
  height: 101vh;
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
    
    @media(max-width: ${dimensions.md}) {
      transform: none;
      scale: 1;
      object-fit: fill;
    }

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

    @media(max-width: ${dimensions.lg}) {
      width: 70%;
    }

    @media(max-width: ${dimensions.md}) {
      width: 90%;
    }
  }
  h1 {
    font-size: 70px;
    line-height: 4.375rem;
    font-family: 'Playfair Display', serif;

    @media(max-width: ${dimensions.md}) {
      font-size: 55px;
    }

    @media(max-width: ${dimensions.sm}) {
      font-size: 40px;
    }
  }

  h2 {
    font-size: 24px;
    text-transform: uppercase;
    margin-bottom: 30px;

    @media(max-width: ${dimensions.sm}) {
      font-size: 22px;
    }
  }
`;

const Scroll = styled.div`
  margin: auto;
  position: absolute;
  left: 50%;
  bottom: 30px;
  transform: translate(-50%, 0);
  display: flex;
  color: inherit;

  @media (max-width: ${dimensions.md}) {
    display: none;
  }

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

const LanguageContainer = styled.div`
  margin: auto;
  position: absolute;
  right: 100px;
  bottom: 30px;
  color: inherit;

  @media (max-width: ${dimensions.md}) {
    right: 30px;
  }
`;

const LanguageIndicator = styled.span`
    filter: ${props => props.active ? "opacity(1)" : "opacity(.4)"};
    z-index: 100;
    cursor: pointer;
    font-size: 22px;
    font-weight: bold;

    &:nth-child(2) {
      margin-left: 13px;
    }
`;

const Instagram = styled.div`
  margin: auto;
  position: absolute;
  left: 100px;
  bottom: 30px;
  color: inherit;

  @media (max-width: ${dimensions.md}) {
    left: 30px;
  }

  img {
    width: 30px;
    height: 30px;
  }
`;

const ScrollDownIndicator = () => (
    <Scroll>
        <div><p>scroll</p> <p>down</p></div>
    </Scroll>
)

function Header({ text }) {
    const [positionOffset, setPositionOffset] = useState({ x: undefined, y: undefined });
    const [active, setActive] = useState("en")
    const themeContext = useContext(ThemeContext);

    useEffect(() => {
        setActive(localStorage.getItem("language"));
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

    function handleLanguageClick(language) {
        localStorage.setItem("language", language);
        setActive(language)
        location.reload();
    }


    return (
        <Container color={themeContext.inverseText} id="header-container">
            <Overlay />
            <BackgroundContainer positionOffset={positionOffset}>
                <picture>
                    <source srcSet="/image/background.jpg" type="image/jpg" />
                    <img src="/image/background.webp" alt="profile" loading="eager" />
                </picture>
            </BackgroundContainer>

            <TitleContainer >
                <h2>{text.title}</h2>
                <h1>{text.subtitle}</h1>
            </TitleContainer>

            <ScrollDownIndicator />

            <Instagram>
                <a href="https://www.instagram.com/belocalmadeira/" target="_blank" >
                    <img src="/icon/instagram.png" alt="instagram link" />
                </a>

            </Instagram>
            <LanguageContainer>
                <LanguageIndicator active={active == "pt"} onClick={() => handleLanguageClick("pt")}>pt</LanguageIndicator>
                <LanguageIndicator active={active == "en"} onClick={() => handleLanguageClick("en")}>en</LanguageIndicator>
            </LanguageContainer>
        </Container>
    )
}

export default Header