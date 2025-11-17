import React, { Suspense } from "react";
import styled, { withTheme } from "styled-components";
import { Col, Row } from "antd";
import { dimensions, maxWidth } from "../../helper";
import PageHeader from "../common/PageHeader";
import Faq from "./HomepageComponents/Faq";
import { containerCommonStyle } from "./Form/styles";

const Container = styled.div`
    margin-top: 150px;

    .mobile-image {
        display: none;
        margin-bottom: 20px;
        max-height: 400px;
    }

    @media (max-width: ${dimensions.md}) {
        .desktop-image {
            display: none;
        }

        .mobile-image {
            display: block;
        }
    }
`;

const InfoContainer = styled.div`
    width: 100%;
    ${containerCommonStyle}
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 100px;

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
    h2 {
        font-size: clamp(40px, 5vw, 60px);
        line-height: 100%;
    }

    p {
        font-size: 20px;
        font-weight: 300;
        text-align: justify;
    }

    @media (max-width: ${dimensions.md}) {
        width: 100%;
    }
`;

function About({ theme }) {
    const { text } = require("../../assets/" +
        localStorage.getItem("language") +
        "/about");

    const homepageText = require("../../assets/" +
        localStorage.getItem("language") +
        "/homepage");

    const AboutSection = React.lazy(() => import("./HomepageComponents/About"));

    return (
        <Container>
            <InfoContainer>
                <Column text={theme.lightText} xs={24} md={12}>
                    <h2>{text.section.title}</h2>
                    <img
                        className="mobile-image"
                        src="/image/about/about3.jpg"
                        alt=""
                    />
                    {text.section.items.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </Column>
                <Column className="desktop-image" xs={24} md={12}>
                    <img src="/image/about/about3.jpg" alt="" />
                </Column>
            </InfoContainer>
            <Suspense fallback={<div></div>}>
                <AboutSection text={homepageText.text.about} />
            </Suspense>
            <Faq text={homepageText.text.faq} />

            {/* <PartnerContainer type="flex" justify="space-around" align="middle">
                <img loading="lazy" src="/image/about/fastrope.png" alt="fastrope" />
                <img loading="lazy" src="/image/about/tripadvisor.png" alt="tripadvisor" />
                <img loading="lazy" src="/image/about/movigo.svg" alt="movigo" />
                <img loading="lazy" src="/image/about/espacomilenio.png" alt="espacomilenio" />
                <img style={{ filter: "contrast(1) grayscale(1)" }} loading="lazy" src="/image/about/liveinmadeira.png" alt="liveinmadeira" />
            </PartnerContainer> */}
        </Container>
    );
}

export default withTheme(About);
