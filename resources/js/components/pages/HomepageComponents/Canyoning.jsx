import { Image, Carousel } from "antd";
import React from "react";
import styled from "styled-components";
import { dimensions } from "../../../helper";
import { Link } from "react-router-dom";
import {
    containerCommonStyle,
    phoneButtonStyle,
    secundaryButtonStyle,
    Title,
} from "../Form/styles";

const Container = styled.section`
    ${containerCommonStyle}
    display: flex;
    justify-content: space-between;

    margin: 50px auto;

    flex-wrap: wrap;

    img {
        border-radius: 20px;
    }
`;

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    padding: 30px;
    box-sizing: border-box;

    .text-container {
        display: flex;
        justify-content: space-between;

        .text {
            width: 70%;
            padding-right: 15%;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;

            h2 {
                font-family: "Russo One", sans-serif;
                font-size: clamp(28px, 4vw, 46px);
                line-height: 100%;
                margin-bottom: 30px;

                span {
                    color: ${({ theme }) => theme.primary};
                }
            }

            p {
                font-weight: 300;
                font-size: clamp(16px, 2vw, 18px);
                text-align: justify;
            }

            .last-paragraph {
                flex: 1;
            }

            .button-container {
                display: flex;
                align-items: center;
                gap: 20px;

                .action-button {
                    ${secundaryButtonStyle}
                }

                .phone-button {
                    ${phoneButtonStyle}
                }
            }
        }

        img {
            width: 30%;
            object-fit: cover;
        }
    }

    .horizontal-image {
        margin-top: 30px;
        width: 100%;
        display: flex;
        justify-content: flex-end;

        img {
            width: 50%;
            height: auto;
            object-fit: cover;
        }
    }

    @media (max-width: ${dimensions.lg}) {
        width: 100%;

        .horizontal-image > img {
            width: 70%;
        }
    }

    @media (max-width: ${dimensions.md}) {
        .text-container {
            flex-wrap: wrap;

            .text {
                width: 100%;
                padding: 0px;
                margin-bottom: 20px;
            }
        }

        .text-container > img,
        .horizontal-image > img {
            width: 100%;
            max-height: 300px;
        }
    }
`;

const VerticalImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    box-sizing: border-box;
    width: 20%;

    img {
        width: 100%;
        height: 70%;
        object-fit: cover;
    }

    @media (max-width: ${dimensions.lg}) {
        display: none;
    }
`;

function Canyoning({ text }) {
    return (
        <Container>
            <InfoContainer>
                <div className="text-container">
                    <div className="text">
                        <Title>{text.title}</Title>
                        <p>{text.paragraphs[0]}</p>
                        <p className="last-paragraph">{text.paragraphs[1]}</p>

                        <div className="button-container">
                            <Link to="/activities/canyoning">
                                <button className="action-button">
                                    <div className="circle" /> {text.buttons[0]}
                                </button>
                            </Link>
                            <a
                                href="https://api.whatsapp.com/send?l=en&phone=351935124260"
                                target="_blank"
                            >
                                <button className="phone-button">
                                    {text.buttons[1]}
                                </button>
                            </a>
                        </div>
                    </div>

                    <img src="/image/activities/03_canyoning.jpg" />
                </div>

                <div className="horizontal-image">
                    <img src="/image/activities/02_canyoning.jpg" />
                </div>
            </InfoContainer>
            <VerticalImageContainer>
                <img src="/image/activities/01_canyoning.jpg" />
            </VerticalImageContainer>
        </Container>
    );
}

export default Canyoning;
