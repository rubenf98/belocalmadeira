import React from "react";
import styled from "styled-components";
import { dimensions } from "../../helper";
import AnimationContainer from "./AnimationContainer";

const Container = styled.div`
    margin: 50px auto 100px auto;
    width: 100%;

    h2,
    h3 {
        font-family: "Playfair Display", serif;
    }
`;

const Title = styled.h2`
    color: inherit;
    text-align: center;
    margin: 0px auto;
    width: 50%;
    font-size: 60px;
    text-transform: capitalize;

    @media (max-width: ${dimensions.lg}) {
        width: 70%;
    }

    @media (max-width: ${dimensions.md}) {
        font-size: 40px;
        width: 90%;
    }

    @media (max-width: ${dimensions.sm}) {
        font-size: 40px;
        width: 100%;
    }

    span {
        font-weight: bold;
        font-family: "Merienda One", cursive;
    }
`;

const SubTitle = styled.h3`
    color: inherit;
    text-align: center;
    margin: 50px auto 0px auto;
    width: 100%;
    font-size: 20px;
    text-transform: uppercase;

    @media (max-width: ${dimensions.sm}) {
        font-size: 18px;
    }
`;

const SectionTitle = ({ title, subtitle }) => {
    return (
        <Container>
            <SubTitle>{subtitle}</SubTitle>
            <Title>
                <AnimationContainer animateIn="fadeIn">
                    {title}
                </AnimationContainer>
            </Title>
        </Container>
    );
};

export default SectionTitle;
