import React, { useEffect, useState, useContext, useRef } from "react";
import styled, { keyframes, ThemeContext } from "styled-components";
import { dimensions } from "../../../helper";
import AnimationContainer from "../../common/AnimationContainer";
import Flyer from "../../common/Flyer";

const fillBar = keyframes`
  from {
    width: 0%;
  }

  to {
    width: 100%;
  }
`;

const Container = styled.section`
    width: 100%;
    margin: auto;
    margin-top: 100px;
    max-width: ${dimensions.custom};
    min-height: calc(100vh - 100px);
    flex-direction: column;
    position: relative;
    display: flex;
    align-items: center;
    /* flex-wrap: wrap; */

    @media (max-width: ${dimensions.md}) {
        margin-top: 0px;
        min-height: calc(100vh - 50px);
    }
`;

const BackgroundContainer = styled.div`
    background: ${(props) => "url(" + props.background + ")"};
    background-repeat: no-repeat;
    background-size: cover;
    flex: 1;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 40px;
    box-sizing: border-box;
    border-radius: 50px;

    @media (max-width: ${dimensions.md}) {
        border-top-right-radius: 0px;
        border-top-left-radius: 0px;
    }
`;

const TitleContainer = styled.div`
    width: 100%;
    display: block;
    margin: auto;
    flex: 1;

    h1 {
        width: 70%;
        margin: auto;
        text-align: center;
        font-size: clamp(36px, 4vw, 80px);
        font-family: "Russo One", sans-serif;
        line-height: 110%;
        color: white;
    }

    @media (max-width: ${dimensions.md}) {
        margin-top: 100px;

        h1 {
            width: 100%;
            padding: 0px 20px;
        }
    }
`;

const LanguageContainer = styled.div`
    color: inherit;
    display: flex;
    justify-content: flex-end;
    gap: 13px;
    align-items: center;

    .indicator {
        cursor: pointer;
        font-size: 22px;
        font-weight: bold;
    }

    .active {
        filter: ${(props) => (props.active ? "opacity(1)" : "opacity(.4)")};
    }
`;

const Social = styled.div`
    color: inherit;
    display: flex;
    gap: 10px;
    align-items: center;

    img {
        width: 30px;
        height: 30px;
    }
`;
const CarouselBar = styled.div`
    display: flex;
    width: 80%;
    justify-content: flex-end;
    gap: 30px;
    margin: 30px 0px 0px auto;

    div {
        border-top: 2px solid #e2e2e2;
        padding: 10px 0px;
        cursor: pointer;
        font-size: clamp(10px, 2vw, 16px);
        text-transform: uppercase;
        flex: 1 1 0px;
    }

    .active {
        position: relative;
    }

    .active::before {
        content: "";
        position: absolute;
        left: 0;
        top: -2px;
        height: 2px;
        background-color: ${({ theme }) => theme.primary};
        animation: ${fillBar} 10s linear infinite;
        z-index: 3;
    }
`;

const MainButton = styled.div`
    box-sizing: border-box;
    cursor: pointer;
    background: white;
    padding: 3px 3px 3px 20px;

    border-radius: 20px;
    text-transform: capitalize;
    color: ${({ theme }) => theme.primary};
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    .circle {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: ${({ theme }) => theme.primary};
        transition: 0.4s;
    }

    &:hover {
        .circle {
            background: ${({ theme }) => theme.primaryHover};
        }
    }
`;

const ActionBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const backgrounds = [
    "header_canyoning.jpg",
    "header_hiking.jpg",
    "header_canyoning.jpg",
    "header_canyoning.jpg",
    "header_canyoning.jpg",
];

function Header({ text }) {
    const [backgroundIndex, setBackgroundIndex] = useState(0);
    const counter = useRef(0);

    const [active, setActive] = useState("en");
    const themeContext = useContext(ThemeContext);

    useEffect(() => {
        if (counter.current < 100) {
            counter.current += 1;
            const timer = setTimeout(
                () =>
                    setBackgroundIndex(
                        backgroundIndex == backgrounds.length - 1
                            ? 0
                            : backgroundIndex + 1
                    ),
                10000
            );

            return () => clearTimeout(timer);
        }
    }, [backgroundIndex]);

    useEffect(() => {
        setActive(localStorage.getItem("language"));
    }, []);

    function handleLanguageClick(language) {
        localStorage.setItem("language", language);
        setActive(language);
        location.reload();
    }

    return (
        <Container color={themeContext.inverseText}>
            <BackgroundContainer
                background={"/image/" + backgrounds[backgroundIndex]}
            >
                <TitleContainer>
                    <AnimationContainer animateIn="fadeIn" offset={0}>
                        <h1>{text.subtitle}</h1>
                    </AnimationContainer>
                </TitleContainer>

                <ActionBar>
                    <Social>
                        <a
                            href="https://www.instagram.com/belocalmadeira/"
                            target="_blank"
                        >
                            <img
                                src="/icon/instagram.png"
                                alt="instagram link"
                            />
                        </a>
                        <a
                            href="https://www.tiktok.com/@belocalmadeira"
                            target="_blank"
                        >
                            <img src="/icon/tiktok.svg" alt="tiktok link" />
                        </a>
                    </Social>

                    <MainButton>
                        {text.button} <div className="circle" />
                    </MainButton>

                    <LanguageContainer>
                        <div
                            className={
                                "indicator " + (active == "pt" && "active")
                            }
                            onClick={() => handleLanguageClick("pt")}
                        >
                            pt
                        </div>
                        <div
                            className={
                                "indicator " + (active == "en" && "active")
                            }
                            onClick={() => handleLanguageClick("en")}
                        >
                            en
                        </div>
                    </LanguageContainer>
                </ActionBar>
            </BackgroundContainer>
            <CarouselBar>
                {text.carousel.map((activity, index) => (
                    <div
                        onClick={() => setBackgroundIndex(index)}
                        className={index == backgroundIndex && "active"}
                    >
                        {activity}
                    </div>
                ))}
            </CarouselBar>
        </Container>
    );
}

export default Header;
