import React, { useEffect, useState, useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import { dimensions } from "../../helper";
import { Link } from "react-router-dom";

const Container = styled.section`
    width: 100%;
    height: 100vh;
    position: relative;
    display: flex;
    overflow: hidden;
    color: ${(props) => props.color};
    background-color: ${({ theme }) => theme.primary};

    @media (max-width: ${dimensions.md}) {
        flex-direction: column;
        gap: 0px;
    }
`;

const Content = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    padding: 20px 50px;
    box-sizing: border-box;

    @media (max-width: ${dimensions.md}) {
        width: 100%;
        padding: 20px;
    }
`;

const BackgroundContainer = styled.div`
    width: 50%;
    height: 100vh;

    img {
        width: 100%;
        height: 100%;
        border-top-left-radius: 20%;
        object-fit: cover;
    }

    @media (max-width: ${dimensions.md}) {
        width: 100%;
        flex: 1;
    }
`;

const TitleContainer = styled.div`
    width: 100%;
    display: flex;
    margin: auto;
    flex: 1;
    align-items: center;

    h1 {
        color: white;
        box-sizing: border-box;
        line-height: 100%;
        font-size: clamp(40px, 8vw, 180px);
        font-family: "Russo One", sans-serif;
        margin: 0px;
    }

    h2 {
        text-transform: uppercase;
        color: white;
        font-weight: 400;
        padding-bottom: 50px;
        box-sizing: border-box;
    }

    @media (max-width: ${dimensions.md}) {
        justify-content: center;
        flex: 0;

        h1,
        h2 {
            text-align: center;
        }

        h2 {
            padding-bottom: 20px;
        }
    }
`;

const LinkContainer = styled.div`
    display: flex;
    flex-direction: column;

    a {
        font-size: clamp(16px, 2vw, 22px);
        color: white;
    }

    .website {
        text-decoration: underline;
    }

    @media (max-width: ${dimensions.md}) {
        a {
            text-align: center;
        }
    }
`;

const SocialContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    img {
        width: 50px;
    }

    @media (max-width: ${dimensions.md}) {
        justify-content: center;
        margin-bottom: 30px;

        img {
            width: 30px;
        }
    }
`;
const Logo = styled(Link)`
    color: white;
    text-decoration: none;
    font-weight: bold;

    img {
        height: 90px;
    }

    @media (max-width: ${dimensions.md}) {
        margin: auto auto 30px auto;

        img {
            height: 40px;
        }
    }
`;

function Visit({ text }) {
    const themeContext = useContext(ThemeContext);

    return (
        <Container color={themeContext.inverseText} id="header-container">
            <Content>
                <Logo to="/">
                    <img
                        src="/images/logo_white.png"
                        alt="be local madeira white logo"
                    />
                </Logo>
                <TitleContainer>
                    <div>
                        <h1>Be Local Madeira</h1>
                        <h2>Local Experiences</h2>

                        <SocialContainer>
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
                            <a
                                href="https://www.facebook.com/BeLocalMadeira"
                                target="_blank"
                            >
                                <img
                                    src="/icon/facebook.svg"
                                    alt="facebook link"
                                />
                            </a>
                        </SocialContainer>
                    </div>
                </TitleContainer>

                <LinkContainer>
                    <Link className="website" to="/">
                        Visit us at Belocalmadeira.com
                    </Link>
                    <a target="__blank" href="mailto:belocalmadeira@gmail.com">
                        Belocalmadeira@gmail.com
                    </a>
                    <a
                        target="__blank"
                        href="https://api.whatsapp.com/send?l=en&phone=351935124260"
                    >
                        +351 935 124 260
                    </a>

                    <a
                        className="website"
                        target="__blank"
                        href="https://g.page/r/CfLM1KF54nGeEBM/review"
                    >
                        Feedback
                    </a>
                </LinkContainer>
            </Content>
            <BackgroundContainer background={themeContext.primary}>
                <img
                    src="/images/visit.jpg"
                    alt="couple doing canyoning and kissing"
                />
            </BackgroundContainer>
        </Container>
    );
}

export default Visit;
