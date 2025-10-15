import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import { dimensions, maxWidth } from "../../../helper";
import { Title } from "../Form/styles";

const Container = styled.section`
    background: ${({ theme }) => theme.primary};
    color: white;
    min-height: 100vh;
    width: 100%;
    position: relative;
    box-sizing: border-box;
    padding: 100px 0px;
`;

const Content = styled.div`
    max-width: ${maxWidth};
    margin: 50px auto 0px auto;
    width: 100%;
    display: flex;
    flex-wrap: wrap;

    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: ${dimensions.md}) {
        .hidden-column {
            display: none;
        }
    }
`;

const Column = styled.div`
    width: 33%;
    display: flex;
    flex-direction: column;
    justify-content: ${(props) =>
        props.fullHeight ? "space-between" : "flex-start"};
    align-items: stretch;

    @media (max-width: ${dimensions.md}) {
        width: 50%;
    }
`;

const ServiceContainer = styled.div`
    width: 80%;
    padding: 60px 30px;
    box-sizing: border-box;
    text-align: center;

    h3 {
        color: inherit;
        font-size: clamp(20px, 2.5vw, 26px);
    }

    p {
        font-weight: 300;
        font-size: clamp(16px, 2vw, 18px);
    }

    img {
        width: 40px;
        height: auto;
        margin-bottom: 5px;
    }

    @media (max-width: ${dimensions.md}) {
        width: 100%;
        padding: 30px 10px;

        p {
            display: none;
        }

        img {
            width: 30px;
        }
    }
`;

const ImageContainer = styled.div`
    width: 80%;
    box-sizing: border-box;
    margin: auto;

    @media (max-width: ${dimensions.md}) {
        display: none;
    }

    img {
        width: 100%;
        height: 100%;
        border-radius: 20px;
    }
`;

const HiddenImage = styled.img`
    width: 70%;
    margin: auto;
    border-radius: 20px;
    display: none;

    @media (max-width: ${dimensions.md}) {
        display: block;
    }

    @media (max-width: ${dimensions.sm}) {
        width: 80%;
    }
`;

const Service = ({ moveToRight = false, center = false, text, icon }) => (
    <ServiceContainer
        style={{
            margin: center ? "auto" : "0px",
            marginLeft: moveToRight ? "auto" : center ? "auto" : "0px",
        }}
    >
        <img src={"/icon/homepage/" + icon + ".svg"} alt={text.title} />
        <h3>{text.title}</h3>
        <p>{text.description}</p>
    </ServiceContainer>
);

function Services({ text }) {
    const themeContext = useContext(ThemeContext);
    return (
        <Container>
            <Title center>{text.title}</Title>
            <Content>
                <HiddenImage src="/image/homepage/service.webp" />
                <Column>
                    <Service text={text.items[0]} icon="experience" />
                    <Service
                        text={text.items[1]}
                        icon="equipment"
                        moveToRight
                    />
                </Column>
                <Column className="hidden-column" fullHeight>
                    <ImageContainer>
                        <picture>
                            <source
                                src="/image/homepage/service.webp"
                                type="image/webp"
                            />
                            <img
                                src="/image/homepage/service.jpg"
                                loading="lazy"
                            />
                        </picture>
                    </ImageContainer>

                    <Service
                        text={text.items[2]}
                        icon="transportation"
                        center
                    />
                </Column>
                <Column>
                    <Service text={text.items[3]} icon="photo" moveToRight />
                    <Service text={text.items[4]} icon="guide" />
                </Column>
            </Content>
        </Container>
    );
}

export default Services;
