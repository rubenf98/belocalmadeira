import React, { useEffect, useState, useContext } from 'react'
import styled, { ThemeContext } from "styled-components";
import { dimensions } from '../../../helper';

import headerWebp1920 from '/image/background_1920.webp';
import headerJpg1920 from '/image/background_1920.jpg';
import headerWebp3000 from '/image/background_3000.webp';
import headerJpg3000 from '/image/background_3000.jpg';
import AnimationContainer from '../../common/AnimationContainer';
import Flyer from '../../common/Flyer';


const Container = styled.section`
    width: 100%;
    height: 100vh;
    position: relative;
    display: flex;
    align-items: center;
    overflow: hidden;
    flex-wrap: wrap;
    color: ${props => props.color};
`;

const BackgroundContainer = styled.div`
    position: absolute;
    z-index: -2;
    top: 0;
    left: 0;
    display: flex;
    justify-content: flex-end;
    width: 100vw;
    height: 100vh;
    background-color: ${({ theme }) => theme.primary};

    video {
        width: 100vw;
        height: 100vh;
        object-fit: cover;
        display: none;
    }
  
    picture  {
        width: 50%;
        height: 100%;
        display: block;
        

        img {
            width: 100%;
            height: 100%;
            border-top-left-radius: 20%;
            object-fit: cover;
        }
    }

    @media(max-width: ${dimensions.sm}) {
        width: 100vw;

        picture {
            display: none;
        }
        video {
            display: block;
        }
    }
`;

const Overlay = styled.div`
  /* z-index: -1;
  top: 0;bottom:0;left:0;right: 0;
  position: absolute;
  background: rgb(0,0,0);
  background: linear-gradient(180deg, #000 0%, #38383830 100%);
  opacity: 0.7; */
`;

const TitleContainer = styled.div`
    width: 90%;
    display: block;
    margin: auto;

    h1, h2 {
        color: white;
        width: 50%;
        padding-right: 30px;
        box-sizing: border-box;
        line-height: 100%;
    }

    h1 {
        font-size: clamp(40px, 4vw, 100px);
        font-family: 'Playfair Display', serif;
    }

    h2 {
        font-size: clamp(20px, 2vw, 22px);
        text-transform: uppercase;
        margin-bottom: 20px;
        font-weight: bold;
    }

    @media (max-width: ${dimensions.sm}) {
        width: 100%;

        h1, h2 {
            width: 100%;
            padding: 0px 20px;
            text-align: center;
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
    
    .animated {
        display: flex;
        align-items: center;
        gap: 10px;
    }

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
            {/* <Overlay /> */}
            <Flyer />
            <BackgroundContainer background={themeContext.primary} positionOffset={positionOffset}>
                <picture>
                    <source media="(max-width: 1920px)" srcSet={headerWebp1920} />
                    <source media="(min-width: 1921px)" srcSet={headerWebp3000} />
                    <source media="(max-width: 1920px)" srcSet={headerJpg1920} />
                    <source media="(min-width: 1921px)" srcSet={headerJpg3000} />

                    <img src={headerWebp1920} alt="profile" loading="eager" />
                </picture>

                <video playsInline poster="/image/background_960.jpg" muted loop autoPlay controls={false}>
                    <source src="/image/homepage/mobile_header.mp4" type="video/mp4" />
                    <source src="/image/homepage/mobile_header.webm" type="video/webm" />
                </video>
            </BackgroundContainer>


            <TitleContainer >
                <AnimationContainer animateIn="fadeIn" offset={0}>
                    <h2>{text.title}</h2>
                    <h1>{text.subtitle}</h1>
                </AnimationContainer>
            </TitleContainer>


            <Instagram>
                <AnimationContainer animateIn="fadeInUp" offset={0}>
                    <a href="https://www.instagram.com/belocalmadeira/" target="_blank" >
                        <img src="/icon/instagram.png" alt="instagram link" />
                    </a>
                    <a href="https://www.tiktok.com/@belocalmadeira" target="_blank" >
                        <img src="/icon/tiktok.svg" alt="tiktok link" />
                    </a>
                </AnimationContainer>
            </Instagram>

            <LanguageContainer>
                <AnimationContainer animateIn="fadeInUp" offset={0}>
                    <LanguageIndicator active={active == "pt"} onClick={() => handleLanguageClick("pt")}>pt</LanguageIndicator>
                    <LanguageIndicator active={active == "en"} onClick={() => handleLanguageClick("en")}>en</LanguageIndicator>
                </AnimationContainer>
            </LanguageContainer>

            <ScrollDownIndicator />
        </Container>
    )
}

export default Header