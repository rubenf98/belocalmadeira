import React, { Suspense } from "react";
import styled, { withTheme } from "styled-components";
import { Col, Row } from "antd";
import { dimensions, maxWidth } from "../../helper";
import PageHeader from "../common/PageHeader";
import Faq from "./HomepageComponents/Faq";
import { containerCommonStyle } from "./Form/styles";

const Container = styled.div`
    margin-top: 150px;
`;

const InfoContainer = styled.div`
    width: 100%;
    ${containerCommonStyle}
    display: flex;
    align-items: center;

    gap: 100px;

    @media (max-width: ${dimensions.md}) {
        flex-wrap: wrap;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        max-height: 80vh;
        border-radius: 20px;
        box-shadow: 0px 00px 10px 0px rgba(0, 0, 0, 0.3);
    }
`;

const Column = styled.div`
    width: 50%;
    box-sizing: border-box;
    h2 {
        font-size: clamp(40px, 5vw, 60px);
        line-height: 100%;
    }

    p {
        font-size: 20px;
        font-weight: 300;
        text-align: justify;
    }

    .mobile {
        display: none;
        margin: 20px auto;
        max-height: 50vh;
        object-fit: cover;
    }

    @media (max-width: ${dimensions.md}) {
        width: 100%;

        .desktop {
            display: none;
        }

        .mobile {
            display: flex;
        }
    }
`;

function About({ theme }) {
    const { text } = require("../../assets/" +
        localStorage.getItem("language") +
        "/about");

    const homepageText = require("../../assets/" +
        localStorage.getItem("language") +
        "/homepage");

    return (
        <Container>
            <InfoContainer>
                <Column text={theme.lightText} xs={24} md={12}>
                    <h2>{text.section.title}</h2>

                    <img
                        className="mobile"
                        src="/images/activities/canyoning/13.jpg"
                        alt="beautiful green waterfall"
                    />

                    {text.section.items.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </Column>
                <Column className="desktop-image" xs={24} md={12}>
                    <img
                        className="desktop"
                        src="/images/activities/canyoning/13.jpg"
                        alt="beautiful green waterfall"
                    />
                </Column>
            </InfoContainer>
            <Faq text={homepageText.text.faq} />
        </Container>
    );
}

export default withTheme(About);
